import { Boxes, Database, TerminalSquare, Upload } from 'lucide-react';
import CreatePlaygroundCard from '@/features/playground/components/CreatePlaygroundCard';
import PlaygroundSessionCard from '@/features/playground/components/PlaygroundSessionCard';
const sourceVisuals = {
  upload: {
    icon: <Upload size={20} />,
    iconBackground: 'rgba(56, 189, 248, 0.1)',
    iconColor: '#38bdf8',
    tag: 'Upload',
    tagBackground: 'rgba(56, 189, 248, 0.1)',
    tagColor: '#38bdf8',
  },
  github: {
    icon: <Boxes size={20} />,
    iconBackground: 'rgba(168, 85, 247, 0.1)',
    iconColor: '#a855f7',
    tag: 'GitHub',
    tagBackground: 'rgba(168, 85, 247, 0.1)',
    tagColor: '#a855f7',
  },
};

const healthValues = ['98 ⚡', '94 ⚡', '90 ⚡', '86 ⚡', '82 ▲'];

function mapPlaygroundToSession(playground, index) {
  const visual = sourceVisuals[playground.sourceType] ?? sourceVisuals.upload;

  return {
    id: playground.id,
    name: playground.name,
    repository:
      playground.sourceType === 'github' ? 'CONNECTED GITHUB SOURCE' : 'UPLOADED SOURCE',
    icon: visual.icon,
    iconBackground: visual.iconBackground,
    iconColor: visual.iconColor,
    health: healthValues[index % healthValues.length],
    healthColor: 'var(--accent-green)',
    codeLines: [
      { dotColor: 'var(--accent-blue)', dotSize: '8px', width: '50%', barColor: 'rgba(255,255,255,0.1)' },
      { indent: '16px', width: '62%' },
      { indent: '16px', dotColor: 'var(--accent-green)', width: '36%' },
      { indent: '32px', width: '24%' },
    ],
    lastSync: 'just now',
    tag: visual.tag,
    tagBackground: visual.tagBackground,
    tagColor: visual.tagColor,
    extraContributors: null,
  };
}

export default function PlaygroundsGrid({ playgrounds = [], isError = false }) {
  const sessions = playgrounds.map(mapPlaygroundToSession);

  return (
    <section>
      <div>
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            letterSpacing: '0.5px',
            margin: '0 0 8px 0',
            textTransform: 'uppercase',
          }}
        >
          YOUR ACTIVE SESSIONS
        </h2>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            margin: '0 0 32px 0',
          }}
        >
          Manage and resume your cloud-based development environments.
        </p>
      </div>

      {isError && (
        <p style={{ margin: '0 0 24px 0', color: '#f87171', fontSize: '0.95rem' }}>
          Failed to load playgrounds from backend.
        </p>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        <CreatePlaygroundCard />
        {sessions.map((session) => (
          <PlaygroundSessionCard key={session.id} session={session} />
        ))}
      </div>

      {!isError && sessions.length === 0 && (
        <p style={{ margin: '20px 0 0 0', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          No playgrounds found yet. Create your first playground to get started.
        </p>
      )}
    </section>
  );
}