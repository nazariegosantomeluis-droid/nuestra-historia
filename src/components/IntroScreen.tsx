import { motion } from "framer-motion";
import { relationshipData } from "../data/relationship";
import { ButterflyField } from "./ButterflyField";
import { ChessMotif } from "./ChessMotif";
import { KittyImage } from "./KittyImage";
import { RelationshipCounter } from "./RelationshipCounter";
import "./IntroScreen.css";

interface IntroScreenProps {
  onStart: () => void;
}

export function IntroScreen({ onStart }: IntroScreenProps) {
  const { intro } = relationshipData;

  return (
    <motion.section
      className="screen intro-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      aria-label="Pantalla de bienvenida"
    >
      <ButterflyField count={7} />
      <ChessMotif corner="top-left" />
      <ChessMotif corner="bottom-right" />

      <motion.div
        className="intro-content"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
      >
        <span className="intro-kitty-mark" aria-hidden="true">
          <KittyImage src="/kitty/kitty01.png" alt="" className="intro-kitty-img" />
        </span>

        <p className="eyebrow">{intro.eyebrow}</p>
        <h1 className="intro-title">{intro.title}</h1>
        <p className="intro-tagline">{intro.tagline}</p>

        <div className="intro-counter">
          <RelationshipCounter size="full" />
        </div>

        <button type="button" className="btn btn-primary intro-cta" onClick={onStart}>
          {intro.cta}
        </button>
      </motion.div>
    </motion.section>
  );
}
