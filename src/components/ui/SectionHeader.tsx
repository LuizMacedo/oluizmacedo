interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {label && (
        <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg md:text-xl text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
