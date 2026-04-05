interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`
        bg-surface border border-border rounded-2xl p-6 md:p-8
        ${hover ? 'hover:border-accent/30 hover:bg-surface-hover transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
