import { useState } from "react";

interface KittyImageProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Renders a Hello Kitty illustration from `public/kitty/`. If the file
 * hasn't been placed there yet, falls back to a soft placeholder silhouette
 * instead of a broken-image icon, so the experience still looks intentional
 * before the real assets are added.
 */
export function KittyImage({ src, alt, className = "" }: KittyImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className={`kitty-placeholder ${className}`} role="img" aria-label={alt}>
        <svg viewBox="0 0 40 40" width="70%" height="70%" aria-hidden="true">
          <ellipse cx="20" cy="24" rx="13" ry="11" fill="#fff" stroke="#c96fa8" strokeWidth="1.4" />
          <path d="M9 15 L4 6 L13 11Z" fill="#fff" stroke="#c96fa8" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M31 15 L36 6 L27 11Z" fill="#fff" stroke="#c96fa8" strokeWidth="1.2" strokeLinejoin="round" />
          <circle cx="15" cy="22" r="1.6" fill="#513a73" />
          <circle cx="25" cy="22" r="1.6" fill="#513a73" />
          <path d="M20 25v1.6" stroke="#513a73" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </span>
    );
  }

  return (
    <img
      src={`${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
