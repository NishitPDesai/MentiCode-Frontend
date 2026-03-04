import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import { riskColor } from '@/utils/riskColor';

export default function FindingsList({ findings = [] }) {
  return (
    <Card>
      <h3 className="mb-3 font-semibold">Findings</h3>
      <ul className="space-y-2">
        {findings.map((finding, index) => (
          <li
            key={`${finding.rule ?? 'finding'}-${index}`}
            className="rounded-md border border-slate-200 p-2"
          >
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm font-medium">{finding.rule}</span>
              <Badge className={riskColor(finding.severity)}>
                {finding.severity}
              </Badge>
            </div>
            <p className="text-sm text-slate-600">{finding.message}</p>
          </li>
        ))}
        {findings.length === 0 && (
          <li className="text-sm text-slate-500">No findings available.</li>
        )}
      </ul>
    </Card>
  );
}
