import {
  Activity,
  AlertTriangle,
  AlignLeft,
  CheckCircle2,
} from 'lucide-react';

export default function PlaygroundAuditPanel({
  auditTab,
  setAuditTab,
  isCleaned,
  setIsCleaned,
  isRefactored,
  setIsRefactored,
}) {
  return (
    <aside
      style={{
        width: '384px',
        borderLeft: '1px solid #223649',
        background: '#101922',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
      }}
    >
      <div style={{ padding: '16px', borderBottom: '1px solid #223649' }}>
        <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#e2e8f0', margin: 0 }}>
          Code Audit
        </h3>
      </div>

      <div style={{ display: 'flex', borderBottom: '1px solid #223649' }}>
        <button
          className={`audit-btn ${auditTab === 'The Good' ? 'active good' : ''}`}
          onClick={() => setAuditTab('The Good')}
        >
          The Good
        </button>
        <button
          className={`audit-btn ${auditTab === 'The Problems' ? 'active bad' : ''}`}
          onClick={() => setAuditTab('The Problems')}
        >
          The Problems
        </button>
        <button
          className={`audit-btn ${auditTab === 'Best Practices' ? 'active best' : ''}`}
          onClick={() => setAuditTab('Best Practices')}
        >
          Best Practices
        </button>
      </div>

      <div style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
        {auditTab === 'The Good' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div
                style={{
                  background: 'rgba(34, 197, 94, 0.1)',
                  color: '#22c55e',
                  padding: '6px',
                  borderRadius: '8px',
                }}
              >
                <CheckCircle2 size={18} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#e2e8f0', margin: 0 }}>
                  Meaningful Naming
                </h4>
                <p style={{ fontSize: '0.6875rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                  Excellent use of descriptive function name{' '}
                  <code style={{ color: '#22c55e' }}>handleUserLogin</code>. It follows
                  standard naming conventions.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div
                style={{
                  background: 'rgba(34, 197, 94, 0.1)',
                  color: '#22c55e',
                  padding: '6px',
                  borderRadius: '8px',
                }}
              >
                <AlignLeft size={18} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#e2e8f0', margin: 0 }}>
                  Proper Indentation
                </h4>
                <p style={{ fontSize: '0.6875rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                  Code structure is highly readable. Consistent 2-space indentation
                  improves maintainability.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div
                style={{
                  background: 'rgba(34, 197, 94, 0.1)',
                  color: '#22c55e',
                  padding: '6px',
                  borderRadius: '8px',
                }}
              >
                <Activity size={18} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#e2e8f0', margin: 0 }}>
                  Error Handling
                </h4>
                <p style={{ fontSize: '0.6875rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                  Using <code style={{ color: '#22c55e' }}>try...catch</code> for
                  asynchronous operations is a robust pattern for controllers.
                </p>
              </div>
            </div>
          </div>
        )}

        {auditTab === 'The Problems' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div
                style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  color: '#ef4444',
                  padding: '6px',
                  borderRadius: '8px',
                }}
              >
                <AlertTriangle size={18} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#e2e8f0', margin: 0 }}>
                  Hardcoded Secret Key
                </h4>
                <p style={{ fontSize: '0.6875rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                  The <code style={{ color: '#ef4444' }}>SECRET_KEY</code> must never
                  be stored in plain text inside the frontend code or source control.
                </p>
              </div>
            </div>
          </div>
        )}

        {auditTab === 'Best Practices' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ padding: '24px 0 0', borderTop: '1px solid #223649' }}>
              <h5
                style={{
                  fontSize: '0.625rem',
                  fontWeight: 700,
                  color: '#64748b',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  margin: 0,
                }}
              >
                Improvement Comparison
              </h5>
              <div
                style={{
                  background: 'rgba(0,0,0,0.4)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid #1e293b',
                }}
              >
                <div
                  style={{
                    padding: '6px 12px',
                    background: 'rgba(0,0,0,0.2)',
                    fontSize: '0.625rem',
                    color: '#64748b',
                    borderBottom: '1px solid #1e293b',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>Current</span>
                  <span style={{ color: '#ef4444' }}>Risk</span>
                </div>
                <div
                  style={{
                    padding: '12px',
                    fontSize: '0.6875rem',
                    fontFamily: '"Fira Code", monospace',
                    color: 'rgba(248, 113, 113, 0.8)',
                  }}
                >
                  const SECRET_KEY = "DEV_ONLY";
                </div>
                <div
                  style={{
                    padding: '6px 12px',
                    background: 'rgba(0,0,0,0.2)',
                    fontSize: '0.625rem',
                    color: '#22c55e',
                    borderBottom: '1px solid #1e293b',
                    borderTop: '1px solid #1e293b',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>Industry Standard</span>
                  <span>Safe</span>
                </div>
                <div
                  style={{
                    padding: '12px',
                    fontSize: '0.6875rem',
                    fontFamily: '"Fira Code", monospace',
                    color: 'rgba(74, 222, 128, 0.9)',
                  }}
                >
                  const SECRET_KEY = config.SECRET;
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div style={{ padding: '16px', borderTop: '1px solid #223649', background: 'rgba(15, 23, 42, 0.5)' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}
        >
          <h5
            style={{
              fontSize: '0.625rem',
              fontWeight: 700,
              color: '#64748b',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            Audit Status
          </h5>
          <span
            style={{
              fontSize: '0.625rem',
              background: 'rgba(34, 197, 94, 0.2)',
              color: '#22c55e',
              padding: '2px 8px',
              borderRadius: '9999px',
              fontWeight: 700,
            }}
          >
            {isRefactored && isCleaned
              ? '100% Health'
              : isRefactored || isCleaned
                ? '89% Health'
                : '78% Health'}
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <button
            onClick={() => setIsCleaned(true)}
            disabled={isCleaned}
            style={{
              background: isCleaned
                ? 'rgba(34, 197, 94, 0.1)'
                : 'rgba(34, 197, 94, 0.2)',
              color: isCleaned ? '#4ade80' : '#22c55e',
              fontSize: '0.6875rem',
              padding: '8px',
              borderRadius: '6px',
              fontWeight: 700,
              border: 'none',
              cursor: isCleaned ? 'default' : 'pointer',
              opacity: isCleaned ? 0.5 : 1,
              transition: 'all 0.2s',
            }}
          >
            {isCleaned ? 'Cleaned!' : 'Clean Up Comments'}
          </button>
          <button
            onClick={() => {
              setIsRefactored(true);
              setAuditTab('The Good');
            }}
            disabled={isRefactored}
            style={{
              background: isRefactored
                ? 'rgba(59, 130, 246, 0.1)'
                : 'rgba(59, 130, 246, 0.2)',
              color: isRefactored ? '#93c5fd' : '#3b82f6',
              fontSize: '0.6875rem',
              padding: '8px',
              borderRadius: '6px',
              fontWeight: 700,
              border: 'none',
              cursor: isRefactored ? 'default' : 'pointer',
              opacity: isRefactored ? 0.5 : 1,
              transition: 'all 0.2s',
            }}
          >
            {isRefactored ? 'Refactored!' : 'Refactor Pattern'}
          </button>
        </div>
      </div>
    </aside>
  );
}