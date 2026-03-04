import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import CreatePlaygroundHeader from '@/features/playground/components/CreatePlaygroundHeader';
import ProjectDetailsSection from '@/features/playground/components/ProjectDetailsSection';
import SourceSelectionSection from '@/features/playground/components/SourceSelectionSection';
import { useCreatePlaygroundMutation } from '@/features/playground/playgroundApi';

const extensionToLanguage = {
  js: 'javascript',
  jsx: 'javascript',
  ts: 'typescript',
  tsx: 'typescript',
  py: 'python',
  cpp: 'cpp',
  cxx: 'cpp',
  cc: 'cpp',
  c: 'c',
  java: 'java',
  go: 'go',
  rb: 'ruby',
  php: 'php',
  cs: 'csharp',
  rs: 'rust',
  swift: 'swift',
  kt: 'kotlin',
  json: 'json',
  md: 'markdown',
};

const CreatePlaygroundPage = () => {
  const navigate = useNavigate();
  const [sourceType, setSourceType] = useState('upload');
  const [repoId, setRepoId] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [createPlayground, { isLoading: isCreating }] = useCreatePlaygroundMutation();

  const getLanguageForFile = (fileName) => {
    const extension = fileName.split('.').pop()?.toLowerCase() ?? '';
    return extensionToLanguage[extension] ?? 'plaintext';
  };

  const handleCreate = async (event) => {
    event.preventDefault();

    const safeName = projectName.trim();
    if (!safeName) {
      toast.error('Project name is required');
      return;
    }

    if (sourceType === 'upload' && selectedFiles.length === 0) {
      toast.error('Please select at least one file');
      return;
    }

    if (sourceType === 'github' && !repoId.trim()) {
      toast.error('GitHub repo ID is required');
      return;
    }

    try {
      const payload = {
        name: safeName,
        sourceType,
        ...(sourceType === 'github' ? { repoId: repoId.trim() } : {}),
        ...(sourceType === 'upload'
          ? {
              files: selectedFiles.map((file) => ({
                name: file.name,
                language: getLanguageForFile(file.name),
              })),
            }
          : {}),
      };

      await createPlayground({
        ...payload,
      }).unwrap();

      toast.success('Playground created successfully');
      navigate('/dev/playgrounds');
    } catch (error) {
      const message = error?.data?.error ?? 'Failed to create playground';
      toast.error(message);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)' }}>
      <CreatePlaygroundHeader />

      <main style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Create New Playground</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              Choose a source to initialize your playground.
            </p>
          </div>

          <form onSubmit={handleCreate}>
            <ProjectDetailsSection projectName={projectName} setProjectName={setProjectName} />

            <SourceSelectionSection
              sourceType={sourceType}
              setSourceType={setSourceType}
              repoId={repoId}
              setRepoId={setRepoId}
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
            />

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="submit"
                className="btn-pill btn-pill-primary"
                disabled={isCreating}
                style={{ padding: '16px 32px', fontSize: '1.1rem' }}
              >
                {isCreating ? 'Creating...' : 'Create Playground'} <ArrowRight size={20} />
              </button>
            </div>
          </form>
        </motion.div>
      </main>
    </div>
  );
};

export default CreatePlaygroundPage;
