import "./ChessMotif.css";

interface ChessMotifProps {
  corner?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

/** Small, discreet chessboard corner pattern used as a conceptual accent. */
export function ChessMotif({ corner = "bottom-right" }: ChessMotifProps) {
  return (
    <svg
      className={`chess-motif chess-motif--${corner}`}
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
    >
      {Array.from({ length: 6 }).flatMap((_, row) =>
        Array.from({ length: 6 }).map((_, col) => {
          const isDark = (row + col) % 2 === 0;
          return (
            <rect
              key={`${row}-${col}`}
              x={col * 20}
              y={row * 20}
              width={20}
              height={20}
              fill={isDark ? "currentColor" : "transparent"}
            />
          );
        })
      )}
    </svg>
  );
}

/** A single elegant chess piece silhouette (king), used sparingly. */
export function ChessKingIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2v3M10 4h4M6 20h12l-1.2-5.4a2 2 0 0 0-.5-.9L14 11l1-3-3-1-3 1 1 3-2.3 2.7a2 2 0 0 0-.5.9L6 20Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
