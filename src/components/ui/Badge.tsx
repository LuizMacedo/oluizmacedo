interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'muted';
  className?: string;
}

export function Badge({ children, variant = 'accent', className = '' }: BadgeProps) {
  const variants = {
    accent: 'bg-accent/10 text-accent border-accent/20',
    muted: 'bg-surface text-muted border-border',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
