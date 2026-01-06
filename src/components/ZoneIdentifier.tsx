import { useState, useEffect, useRef, useMemo } from 'react';
import type { Zone } from '../types';

interface ZoneIdentifierProps {
  zones: Zone[];
  onIdentify: (zoneName: string) => void;
  onCancel: () => void;
  position: { x: number; y: number };
}

export function ZoneIdentifier({ zones, onIdentify, onCancel, position }: ZoneIdentifierProps) {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const suggestions = useMemo(() => {
    if (input.length > 0) {
      return zones.filter(z => 
        z.name.toLowerCase().includes(input.toLowerCase())
      ).slice(0, 5);
    }
    return [];
  }, [input, zones]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onIdentify(input.trim());
    }
  };

  const handleSuggestionClick = (name: string) => {
    onIdentify(name);
  };

  return (
    <div style={{
      position: 'absolute',
      left: `${position.x}px`,
      top: `${position.y}px`,
      transform: 'translate(-50%, -120%)',
      backgroundColor: 'white',
      padding: '16px',
      borderRadius: '16px',
      boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
      zIndex: 1000,
      width: '240px',
      border: '1px solid #f1f5f9'
    }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '8px', color: '#64748b', fontSize: '0.8rem', fontWeight: 600 }}>Cílová část:</div>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Zadej název..."
          style={{
            width: '100%',
            padding: '8px 12px',
            borderRadius: '10px',
            border: '2px solid #e2e8f0',
            fontSize: '1rem',
            outline: 'none',
            transition: 'border-color 0.2s'
          }}
          onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
        />
        {suggestions.length > 0 && (
          <div style={{
            marginTop: '8px',
            backgroundColor: '#f8fafc',
            borderRadius: '10px',
            overflow: 'hidden',
            border: '1px solid #e2e8f0'
          }}>
            {suggestions.map((s: Zone) => (
              <div
                key={s.id}
                onClick={() => handleSuggestionClick(s.name)}
                style={{
                  padding: '8px 12px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {s.name}
              </div>
            ))}
          </div>
        )}
        <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
          <button
            type="submit"
            style={{
              flex: 2,
              padding: '8px',
              backgroundColor: '#4f46e5',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Potvrdit
          </button>
          <button
            type="button"
            onClick={onCancel}
            style={{
              flex: 1,
              padding: '8px',
              backgroundColor: '#f1f5f9',
              color: '#64748b',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Zrušit
          </button>
        </div>
      </form>
    </div>
  );
}
