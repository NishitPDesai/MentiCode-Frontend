import { AlertTriangle, Code2 } from 'lucide-react';

export default function PlaygroundEditorPanel({
  activeMainTab,
  activeFile,
  isCleaned,
  isRefactored,
}) {
  return (
    <section
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        background: '#0d1117',
        position: 'relative',
      }}
    >
      {activeMainTab === 'Code Standards' ? (
        <>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 16px',
              background: '#161b22',
              borderBottom: '1px solid #30363d',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Code2 size={16} color="#258cf4" />
              <span
                style={{
                  fontSize: '0.75rem',
                  fontFamily: '"Fira Code", monospace',
                  color: '#cbd5e1',
                }}
              >
                src/services/{activeFile}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div
                style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}
              ></div>
              <div
                style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }}
              ></div>
              <div
                style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}
              ></div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              padding: '24px',
              fontFamily: '"Fira Code", monospace',
              fontSize: '0.875rem',
              lineHeight: 1.8,
              overflowY: 'auto',
            }}
          >
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ color: '#475569', textAlign: 'right', userSelect: 'none', width: '24px' }}>
                1
                <br />2
                <br />3
                <br />4
                <br />5
                <br />6
                <br />7
                <br />8
                <br />9
                <br />10
                <br />11
                <br />12
                <br />13
                <br />14
                <br />15
                <br />16
              </div>
              <div style={{ color: '#cbd5e1', whiteSpace: 'pre' }}>
                {activeFile === 'authController.js' ? (
                  <>
                    <span style={{ color: '#c084fc' }}>import</span> {'{'} config {'}'}{' '}
                    <span style={{ color: '#c084fc' }}>from</span>{' '}
                    <span style={{ color: '#86efac' }}>'./env'</span>;
                    <br />
                    <span style={{ color: '#c084fc' }}>import</span>{' '}
                    <span className="highlight-best" style={{ color: 'white' }}>
                      authService from './authService'
                    </span>
                    ;
                    <br />
                    <span style={{ color: '#c084fc' }}>export const</span>{' '}
                    <span className="highlight-good" style={{ color: 'white' }}>
                      handleUserLogin
                    </span>{' '}
                    = <span style={{ color: '#c084fc' }}>async</span> (req, res) ={'>'} {'{'}
                    <br /> {'  '}
                    <span style={{ color: '#c084fc' }}>const</span> {'{'} email, password {'}'} =
                    req.body;
                    <br />
                    {!isCleaned && (
                      <>
                        {'  '}
                        <span style={{ color: '#64748b' }}>// Check for hardcoded secret</span>
                        <br />
                      </>
                    )}
                    {'  '}
                    {isRefactored ? (
                      <>
                        <span style={{ color: '#c084fc' }}>const</span>{' '}
                        <span className="highlight-best" style={{ color: 'white' }}>
                          SECRET_KEY = config.SECRET
                        </span>
                        ;
                        <br />
                      </>
                    ) : (
                      <>
                        <span style={{ color: '#c084fc' }}>const</span>{' '}
                        <span className="highlight-bad" style={{ color: 'white' }}>
                          SECRET_KEY = "DEV_ONLY_12345"
                        </span>
                        ;
                        <br />
                      </>
                    )}
                    {'  '}
                    <span style={{ color: '#c084fc' }}>try</span> {'{'}
                    <br /> {'    '}
                    <span style={{ color: '#c084fc' }}>const</span> user ={' '}
                    <span style={{ color: '#c084fc' }}>await</span> authService.
                    <span style={{ color: '#93c5fd' }}>validate</span>(email, password);
                    <br /> {'    '}
                    <span style={{ color: '#c084fc' }}>if</span> (user) {'{'}
                    <br /> {'      '}
                    <span style={{ color: '#c084fc' }}>return</span> res.
                    <span style={{ color: '#93c5fd' }}>status</span>(
                    <span style={{ color: '#fcd34d' }}>200</span>).<span style={{ color: '#93c5fd' }}>json</span>
                    ({'{'} token: <span style={{ color: '#86efac' }}>'token'</span> {'}'});
                    <br /> {'    }'}
                    <br /> {'  }'} <span style={{ color: '#c084fc' }}>catch</span> (err) {'{'}
                    <br /> {'    '}
                    <span style={{ color: '#c084fc' }}>return</span> res.
                    <span style={{ color: '#93c5fd' }}>status</span>(
                    <span style={{ color: '#fcd34d' }}>500</span>).<span style={{ color: '#93c5fd' }}>json</span>
                    ({'{'} error: err.message {'}'});
                    <br /> {'  }'}
                    <br />
                    {'}'};
                  </>
                ) : (
                  <>
                    <span style={{ color: '#c084fc' }}>import</span> mongoose{' '}
                    <span style={{ color: '#c084fc' }}>from</span>{' '}
                    <span style={{ color: '#86efac' }}>'mongoose'</span>;
                    <br />
                    <br />
                    <span style={{ color: '#c084fc' }}>const</span> userSchema ={' '}
                    <span style={{ color: '#c084fc' }}>new</span> mongoose.
                    <span style={{ color: '#93c5fd' }}>Schema</span>({'{'}
                    <br /> {'  '}email: {'{'} type: String, required:{' '}
                    <span style={{ color: '#fcd34d' }}>true</span>, unique:{' '}
                    <span style={{ color: '#fcd34d' }}>true</span> {'}'},
                    <br /> {'  '}password: {'{'} type: String, required:{' '}
                    <span style={{ color: '#fcd34d' }}>true</span> {'}'},
                    <br /> {'  '}role: {'{'} type: String, default:{' '}
                    <span style={{ color: '#86efac' }}>'user'</span> {'}'}
                    <br />
                    {'}'});
                    <br />
                    <br />
                    <span style={{ color: '#c084fc' }}>export default</span> mongoose.
                    <span style={{ color: '#93c5fd' }}>model</span>(
                    <span style={{ color: '#86efac' }}>'User'</span>, userSchema);
                  </>
                )}
              </div>
            </div>
          </div>

          {!isRefactored && activeFile === 'authController.js' && (
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                right: '24px',
                background: '#223649',
                border: '1px solid #ef4444',
                padding: '12px',
                borderRadius: '8px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                maxWidth: '320px',
                zIndex: 10,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <AlertTriangle color="#ef4444" size={20} />
                <div>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'white',
                      margin: '0 0 4px 0',
                    }}
                  >
                    Security Risk
                  </p>
                  <p
                    style={{
                      fontSize: '0.625rem',
                      color: '#cbd5e1',
                      lineHeight: 1.4,
                      margin: 0,
                    }}
                  >
                    Hardcoded secrets detected in version control. Move to environment
                    variables.
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            textAlign: 'center',
          }}
        >
          <Code2 size={48} color="rgba(56, 189, 248, 0.2)" style={{ marginBottom: '16px' }} />
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px', color: 'white' }}>
            {activeMainTab} Mode
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', lineHeight: 1.6 }}>
            Switch to the Code Standards tab to see the active vulnerability
            demonstration. Other environments are still booting up.
          </p>
        </div>
      )}
    </section>
  );
}