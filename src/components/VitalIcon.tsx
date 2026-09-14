import type { ReactElement } from "react";
import type { VitalSign } from "../data/relationship";

const ICONS: Record<VitalSign["icon"], ReactElement> = {
  heart: (
    <path d="M12 20.5s-7.5-4.7-9.7-9.6C.8 7.2 2.6 4 6 4c2 0 3.5 1.1 4.2 2.6C10.9 5.1 12.4 4 14.4 4c3.4 0 5.2 3.2 3.7 6.9-2.2 4.9-6.1 9.6-6.1 9.6Z" />
  ),
  brain: (
    <path d="M9 3.5C6.8 3.5 5 5.3 5 7.5c0 .6.1 1.1.4 1.6C4.5 9.7 4 10.8 4 12c0 1.5.8 2.8 2 3.5-.1.3-.1.6-.1 1 0 2.2 1.8 4 4 4 .7 0 1.3-.2 1.9-.5.5.3 1.1.5 1.8.5 2.2 0 4-1.8 4-4 0-.2 0-.4-.1-.6 1.3-.6 2.3-2 2.3-3.6 0-1.1-.5-2.1-1.2-2.8.2-.4.3-.9.3-1.4 0-2.2-1.8-4-4-4-.6 0-1.2.1-1.7.4C12.7 3.8 11.6 3.5 10.5 3.5" />
  ),
  butterfly: (
    <path d="M12 12c-2-4.5-6-4.7-7.4-2.6-1.3 2 .2 4.9 3 5.7-2.6 1-3.7 3.6-2.5 5.3 1.3 1.9 4.4 1.3 6.1-2.3.2-.4.5-.4.7 0 1.7 3.6 4.8 4.2 6.1 2.3 1.2-1.7.1-4.3-2.5-5.3 2.8-.8 4.3-3.7 3-5.7-1.4-2.1-5.4-1.9-7.4 2.6Zm0 0v9" />
  ),
  pulse: <path d="M2 12h4l2-7 4 14 2-9 2 2h6" />,
};

export function VitalIcon({ type }: { type: VitalSign["icon"] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[type]}
    </svg>
  );
}
