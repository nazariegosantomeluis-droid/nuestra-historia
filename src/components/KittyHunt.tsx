import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { relationshipData } from "../data/relationship";
import type { KittyMemory } from "../data/relationship";
import { ChessMotif } from "./ChessMotif";
import { KittyImage } from "./KittyImage";
import "./KittyHunt.css";

interface KittyHuntProps {
  onContinue: () => void;
}

const THEMES = ["frame", "note", "chess", "bouquet", "butterfly", "moon", "ribbon"] as const;
type Theme = (typeof THEMES)[number];

const THEME_HINT: Record<Theme, string> = {
  frame: "asomándose en una fotografía",
  note: "posada sobre una pequeña carta",
  chess: "escondida en el tablero",
  bouquet: "oculta entre el ramo",
  butterfly: "junto a una mariposa",
  moon: "descansando bajo la luna",
  ribbon: "enredada en el listón",
};

export function KittyHunt({ onContinue }: KittyHuntProps) {
  const { kittyHunt } = relationshipData;
  const [found, setFound] = useState<Set<number>>(new Set());
  const [activeMemory, setActiveMemory] = useState<KittyMemory | null>(null);
  const [justFound, setJustFound] = useState<number | null>(null);

  const spots = useMemo(
    () =>
      kittyHunt.memories.map((memory, index) => ({
        memory,
        theme: THEMES[index % THEMES.length],
        image: kittyHunt.kittyImages[index],
      })),
    [kittyHunt]
  );

  const allFound = found.size >= spots.length;

  const handleSelect = (memory: KittyMemory) => {
    if (!found.has(memory.id)) {
      setFound((prev) => new Set(prev).add(memory.id));
      setJustFound(memory.id);
      window.setTimeout(() => setJustFound((current) => (current === memory.id ? null : current)), 900);
    }
    setActiveMemory(memory);
  };

  return (
    <motion.section
      className="screen kitty-screen"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      aria-label="Nivel 2: las 7 Hello Kitty"
    >
      <ChessMotif corner="top-left" />

      <p className="eyebrow">Nivel 2</p>
      <h2 className="section-title">{kittyHunt.levelTitle}</h2>
      <p className="section-subtitle kitty-subtitle">{kittyHunt.subtitle}</p>

      <div className="kitty-progress" aria-live="polite">
        <span className="kitty-progress-label">{kittyHunt.progressLabelPrefix}</span>
        <span className="kitty-progress-count">
          {found.size} / {spots.length}
        </span>
      </div>

      <div className="kitty-scene">
        {spots.map(({ memory, theme, image }, index) => {
          const isFound = found.has(memory.id);
          const rotation = [-3, 2, -1.5, 3.2, -2.4, 1.6, -1][index % 7];
          return (
            <button
              key={memory.id}
              type="button"
              className={`kitty-tile kitty-tile--${theme} ${isFound ? "is-found" : ""} ${
                justFound === memory.id ? "is-celebrating" : ""
              }`}
              style={{ ["--tilt" as string]: `${rotation}deg` }}
              onClick={() => handleSelect(memory)}
              aria-label={
                isFound
                  ? `Recuerdo ${memory.id}: ${memory.title}. Ver de nuevo.`
                  : `Sorpresa escondida ${THEME_HINT[theme]}`
              }
            >
              <span className="kitty-tile-art" aria-hidden="true">
                {theme === "frame" && memory.photo && (
                  <img
                    src={`${import.meta.env.BASE_URL}${memory.photo.replace(/^\//, "")}`}
                    alt=""
                    className="kitty-tile-photo"
                    onError={(event) => {
                      (event.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                )}
              </span>
              <span className={`kitty-tile-kitty ${isFound ? "is-visible" : ""}`}>
                <KittyImage src={image} alt={`Hello Kitty — recuerdo ${memory.id}`} className="kitty-tile-img" />
              </span>
              {isFound && <span className="kitty-tile-badge">{memory.id}</span>}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {allFound && (
          <motion.div
            className="kitty-complete"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <p>{kittyHunt.completeMessage}</p>
            <button type="button" className="btn btn-primary" onClick={onContinue}>
              {kittyHunt.continueLabel}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeMemory && (
          <motion.div
            className="memory-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="memory-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveMemory(null)}
          >
            <motion.div
              className="memory-card"
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="memory-close"
                onClick={() => setActiveMemory(null)}
                aria-label="Cerrar recuerdo"
              >
                ×
              </button>
              <p className="memory-number">Recuerdo #{activeMemory.id}</p>
              <h3 id="memory-title" className="memory-title">
                {activeMemory.title}
              </h3>
              {activeMemory.photo && (
                <div className="memory-photo-frame">
                  <img
                    src={`${import.meta.env.BASE_URL}${activeMemory.photo.replace(/^\//, "")}`}
                    alt={activeMemory.photoAlt}
                    className="memory-photo"
                    onError={(event) => {
                      (event.currentTarget.parentElement as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
              )}
              <p className="memory-message">{activeMemory.message}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
