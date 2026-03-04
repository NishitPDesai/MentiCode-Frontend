import Card from '@/components/ui/Card';
import Spinner from '@/components/ui/Spinner';
import { useGetPlaygroundsQuery } from '@/features/playground/playgroundApi';

export default function PlaygroundList({ onSelect }) {
  const { data, isLoading, isError } = useGetPlaygroundsQuery();
  const playgrounds = data?.items ?? data ?? [];

  if (isLoading) return <Spinner />;
  if (isError)
    return <p className="text-sm text-red-600">Failed to load playgrounds.</p>;

  return (
    <Card>
      <h2 className="mb-3 text-lg font-semibold">Playgrounds</h2>
      <ul className="space-y-2">
        {playgrounds.map((playground) => (
          <li key={playground.id}>
            <button
              type="button"
              className="w-full rounded-md border border-slate-200 px-3 py-2 text-left hover:bg-slate-50"
              onClick={() => onSelect?.(playground)}
            >
              {playground.name}
            </button>
          </li>
        ))}
        {playgrounds.length === 0 && (
          <li className="text-sm text-slate-500">No playgrounds found.</li>
        )}
      </ul>
    </Card>
  );
}
