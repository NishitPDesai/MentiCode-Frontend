import LoadingOverlay from '@/features/playground/components/LoadingOverlay';
import PlaygroundsGrid from '@/features/playground/components/PlaygroundsGrid';
import PlaygroundsHeader from '@/features/playground/components/PlaygroundsHeader';
import { useGetPlaygroundsQuery } from '@/features/playground/playgroundApi';

const PlaygroundsPage = () => {
  const { data, isLoading, isFetching, isError } = useGetPlaygroundsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  console.log('Fetched playgrounds:', data);
  const playgrounds = Array.isArray(data) ? data : data?.items ?? [];
  const isBusy = isLoading || isFetching;

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        background: 'var(--bg-dark)',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      <main
        style={{
          flex: 1,
          overflowY: 'auto',
          background: '#0f172a',
          position: 'relative',
        }}
      >
        {isBusy && <LoadingOverlay />}

        <PlaygroundsHeader isLoading={isBusy} activeCount={playgrounds.length} />

        <div
          style={{
            padding: '40px',
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
            opacity: isBusy ? 0 : 1,
            transition: 'opacity 0.3s',
          }}
        >
          <PlaygroundsGrid playgrounds={playgrounds} isError={isError} />
        </div>
      </main>
    </div>
  );
};

export default PlaygroundsPage;
