import Editor from '@monaco-editor/react';
import Card from '@/components/ui/Card';

export default function FileViewer({ file }) {
  if (!file) {
    return <Card>Select a file to preview code.</Card>;
  }

  return (
    <Card>
      <h3 className="mb-3 font-semibold">File Viewer</h3>
      <Editor
        height="360px"
        language={file.language ?? 'javascript'}
        value={file.content ?? '// No file content available'}
        options={{ readOnly: true, minimap: { enabled: false } }}
      />
    </Card>
  );
}
