export function riskColor(severity = '') {
  const value = severity.toLowerCase();

  if (value === 'critical' || value === 'high') {
    return 'bg-red-100 text-red-700';
  }

  if (value === 'medium') {
    return 'bg-amber-100 text-amber-700';
  }

  if (value === 'low') {
    return 'bg-emerald-100 text-emerald-700';
  }

  return 'bg-slate-100 text-slate-700';
}
