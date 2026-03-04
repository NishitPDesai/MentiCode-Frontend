import { CheckCircle2, FileUp, Github } from 'lucide-react';

const sourceOptions = [
  {
    id: 'upload',
    name: 'Upload Files',
    desc: 'Upload local files to initialize your playground.',
    color: '#38bdf8',
    icon: <FileUp size={24} />,
  },
  {
    id: 'github',
    name: 'GitHub',
    desc: 'Connect a repository source for your playground.',
    color: '#a855f7',
    icon: <Github size={24} />,
  },
];

export default function SourceSelectionSection({
  sourceType,
  setSourceType,
  repoId,
  setRepoId,
  selectedFiles,
  setSelectedFiles,
}) {
  return (
    <div className="card-3d glass" style={{ padding: '32px', marginBottom: '40px' }}>
      <h2 style={{ fontSize: '1.25rem', marginBottom: '24px' }}>Select Source</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '24px',
        }}
      >
        {sourceOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => setSourceType(option.id)}
            style={{
              padding: '20px',
              borderRadius: '12px',
              cursor: 'pointer',
              border: `2px solid ${sourceType === option.id ? 'var(--accent-blue)' : 'var(--border-color)'}`,
              background:
                sourceType === option.id
                  ? 'rgba(59, 130, 246, 0.05)'
                  : 'rgba(255,255,255,0.02)',
              transition: 'all 0.2s',
              position: 'relative',
            }}
          >
            {sourceType === option.id && (
              <div style={{ position: 'absolute', top: '12px', right: '12px', color: 'var(--accent-blue)' }}>
                <CheckCircle2 size={20} fill="currentColor" color="var(--bg-card)" />
              </div>
            )}

            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `${option.color}20`,
                color: option.color,
                marginBottom: '16px',
              }}
            >
              {option.icon}
            </div>

            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontWeight: 600 }}>{option.name}</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {option.desc}
            </p>
          </div>
        ))}
      </div>

      {sourceType === 'upload' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Upload Files
          </label>
          <input
            type="file"
            multiple
            onChange={(event) => setSelectedFiles(Array.from(event.target.files ?? []))}
            style={{
              width: '100%',
              padding: '14px',
              background: 'rgba(0,0,0,0.2)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              color: 'white',
              fontSize: '0.95rem',
            }}
          />
          {selectedFiles.length > 0 && (
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Selected: {selectedFiles.map((file) => file.name).join(', ')}
            </p>
          )}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            GitHub Repo ID
          </label>
          <input
            type="text"
            value={repoId}
            onChange={(event) => setRepoId(event.target.value)}
            placeholder="e.g., repo_12345"
            style={{
              width: '100%',
              padding: '16px',
              background: 'rgba(0,0,0,0.2)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              color: 'white',
              fontSize: '1rem',
              outline: 'none',
            }}
          />
        </div>
      )}
    </div>
  );
}
