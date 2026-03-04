import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PlaygroundSessionCard({ session }) {
  return (
    <div
      style={{
        borderRadius: '20px',
        background: '#111827',
        border: '1px solid rgba(255,255,255,0.05)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '420px',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '24px',
        }}
      >
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: session.iconBackground,
              color: session.iconColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
              fontWeight: 800,
            }}
          >
            {session.icon}
          </div>
          <div>
            <h3
              style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                margin: '0 0 4px 0',
                color: 'white',
              }}
            >
              {session.name}
            </h3>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--text-secondary)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.5px',
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              {session.repository}
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div
            style={{
              fontSize: '0.65rem',
              color: 'var(--text-secondary)',
              fontWeight: 700,
              letterSpacing: '1px',
              marginBottom: '2px',
            }}
          >
            HEALTH
          </div>
          <div
            style={{
              color: session.healthColor,
              fontWeight: 800,
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            {session.health}
          </div>
        </div>
      </div>

      <div
        style={{
          background: '#0B0F19',
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.05)',
          padding: '16px',
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {session.codeLines.map((line, index) => (
            <div
              key={`${session.name}-line-${index}`}
              style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                paddingLeft: line.indent ?? 0,
              }}
            >
              {line.dotColor ? (
                <div
                  style={{
                    width: line.dotSize || '6px',
                    height: line.dotSize || '6px',
                    borderRadius: '50%',
                    background: line.dotColor,
                  }}
                ></div>
              ) : null}
              <div
                style={{
                  width: line.width,
                  height: '6px',
                  borderRadius: '3px',
                  background: line.barColor || 'rgba(255,255,255,0.05)',
                }}
              ></div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginTop: 'auto',
            paddingTop: '16px',
          }}
        >
          <span
            style={{
              fontSize: '0.7rem',
              color: 'var(--text-secondary)',
              fontWeight: 500,
              fontFamily: 'monospace',
            }}
          >
            Last sync: {session.lastSync}
          </span>
          <span
            style={{
              padding: '4px 10px',
              background: session.tagBackground,
              color: session.tagColor,
              borderRadius: '8px',
              fontSize: '0.7rem',
              fontWeight: 700,
            }}
          >
            {session.tag}
          </span>
        </div>

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundSize: '16px 16px',
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
            pointerEvents: 'none',
          }}
        ></div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0',
        }}
      >
        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          Active Contributors
        </span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: '#ffedd5',
              border: '2px solid #111827',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              marginLeft: '-8px',
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, #fde68a, #f59e0b)',
              }}
            ></div>
          </div>
          {session.extraContributors ? (
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                border: '2px solid #111827',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.6rem',
                fontWeight: 700,
                color: 'white',
                marginLeft: '-8px',
                zIndex: 1,
              }}
            >
              {session.extraContributors}
            </div>
          ) : null}
        </div>
      </div>

      <Link
        to="/dev/playground"
        style={{
          width: '100%',
          padding: '16px',
          borderRadius: '12px',
          background: 'white',
          color: '#0f172a',
          fontWeight: 800,
          fontSize: '0.95rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          border: 'none',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
        className="hover-lift"
      >
        Enter Playground <ArrowRight size={18} />
      </Link>
    </div>
  );
}