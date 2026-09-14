import { useEffect, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import "./EcgHeart.css";

/**
 * An ECG trace that plays for a few seconds and then slowly settles into
 * a beating heart — a small visual metaphor for the diagnosis.
 */
export function EcgHeart() {
  const reducedMotion = useReducedMotion();
  const [settled, setSettled] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setTimeout(() => setSettled(true), 4600);
    return () => window.clearTimeout(timer);
  }, [reducedMotion]);

  return (
    <div className="ecg-heart" role="img" aria-label="Trazado cardíaco que se transforma en un corazón latiendo">
      <svg className={`ecg-line ${settled ? "is-hidden" : ""}`} viewBox="0 0 300 80" preserveAspectRatio="none">
        <polyline
          className="ecg-path"
          fill="none"
          stroke="var(--color-pink-deep)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="0,40 40,40 55,40 65,10 75,68 85,18 95,40 110,40 150,40 165,40 175,12 185,66 195,20 205,40 220,40 260,40 275,40 285,14 295,60 300,40"
        />
      </svg>

      <svg className={`ecg-heart-icon ${settled ? "is-visible" : ""}`} viewBox="0 0 32 29" aria-hidden="true">
        <path
          d="M16 28 C16 28 1 18.5 1 9.2 C1 3.6 5.4 0 10 0 C13 0 15.3 1.7 16 4 C16.7 1.7 19 0 22 0 C26.6 0 31 3.6 31 9.2 C31 18.5 16 28 16 28 Z"
          fill="var(--color-pink-deep)"
        />
      </svg>
    </div>
  );
}
