import { useState } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Spinner from '@/components/ui/Spinner';
import {
  useGetJobResultQuery,
  useStartAnalysisMutation,
} from '@/features/analysis/analysisApi';

export default function AnalysisPanel({ playgroundId, fileId }) {
  const [jobId, setJobId] = useState(null);
  const [startAnalysis, { isLoading: isStarting }] = useStartAnalysisMutation();
  const { data, isLoading } = useGetJobResultQuery(jobId, {
    skip: !jobId,
  });

  const onAnalyze = async () => {
    if (!playgroundId || !fileId) return;
    const response = await startAnalysis({ playgroundId, fileId }).unwrap();
    setJobId(response.jobId);
  };

  return (
    <Card>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold">Analysis</h3>
        <Button
          disabled={!playgroundId || !fileId || isStarting}
          onClick={onAnalyze}
        >
          {isStarting ? 'Starting...' : 'Start Analysis'}
        </Button>
      </div>
      {isLoading && <Spinner />}
      {jobId && !isLoading && (
        <pre className="overflow-auto rounded-md bg-slate-900 p-3 text-xs text-slate-100">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </Card>
  );
}
