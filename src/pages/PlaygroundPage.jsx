import { useState } from 'react';
import PlaygroundAuditPanel from '@/features/playground/components/PlaygroundAuditPanel';
import PlaygroundEditorPanel from '@/features/playground/components/PlaygroundEditorPanel';
import PlaygroundExplorer from '@/features/playground/components/PlaygroundExplorer';
import PlaygroundStatusFooter from '@/features/playground/components/PlaygroundStatusFooter';
import PlaygroundWorkspaceHeader from '@/features/playground/components/PlaygroundWorkspaceHeader';

const PlaygroundPage = () => {
  const [auditTab, setAuditTab] = useState('The Good');
  const [isRefactored, setIsRefactored] = useState(false);
  const [isCleaned, setIsCleaned] = useState(false);
  const [activeFile, setActiveFile] = useState('authController.js');
  const [activeMainTab, setActiveMainTab] = useState('Code Standards');

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#101922',
        color: '#f1f5f9',
        fontFamily: '"Inter", sans-serif',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .highlight-good {
          background: rgba(34, 197, 94, 0.15);
          border-bottom: 2px solid #22c55e;
        }
        .highlight-bad {
          background: rgba(239, 68, 68, 0.15);
          border-bottom: 2px solid #ef4444;
        }
        .highlight-best {
          background: rgba(59, 130, 246, 0.15);
          border-bottom: 2px solid #3b82f6;
        }
        .audit-btn {
          flex: 1;
          padding: 12px 0;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          background: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .audit-btn.active.good {
          border-bottom-color: #22c55e;
          color: #22c55e;
          background: rgba(34, 197, 94, 0.05);
        }
        .audit-btn.active.bad {
          border-bottom-color: #ef4444;
          color: #ef4444;
          background: rgba(239, 68, 68, 0.05);
        }
        .audit-btn.active.best {
          border-bottom-color: #3b82f6;
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.05);
        }
        .audit-btn:hover {
          color: #f8fafc;
        }
      `}</style>

      <PlaygroundWorkspaceHeader
        activeMainTab={activeMainTab}
        setActiveMainTab={setActiveMainTab}
      />

      <main style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <PlaygroundExplorer activeFile={activeFile} setActiveFile={setActiveFile} />

        <PlaygroundEditorPanel
          activeMainTab={activeMainTab}
          activeFile={activeFile}
          isCleaned={isCleaned}
          isRefactored={isRefactored}
        />

        <PlaygroundAuditPanel
          auditTab={auditTab}
          setAuditTab={setAuditTab}
          isCleaned={isCleaned}
          setIsCleaned={setIsCleaned}
          isRefactored={isRefactored}
          setIsRefactored={setIsRefactored}
        />
      </main>

      <PlaygroundStatusFooter isRefactored={isRefactored} />
    </div>
  );
};

export default PlaygroundPage;
