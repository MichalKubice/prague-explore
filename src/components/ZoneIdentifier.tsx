import { useState, useEffect, useRef, useMemo } from 'react';
import type { Zone } from '../types';

interface ZoneIdentifierProps {
  zones: Zone[];
  onIdentify: (zoneName: string) => void;
  onCancel: () => void;
  position: { x: number; y: number };
}

export function ZoneIdentifier({ zones, onIdentify, onCancel }: ZoneIdentifierProps) {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Small delay to ensure the modal is rendered before focusing
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    return () => clearTimeout(timer);
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
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        padding: 'var(--container-padding)',
        backdropFilter: 'blur(4px)'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onCancel();
      }}
    >
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
        width: '100%',
        maxWidth: '320px',
        border: '1px solid #f1f5f9'
      }}>
        <div style={{ 
          marginBottom: '12px', 
          color: '#1e293b', 
          fontSize: '1.1rem', 
          fontWeight: 700,
          textAlign: 'center'
        }}>
          Která část Prahy je to?
        </div>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Zadej název (např. Praha 1)..."
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '12px',
              border: '2px solid #e2e8f0',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.2s',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
          />
          {suggestions.length > 0 && (
            <div style={{
              marginTop: '8px',
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid #e2e8f0',
              maxHeight: '180px',
              overflowY: 'auto'
            }}>
              {suggestions.map((s: Zone) => (
                <div
                  key={s.id}
                  onClick={() => handleSuggestionClick(s.name)}
                  style={{
                    padding: '12px 16px',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    transition: 'background-color 0.2s',
                    borderBottom: '1px solid #f1f5f9'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  {s.name}
                </div>
              ))}
            </div>
          )}
          <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
            <button
              type="button"
              onClick={onCancel}
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: '#f1f5f9',
                color: '#64748b',
                border: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '0.95rem'
              }}
            >
              Zrušit
            </button>
            <button
              type="submit"
              style={{
                flex: 2,
                padding: '12px',
                backgroundColor: '#4f46e5',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '0.95rem'
              }}
            >
              Potvrdit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
