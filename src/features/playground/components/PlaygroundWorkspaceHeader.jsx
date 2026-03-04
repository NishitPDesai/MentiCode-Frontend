import {
  ArrowLeft,
  CheckSquare,
  Code2,
  FlaskConical,
  GitBranch,
  Info,
  Rocket,
  Search,
  TerminalSquare,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const tabs = [
  { name: 'Intro', icon: <Info size={16} /> },
  { name: 'Architecture', icon: <GitBranch size={16} /> },
  { name: 'Code Standards', icon: <CheckSquare size={16} /> },
  { name: 'Testing', icon: <FlaskConical size={16} /> },
  { name: 'Deployment', icon: <Rocket size={16} /> },
];

export default function PlaygroundWorkspaceHeader({
  activeMainTab,
  setActiveMainTab,
}) {
  return (
    <>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #223649',
          padding: '12px 24px',
          background: '#101922',
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link
              to="/dev/playgrounds"
              style={{
                color: '#94a3b8',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <ArrowLeft size={20} />
            </Link>
            <div style={{ color: '#258cf4', display: 'flex', alignItems: 'center' }}>
              <TerminalSquare size={24} />
            </div>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, margin: 0 }}>Mentic Code</h2>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Search
              size={14}
              color="#94a3b8"
              style={{ position: 'absolute', left: '12px' }}
            />
            <input
              type="text"
              placeholder="Search code patterns..."
              style={{
                width: '256px',
                background: '#223649',
                border: 'none',
                borderRadius: '8px',
                padding: '6px 16px 6px 36px',
                fontSize: '0.875rem',
                color: '#f8fafc',
                outline: 'none',
              }}
            />
          </div>
          <button
            style={{
              background: '#258cf4',
              color: 'white',
              fontSize: '0.75rem',
              fontWeight: 700,
              padding: '6px 16px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            UPGRADE PRO
          </button>
          <Link
            to="/profile"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#ffedd5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, #fde68a, #f59e0b)',
                borderRadius: '50%',
              }}
            ></div>
          </Link>
        </div>
      </header>

      <div style={{ background: '#101922', borderBottom: '1px solid #223649', flexShrink: 0 }}>
        <div
          style={{
            display: 'flex',
            padding: '0 24px',
            gap: '32px',
            overflowX: 'auto',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {tabs.map((tab) => (
            <div
              key={tab.name}
              onClick={() => setActiveMainTab(tab.name)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 0 12px',
                color: activeMainTab === tab.name ? '#258cf4' : '#64748b',
                borderBottom:
                  activeMainTab === tab.name
                    ? '2px solid #258cf4'
                    : '2px solid transparent',
                fontSize: '0.875rem',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {tab.icon} {tab.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}