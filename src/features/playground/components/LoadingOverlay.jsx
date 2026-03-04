export default function LoadingOverlay({ label = 'LOADING WORKSPACES...' }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: '#0f172a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          border: '4px solid rgba(56, 189, 248, 0.1)',
          borderTopColor: '#38bdf8',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      ></div>
      <p
        style={{
          marginTop: '16px',
          color: 'var(--text-secondary)',
          fontWeight: 600,
          fontSize: '0.9rem',
          letterSpacing: '1px',
        }}
      >
        {label}
      </p>
      <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}