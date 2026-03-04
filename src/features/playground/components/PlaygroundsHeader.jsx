import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PlaygroundsHeader({ isLoading, activeCount = 0 }) {
  const maxSlots = 5;
  const usagePercent = Math.min((activeCount / maxSlots) * 100, 100);

  return (
    <header
      style={{
        padding: '24px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: 'rgba(15, 23, 42, 0.9)',
        backdropFilter: 'blur(10px)',
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.3s',
      }}
    >
      <div>
        <h1
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            margin: 0,
          }}
        >
          My Playgrounds{' '}
          <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
            Management
          </span>
        </h1>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.5px',
              color: 'var(--text-secondary)',
            }}
          >
            SLOT USAGE{' '}
            <span style={{ color: 'var(--accent-green)' }}>
              {Math.min(activeCount, maxSlots)}/{maxSlots} Active
            </span>
          </div>
          <div
            style={{
              width: '120px',
              height: '4px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '2px',
              overflow: 'hidden',
              display: 'flex',
            }}
          >
            <div
              style={{
                width: `${usagePercent}%`,
                height: '100%',
                background: 'var(--accent-green)',
              }}
            ></div>
          </div>
        </div>

        <Link
          to="/dev/create-playground"
          className="hover-lift"
          style={{
            padding: '10px 20px',
            borderRadius: '8px',
            background: 'var(--accent-blue)',
            color: 'white',
            fontWeight: 700,
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            border: 'none',
            textDecoration: 'none',
          }}
        >
          <Plus size={16} /> New Playground
        </Link>
      </div>
    </header>
  );
}