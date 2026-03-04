import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CreatePlaygroundCard() {
  return (
    <Link
      to="/dev/create-playground"
      style={{
        borderRadius: '20px',
        border: '2px dashed rgba(255,255,255,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        textDecoration: 'none',
        color: 'var(--text-secondary)',
        background: 'rgba(255,255,255,0.01)',
        minHeight: '420px',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
      }}
      className="hover-lift"
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          background: 'rgba(255,255,255,0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <Plus size={24} />
      </div>
      <h3 style={{ fontWeight: 700, color: 'white', fontSize: '1.2rem', margin: 0 }}>
        Create New Playground
      </h3>
      <p style={{ fontSize: '0.9rem', margin: 0 }}>1 slot available for a new project</p>
    </Link>
  );
}