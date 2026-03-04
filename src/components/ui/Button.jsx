import clsx from 'clsx';

export default function Button({ className, type = 'button', ...props }) {
  return (
    <button
      type={type}
      className={clsx(
        'rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60',
        className,
      )}
      {...props}
    />
  );
}
