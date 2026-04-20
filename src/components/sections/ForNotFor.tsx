import { Card } from "@/components/ui/Card";

interface ForNotForProps {
  forItems: string[];
  notForItems: string[];
}

export function ForNotFor({ forItems, notForItems }: ForNotForProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card hover={false} className="border-accent/20">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
            <span className="text-accent">✓</span>
          </span>
          Para quem é
        </h3>
        <ul className="space-y-4">
          {forItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-accent mt-1 text-sm">●</span>
              <span className="text-muted leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card hover={false} className="border-border">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-surface-hover rounded-lg flex items-center justify-center">
            <span className="text-muted">✕</span>
          </span>
          Para quem não é
        </h3>
        <ul className="space-y-4">
          {notForItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-muted/40 mt-1 text-sm">●</span>
              <span className="text-muted/70 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
