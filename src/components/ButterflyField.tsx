import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";
import "./ButterflyField.css";

interface ButterflyFieldProps {
  /** How many butterflies to render. Keep this low for an elegant feel. */
  count?: number;
  /** Visual density variant. */
  variant?: "default" | "sparse";
}

const PALETTE = ["#c96fa8", "#7d5aa6", "#e6b8d4"];

function Butterfly({ index, color }: { index: number; color: string }) {
  const left = (index * 37) % 100;
  const delay = (index * 1.3) % 6;
  const duration = 14 + ((index * 5) % 10);
  const size = 16 + ((index * 7) % 12);

  return (
    <motion.svg
      className="butterfly"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      style={{ left: `${left}%`, ["--delay" as string]: `${delay}s`, ["--duration" as string]: `${duration}s` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.85, 0.85, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <g className="butterfly-wings">
        <path d="M16 16 C10 4 0 6 2 14 C3 20 10 20 16 16Z" fill={color} opacity="0.9" />
        <path d="M16 16 C22 4 32 6 30 14 C29 20 22 20 16 16Z" fill={color} opacity="0.9" />
        <path d="M16 16 C11 22 3 24 5 28 C7 31 13 27 16 16Z" fill={color} opacity="0.7" />
        <path d="M16 16 C21 22 29 24 27 28 C25 31 19 27 16 16Z" fill={color} opacity="0.7" />
      </g>
      <line x1="16" y1="12" x2="16" y2="22" stroke="#513a73" strokeWidth="1" opacity="0.5" />
    </motion.svg>
  );
}

export function ButterflyField({ count = 6, variant = "default" }: ButterflyFieldProps) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return null;

  const total = variant === "sparse" ? Math.min(count, 3) : count;

  return (
    <div className="butterfly-field" aria-hidden="true">
      {Array.from({ length: total }).map((_, i) => (
        <Butterfly key={i} index={i} color={PALETTE[i % PALETTE.length]} />
      ))}
    </div>
  );
}
