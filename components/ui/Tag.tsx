type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-(--accent)/20 bg-(--accent)/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-(--accent) ${className}`}
    >
      {children}
    </span>
  );
}
