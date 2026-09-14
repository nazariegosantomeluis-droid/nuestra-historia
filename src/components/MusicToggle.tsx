import { useRef, useState } from "react";
import { relationshipData } from "../data/relationship";
import "./MusicToggle.css";

/**
 * Discreet floating control to start/stop the optional background song.
 * Never autoplays — playback only starts after an explicit click, as
 * required by the brief and by browser autoplay policies.
 */
export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [errored, setErrored] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setErrored(true));
    }
  };

  if (errored) return null;

  return (
    <div className="music-toggle-wrapper">
      <audio
        ref={audioRef}
        src={relationshipData.music.src}
        loop
        preload="none"
        onError={() => setErrored(true)}
      />
      <button
        type="button"
        className={`music-toggle ${playing ? "is-playing" : ""}`}
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
        title={playing ? "Pausar música" : "Reproducir música"}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          {playing ? (
            <g fill="currentColor">
              <rect x="6" y="5" width="3.4" height="14" rx="1.2" />
              <rect x="14.6" y="5" width="3.4" height="14" rx="1.2" />
            </g>
          ) : (
            <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
          )}
        </svg>
      </button>
    </div>
  );
}
