interface TechPillProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
}

export function TechPill({ children, variant = 'default' }: TechPillProps) {
  const variants = {
    default: 'bg-white/10 border-white/20 text-white/80',
    primary: 'bg-blue-500/20 border-blue-400/30 text-blue-200',
    secondary: 'bg-theme-primary/25 border-theme-primary/40 text-theme-accent',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-medium text-xs backdrop-blur-sm ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
