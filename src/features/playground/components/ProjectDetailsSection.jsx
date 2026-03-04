export default function ProjectDetailsSection({ projectName, setProjectName }) {
  return (
    <div className="card-3d glass" style={{ padding: '32px', marginBottom: '32px' }}>
      <h2 style={{ fontSize: '1.25rem', marginBottom: '24px' }}>Project Details</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
          Project Name
        </label>
        <input
          type="text"
          placeholder="e.g., my-awesome-app"
          required
          value={projectName}
          onChange={(event) => setProjectName(event.target.value)}
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
    </div>
  );
}