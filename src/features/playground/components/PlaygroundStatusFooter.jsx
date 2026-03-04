import { AlertCircle, ShieldCheck, Sparkles } from 'lucide-react';

export default function PlaygroundStatusFooter({ isRefactored }) {
  return (
    <footer
      style={{
        height: '32px',
        borderTop: '1px solid #223649',
        background: '#0b1219',
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#64748b' }}>
          <ShieldCheck size={14} color="#22c55e" />
          <span>
            Production Quality:{' '}
            <span style={{ color: '#22c55e', fontWeight: 700 }}>Standard</span>
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#64748b' }}>
          <AlertCircle size={14} color={isRefactored ? '#64748b' : '#ef4444'} />
          <span>
            Critical Issues:{' '}
            <span style={{ color: isRefactored ? '#64748b' : '#ef4444', fontWeight: 700 }}>
              {isRefactored ? '0' : '1'}
            </span>
          </span>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          fontSize: '0.625rem',
          color: '#64748b',
          fontFamily: '"Fira Code", monospace',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Sparkles size={14} color="#3b82f6" /> Best Practices Applied: 4
        </span>
        <span style={{ color: '#258cf4', fontWeight: 700 }}>Mentic Engine v2.0.0</span>
      </div>
    </footer>
  );
}