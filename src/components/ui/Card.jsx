import clsx from 'clsx';

export default function Card({ className, children }) {
  return (
    <section
      className={clsx(
        'rounded-xl border border-slate-200 bg-white p-4',
        className,
      )}
    >
      {children}
    </section>
  );
}
