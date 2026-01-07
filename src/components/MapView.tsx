import { useState, useEffect, useMemo } from 'react';
import type { Zone, UserProgress } from '../types';
import { golemioService, type DistrictFeature } from '../services/golemioService';
import { progressService } from '../services/progressService';
import { NumberingController } from './NumberingController';
import { ZoneDetail } from './ZoneDetail';
import { QuizRunner } from './QuizRunner';
import { ZoneIdentifier } from './ZoneIdentifier';

interface MapViewProps {
  zones: Zone[];
  progress: UserProgress;
  onProgressUpdate?: (progress: UserProgress) => void;
}

const SVG_WIDTH = 1400;
const PADDING = 20;

const ZONE_COLORS: Record<string, string> = {
  'Praha 1': '#ef4444', 'Praha 2': '#3b82f6', 'Praha 3': '#10b981', 'Praha 4': '#8b5cf6',
  'Praha 5': '#f59e0b', 'Praha 6': '#f97316', 'Praha 7': '#06b6d4', 'Praha 8': '#475569',
  'Praha 9': '#94a3b8', 'Praha 10': '#d97706', 'Praha 11': '#dc2626', 'Praha 12': '#2563eb',
  'Praha 13': '#059669', 'Praha 14': '#7c3aed', 'Praha 15': '#ea580c', 'Praha 16': '#b91c1c',
  'Praha 17': '#0ea5e9', 'Praha 18': '#84cc16', 'Praha 19': '#d946ef', 'Praha 20': '#f43f5e',
  'Praha 21': '#10b981', 'Praha 22': '#6366f1',
};

const getZoneColor = (name: string) => {
  if (ZONE_COLORS[name]) return ZONE_COLORS[name];
  // Simple deterministic color generation for named districts
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash % 360);
  const s = 65 + (Math.abs(hash) % 20); // 65-85% saturation
  const l = 45 + (Math.abs(hash) % 15); // 45-60% lightness
  return `hsl(${h}, ${s}%, ${l}%)`;
};

export function MapView({ zones, progress, onProgressUpdate }: MapViewProps) {
  const [districts, setDistricts] = useState<DistrictFeature[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [activeQuizZone, setActiveQuizZone] = useState<Zone | null>(null);
  const [hoveredZoneId, setHoveredZoneId] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [identifyingZone, setIdentifyingZone] = useState<{ zone: Zone, pos: { x: number, y: number } } | null>(null);

  useEffect(() => {
    async function loadData() {
      const data = await golemioService.fetchDistricts();
      setDistricts(data);
      setLoading(false);
    }
    loadData();
  }, []);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const bounds = useMemo(() => {
    if (districts.length === 0) return null;
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    districts.forEach(feature => {
      const coords = feature.geometry.type === 'Polygon' ? [feature.geometry.coordinates] : feature.geometry.coordinates;
      coords.forEach((polygon: any) => polygon[0].forEach((point: [number, number]) => {
        minX = Math.min(minX, point[0]); minY = Math.min(minY, point[1]);
        maxX = Math.max(maxX, point[0]); maxY = Math.max(maxY, point[1]);
      }));
    });
    return { minX, minY, maxX, maxY };
  }, [districts]);

  const mapMetrics = useMemo(() => {
    if (!bounds) return { scale: 1, svgHeight: 400 };
    const { minX, minY, maxX, maxY } = bounds;
    const widthRange = maxX - minX;
    const heightRange = maxY - minY;
    
    const scale = (SVG_WIDTH - 2 * PADDING) / widthRange;
    const svgHeight = heightRange * scale + 2 * PADDING;
    
    return { scale, svgHeight };
  }, [bounds]);

  const projectPoint = (lng: number, lat: number) => {
    if (!bounds) return { x: 0, y: 0 };
    const { minX, minY } = bounds;
    const { scale, svgHeight } = mapMetrics;
    return { 
      x: PADDING + (lng - minX) * scale, 
      y: svgHeight - PADDING - (lat - minY) * scale 
    };
  };

  const getPathData = (feature: DistrictFeature) => {
    const coords = feature.geometry.type === 'Polygon' ? [feature.geometry.coordinates] : feature.geometry.coordinates;
    return coords.map((polygon: any) => {
      const points = polygon[0].map((point: [number, number]) => {
        const { x, y } = projectPoint(point[0], point[1]);
        return `${x},${y}`;
      });
      return `M ${points.join(' L ')} Z`;
    }).join(' ');
  };

  const getLabelPos = (feature: DistrictFeature) => {
    const coords = feature.geometry.type === 'Polygon' ? feature.geometry.coordinates[0] : feature.geometry.coordinates[0][0];
    let sumX = 0, sumY = 0;
    coords.forEach((p: [number, number]) => { sumX += p[0]; sumY += p[1]; });
    return projectPoint(sumX / coords.length, sumY / coords.length);
  };

  const handleDistrictClick = (zone: Zone, event: React.MouseEvent) => {
    // Check if zone is already discovered (assigned a number)
    const assignedNumbers = progress.numbering?.assignedNumbers || {};
    const isDiscovered = !!assignedNumbers[zone.id];

    if (!isDiscovered) {
      // Trigger identification for any undiscovered zone
      const containerRect = event.currentTarget.closest('div')?.getBoundingClientRect();
      if (containerRect) {
        setIdentifyingZone({
          zone,
          pos: { 
            x: event.clientX - containerRect.left, 
            y: event.clientY - containerRect.top 
          }
        });
      }
      return;
    }

    // If discovered, show detail (where quiz can be started)
    setSelectedZone(zone);
  };

  const handleIdentify = (name: string) => {
    if (!identifyingZone) return;
    const { zone } = identifyingZone;
    
    // Check if name matches (case insensitive and handle Praha-X vs Praha X)
    const normalize = (s: string) => s.toLowerCase().replace('-', ' ').trim();
    const isCorrect = normalize(name) === normalize(zone.name);

    const newProgress = progressService.assignNumber(
      zone.id, 
      isCorrect ? zone.order : -1, // Use -1 to trigger error if incorrect
      zone.order
    );

    if (isCorrect) {
      showToast(`Výborně! To je ${zone.name}.`, 'success');
    } else {
      showToast(`Bohužel, to není ${name}.`, 'error');
    }

    onProgressUpdate?.(newProgress);
    setIdentifyingZone(null);
  };

  if (loading) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px', flexDirection: 'column', gap: '20px' }}>
      <div style={{ width: '40px', height: '40px', border: '4px solid #f3f4f6', borderTop: '4px solid #4f46e5', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
      <div style={{ color: '#6b7280', fontWeight: 500 }}>Načítám mapu Prahy...</div>
      <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
  );

  return (
    <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {toast && (
        <div style={{
          position: 'fixed', top: '16px', left: '50%', transform: 'translateX(-50%)', 
          padding: '12px 24px', borderRadius: '16px',
          backgroundColor: toast.type === 'success' ? '#10b981' : '#ef4444', color: 'white',
          fontWeight: 'bold', zIndex: 2000, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
          animation: 'slideIn 0.3s ease-out',
          width: 'max-content',
          maxWidth: '90vw',
          textAlign: 'center'
        }}>
          {toast.message}
          <style>{`@keyframes slideIn { from { transform: translate(-50%, -20px); opacity: 0; } to { transform: translate(-50%, 0); opacity: 1; } }`}</style>
        </div>
      )}

      {progress.phase === 'numbering' && (
        <div style={{ width: '100%' }}>
          <NumberingController 
            progress={progress} 
            totalZones={zones.length} 
            onUpdate={(p) => onProgressUpdate?.(p)}
            onComplete={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
      )}

      {activeQuizZone ? (
        <div style={{ 
          width: '100%', 
          maxWidth: '800px', 
          padding: '24px var(--container-padding)', 
          background: '#fff', 
          borderRadius: '24px', 
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' 
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '32px', fontSize: '1.5rem', fontWeight: 800 }}>Kvíz: {activeQuizZone.name}</h2>
          <QuizRunner 
            zoneId={activeQuizZone.id} 
            questions={activeQuizZone.questions}
            onFinish={() => { 
              setActiveQuizZone(null); 
              // Refresh state to show saved quiz results
              onProgressUpdate?.(progressService.loadProgress());
              showToast('Kvíz dokončen!', 'success');
            }}
            onCancel={() => setActiveQuizZone(null)}
          />
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <div style={{ 
            background: '#fff', borderRadius: '24px', padding: '12px', 
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9',
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <svg 
              width={SVG_WIDTH} 
              height={mapMetrics.svgHeight} 
              viewBox={`0 0 ${SVG_WIDTH} ${mapMetrics.svgHeight}`}
              style={{ 
                overflow: 'visible', 
                maxWidth: '100%', 
                height: 'auto',
                width: '100%',
                maxHeight: 'var(--map-max-height)'
              }}
            >
              <defs>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                  <feOffset dx="0" dy="4" result="offsetblur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.1" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {districts.map((district) => {
                const name = district.properties.name;
                const zone = zones.find(z => z.name === name);
                if (!zone) return null;

                const assignedNumbers = progress.numbering?.assignedNumbers || {};
                const isDiscovered = !!assignedNumbers[zone.id];
                const phaseQuizzes = progress.phase === 'quizzes_unlocked';
                
                // Highlight if discovered or in quiz phase
                const isHighlighted = isDiscovered || phaseQuizzes;

                const color = getZoneColor(name);
                const labelPos = getLabelPos(district);
                const isHovered = hoveredZoneId === zone.id;
                
                // Quiz completed feedback (Refined)
                const stats = progress.quizzes.zoneQuizStats[zone.id];
                const isCompleted = stats && stats.bestScore >= 3;
                const isPerfect = stats && stats.bestScore === 5;

                return (
                  <g 
                    key={name} 
                    onClick={(e) => handleDistrictClick(zone, e)} 
                    onMouseEnter={() => setHoveredZoneId(zone.id)}
                    onMouseLeave={() => setHoveredZoneId(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    <path
                      d={getPathData(district)}
                      fill={isHighlighted ? color : '#f1f5f9'}
                      stroke={isHovered ? '#1e293b' : 'white'}
                      strokeWidth={isHovered ? '2' : '1.5'}
                      opacity={isHighlighted ? (isHovered ? 1 : 0.85) : (isHovered ? 0.8 : 0.6)}
                      filter={isHovered ? 'url(#shadow)' : 'none'}
                      style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
                    />
                    {isHighlighted && (
                      <g style={{ pointerEvents: 'none', transition: 'all 0.3s ease' }}>
                        <circle 
                          cx={labelPos.x} cy={labelPos.y} r={isHovered ? '36' : '30'} 
                          fill="white" 
                          stroke={isPerfect ? '#f59e0b' : (isCompleted ? '#10b981' : 'transparent')}
                          strokeWidth={isPerfect || isCompleted ? '3' : '0'}
                          filter={isPerfect ? 'url(#glow)' : 'none'}
                          style={{ 
                            filter: isHovered ? 'drop-shadow(0 6px 8px rgba(0,0,0,0.2))' : 'drop-shadow(0 3px 6px rgba(0,0,0,0.1))', 
                            transition: 'all 0.3s ease' 
                          }} 
                        />
                        <text
                          x={labelPos.x} y={labelPos.y} textAnchor="middle" dominantBaseline="middle"
                          fill="#1e293b" fontSize={isHovered ? '9' : '8'} fontWeight="900"
                          style={{ transition: 'all 0.3s ease', pointerEvents: 'none' }}
                        >
                          {zone.name.replace('Praha ', 'P')}
                        </text>
                        {isCompleted && (
                          <circle 
                            cx={labelPos.x + 10} cy={labelPos.y - 10} r="4"
                            fill={isPerfect ? '#f59e0b' : '#10b981'}
                            style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }}
                          />
                        )}
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>
            {identifyingZone && (
              <ZoneIdentifier 
                zones={zones}
                position={identifyingZone.pos}
                onIdentify={handleIdentify}
                onCancel={() => setIdentifyingZone(null)}
              />
            )}
          </div>
          
          <div style={{ 
            marginTop: '24px', 
            padding: '12px 20px', 
            background: '#fff', 
            borderRadius: '100px', 
            color: '#64748b', 
            fontSize: '0.85rem',
            fontWeight: 600,
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            border: '1px solid #f1f5f9',
            textAlign: 'center',
            maxWidth: '100%'
          }}>
            {progress.phase === 'numbering' 
              ? `🎯 Odhaleno: ${Object.keys(progress.numbering?.assignedNumbers || {}).length} z ${zones.length} částí`
              : '✨ Skvělé! Teď si vyber část Prahy a vyzkoušej si své znalosti.'}
          </div>
        </div>
      )}

      {selectedZone && (
        <ZoneDetail 
          zone={selectedZone} 
          progress={progress}
          onClose={() => setSelectedZone(null)}
          onStartQuiz={() => { 
            setActiveQuizZone(selectedZone); 
            setSelectedZone(null); 
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}
    </div>
  );
}

