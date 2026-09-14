import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { relationshipData } from "../data/relationship";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { ChessKingIcon } from "./ChessMotif";
import { RelationshipCounter } from "./RelationshipCounter";
import "./FinalScreen.css";

const STAGE_DELAYS = [0, 1500, 1500, 1600, 1400, 1600];

export function FinalScreen() {
  const { finalScreen } = relationshipData;
  const reducedMotion = useReducedMotion();
  const [stage, setStage] = useState(reducedMotion ? STAGE_DELAYS.length - 1 : 0);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    if (stage >= STAGE_DELAYS.length - 1) return;
    const timer = window.setTimeout(() => setStage((current) => current + 1), STAGE_DELAYS[stage + 1]);
    return () => window.clearTimeout(timer);
  }, [stage, reducedMotion]);

  const fadeUp = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" as const },
  };

  return (
    <motion.section
      className="screen closing-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      aria-label="Pantalla de cierre"
    >
      <AnimatePresence mode="wait">
        {!answered ? (
          <motion.div key="sequence" className="closing-sequence" exit={{ opacity: 0, y: -12 }}>
            <motion.div className="checkmate" {...fadeUp}>
              <ChessKingIcon size={30} />
              <span>{finalScreen.checkmateLabel}</span>
            </motion.div>

            {stage >= 1 && (
              <motion.p className="closing-line" {...fadeUp}>
                {finalScreen.line1}
              </motion.p>
            )}
            {stage >= 2 && (
              <motion.p className="closing-line closing-line--script" {...fadeUp}>
                {finalScreen.line2}
              </motion.p>
            )}
            {stage >= 3 && (
              <motion.div className="closing-duration" {...fadeUp}>
                <p className="closing-duration-label">{finalScreen.durationLabel}</p>
                <RelationshipCounter size="full" />
              </motion.div>
            )}
            {stage >= 4 && (
              <motion.p className="closing-line closing-line--script" {...fadeUp}>
                {finalScreen.counterCaption}
              </motion.p>
            )}
            {stage >= 5 && (
              <motion.div className="closing-question" {...fadeUp}>
                <p className="closing-question-text">{finalScreen.question}</p>
                <div className="closing-buttons">
                  <button type="button" className="btn btn-secondary" onClick={() => setAnswered(true)}>
                    {finalScreen.yesLabel}
                  </button>
                  <button type="button" className="btn btn-primary" onClick={() => setAnswered(true)}>
                    {finalScreen.obviouslyYesLabel}
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="finale"
            className="closing-finale"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="closing-finale-text">{finalScreen.finalLine}</p>
            <motion.svg
              className="closing-butterfly"
              viewBox="0 0 32 32"
              width="46"
              height="46"
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={
                reducedMotion
                  ? { opacity: 1 }
                  : { x: [0, 40, 120, 260], y: [0, -30, -20, -90], opacity: [1, 1, 0.8, 0] }
              }
              transition={{ duration: 3.4, ease: "easeInOut", delay: 0.5 }}
              aria-hidden="true"
            >
              <path d="M16 16C10 4 0 6 2 14c1 6 8 6 14 2Z" fill="#c96fa8" />
              <path d="M16 16c6-12 16-10 14-2-1 6-8 6-14 2Z" fill="#7d5aa6" />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
