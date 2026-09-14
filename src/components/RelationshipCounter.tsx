import { useElapsedTime } from "../hooks/useElapsedTime";
import { relationshipData } from "../data/relationship";
import "./RelationshipCounter.css";

interface RelationshipCounterProps {
  /** "compact" for the persistent header pill, "full" for hero display. */
  size?: "compact" | "full";
  className?: string;
}

export function RelationshipCounter({ size = "full", className = "" }: RelationshipCounterProps) {
  const elapsed = useElapsedTime(relationshipData.relationshipStartDate);
  const { labels, caption } = relationshipData.counter;

  const units: Array<{ key: keyof typeof elapsed; label: string }> = [
    { key: "years", label: labels.years },
    { key: "months", label: labels.months },
    { key: "days", label: labels.days },
    { key: "hours", label: labels.hours },
    { key: "minutes", label: labels.minutes },
    { key: "seconds", label: labels.seconds },
  ];

  return (
    <div
      className={`counter counter--${size} ${className}`.trim()}
      role="timer"
      aria-live="off"
      aria-label={`Tiempo juntos: ${elapsed.years} años, ${elapsed.months} meses, ${elapsed.days} días, ${elapsed.hours} horas, ${elapsed.minutes} minutos, ${elapsed.seconds} segundos`}
    >
      <div className="counter-grid">
        {units.map((unit) => (
          <div className="counter-unit" key={unit.key}>
            <span className="counter-value">{String(elapsed[unit.key]).padStart(2, "0")}</span>
            <span className="counter-label">{unit.label}</span>
          </div>
        ))}
      </div>
      {size === "full" && <p className="counter-caption">{caption}</p>}
    </div>
  );
}
