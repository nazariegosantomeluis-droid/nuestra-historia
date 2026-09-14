import "./Navigation.css";

export type ScreenId = "intro" | "level1" | "level2" | "level3" | "closing";

const STEPS: ScreenId[] = ["intro", "level1", "level2", "level3", "closing"];

interface NavigationProps {
  current: ScreenId;
}

/** Subtle progress indicator — purely informative, not clickable. */
export function Navigation({ current }: NavigationProps) {
  const currentIndex = STEPS.indexOf(current);

  return (
    <nav className="level-nav" aria-label="Progreso de la experiencia">
      <ol className="level-nav-list">
        {STEPS.map((step, index) => (
          <li
            key={step}
            className={`level-nav-dot ${index === currentIndex ? "is-active" : ""} ${
              index < currentIndex ? "is-done" : ""
            }`}
            aria-current={index === currentIndex ? "step" : undefined}
          />
        ))}
      </ol>
    </nav>
  );
}
