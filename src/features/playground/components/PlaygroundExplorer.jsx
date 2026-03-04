import { ChevronDown, FileJson, Folder, FolderPlus } from 'lucide-react';

export default function PlaygroundExplorer({ activeFile, setActiveFile }) {
  return (
    <aside
      style={{
        width: '256px',
        borderRight: '1px solid #223649',
        background: '#0b1219',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          padding: '16px',
          borderBottom: '1px solid #223649',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h3
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#64748b',
            margin: 0,
          }}
        >
          Explorer
        </h3>
        <FolderPlus size={16} color="#94a3b8" style={{ cursor: 'pointer' }} />
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '8px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 8px',
            fontSize: '0.875rem',
            color: '#94a3b8',
            cursor: 'pointer',
          }}
        >
          <ChevronDown size={16} />
          <Folder size={16} color="#eab308" />
          <span style={{ fontWeight: 500 }}>src</span>
        </div>
        <div style={{ paddingLeft: '16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 8px',
              fontSize: '0.875rem',
              color: '#94a3b8',
              cursor: 'pointer',
            }}
          >
            <Folder size={16} color="#60a5fa" />
            <span>services</span>
          </div>
          <div style={{ paddingLeft: '24px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 8px',
                fontSize: '0.875rem',
                background:
                  activeFile === 'authController.js'
                    ? 'rgba(37, 140, 244, 0.1)'
                    : 'transparent',
                color: activeFile === 'authController.js' ? '#258cf4' : '#94a3b8',
                borderRight:
                  activeFile === 'authController.js'
                    ? '2px solid #258cf4'
                    : '2px solid transparent',
                borderRadius: '4px 0 0 4px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onClick={() => setActiveFile('authController.js')}
            >
              <FileJson size={16} />
              <span style={{ fontWeight: 700 }}>authController.js</span>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: '16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 8px',
              fontSize: '0.875rem',
              color: '#94a3b8',
              cursor: 'pointer',
            }}
          >
            <Folder size={16} color="#4ade80" />
            <span>models</span>
          </div>
          <div style={{ paddingLeft: '24px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 8px',
                fontSize: '0.875rem',
                background:
                  activeFile === 'userModel.js'
                    ? 'rgba(37, 140, 244, 0.1)'
                    : 'transparent',
                color: activeFile === 'userModel.js' ? '#258cf4' : '#94a3b8',
                borderRight:
                  activeFile === 'userModel.js'
                    ? '2px solid #258cf4'
                    : '2px solid transparent',
                borderRadius: '4px 0 0 4px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onClick={() => setActiveFile('userModel.js')}
            >
              <FileJson size={16} />
              <span style={{ fontWeight: 700 }}>userModel.js</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}