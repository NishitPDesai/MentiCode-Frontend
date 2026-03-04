import { NavLink } from 'react-router-dom';
import { Code2, Home, Play, ChartBar, User, LayoutDashboard,Rocket,BarChart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Sidebar({ activeTab, setActiveTab ,navItems}) {
  return (
    <aside
      style={{
        width: '280px',
        borderRight: '1px solid var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 20px',
        background: '#0B0F19',
      }}
    >
      <Link
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '48px',
          textDecoration: 'none',
          color: 'white',
        }}
      >
        <div
          className="glass"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--accent-blue)',
            color: 'white',
          }}
        >
          <Code2 size={24} />
        </div>
        <div>
          <span
            style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              fontFamily: 'var(--font-display)',
              display: 'block',
              lineHeight: 1,
            }}
          >
            MENTIC CODE
          </span>
        </div>
      </Link>

      <nav
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`nav-item ${activeTab === item.name ? 'active' : ''}`}
            onClick={(e) => {
              if (item.path === '#') e.preventDefault();
              setActiveTab(item.name);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '12px',
              background:
                activeTab === item.name
                  ? 'rgba(56, 189, 248, 0.1)'
                  : 'transparent',
              color:
                activeTab === item.name
                  ? 'var(--accent-blue)'
                  : 'var(--text-secondary)',
              fontWeight: activeTab === item.name ? 600 : 500,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              border:
                activeTab === item.name
                  ? '1px solid rgba(56, 189, 248, 0.2)'
                  : '1px solid transparent',
            }}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>

      {/* User Profile Card in Sidebar */}
      <Link
        to="/profile"
        className="glass"
        style={{
          marginTop: '24px',
          padding: '16px',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          color: 'white',
          border: '1px solid rgba(255,255,255,0.05)',
          background: '#111827',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#ffedd5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
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
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 700, margin: 0 }}>
            Alex Chen
          </p>
          <p
            style={{
              fontSize: '0.7rem',
              color: 'var(--accent-green)',
              fontWeight: 600,
              margin: 0,
            }}
          >
            Lvl 24 • Pro
          </p>
        </div>

        {/* Level Progress Bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            padding: '0 16px',
            boxSizing: 'border-box',
            transform: 'translateY(12px)',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '4px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '2px',
              overflow: 'hidden',
              display: 'flex',
            }}
          >
            <div
              style={{
                width: '75%',
                height: '100%',
                background: 'var(--accent-green)',
              }}
            ></div>
          </div>
          <div
            style={{
              fontSize: '0.6rem',
              color: 'var(--text-secondary)',
              textAlign: 'right',
              marginTop: '4px',
            }}
          >
            75% TO LVL 25
          </div>
        </div>
      </Link>
    </aside>
  );
}
