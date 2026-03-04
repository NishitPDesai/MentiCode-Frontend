import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CreatePlaygroundHeader() {
  return (
    <nav
      className="glass"
      style={{
        height: '64px',
        borderBottom: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      <Link
        to="/dev/playgrounds"
        style={{
          color: 'var(--text-secondary)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        <ArrowLeft size={20} /> Back to Dashboard
      </Link>
    </nav>
  );
}