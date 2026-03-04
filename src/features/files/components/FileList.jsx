import Card from '@/components/ui/Card';
import Spinner from '@/components/ui/Spinner';
import { useGetFilesQuery } from '@/features/files/fileApi';

export default function FileList({ playgroundId, onSelect }) {
  const { data, isLoading, isError } = useGetFilesQuery(playgroundId, {
    skip: !playgroundId,
  });

  if (!playgroundId) {
    return <Card>Select a playground to view files.</Card>;
  }

  if (isLoading) return <Spinner />;
  if (isError)
    return <p className="text-sm text-red-600">Failed to load files.</p>;

  const files = data?.items ?? data ?? [];

  return (
    <Card>
      <h3 className="mb-3 font-semibold">Files</h3>
      <ul className="space-y-2">
        {files.map((file) => (
          <li key={file.id}>
            <button
              type="button"
              className="w-full rounded-md border border-slate-200 px-3 py-2 text-left hover:bg-slate-50"
              onClick={() => onSelect?.(file)}
            >
              {file.name}
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
