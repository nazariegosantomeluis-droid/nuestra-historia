import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { relationshipData } from "../data/relationship";
import { useTypewriter } from "../hooks/useTypewriter";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { ButterflyField } from "./ButterflyField";
import "./LoveLetter.css";

interface LoveLetterProps {
  onContinue: () => void;
}

export function LoveLetter({ onContinue }: LoveLetterProps) {
  const { loveLetter } = relationshipData;
  const [opened, setOpened] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  const reducedMotion = useReducedMotion();

  const { revealed, done } = useTypewriter(loveLetter.paragraphs, {
    disabled: !opened,
    speed: 18,
    pauseBetween: 550,
    onDone: () => setCelebrate(true),
  });

  return (
    <motion.section
      className="screen letter-screen"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      aria-label="Nivel 3: la carta final"
    >
      {celebrate && <ButterflyField count={5} />}

      <p className="eyebrow">Nivel 3</p>
      <h2 className="section-title letter-level-title">{loveLetter.levelTitle}</h2>

      <div className="letter-stage">
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.button
              key="envelope"
              type="button"
              className="envelope"
              onClick={() => setOpened(true)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              aria-label={loveLetter.envelopeCta}
            >
              <span className="envelope-body">
                <span className="envelope-flap" />
                <span className="envelope-seal">♡</span>
              </span>
              <span className="envelope-caption">{loveLetter.envelopeCta}</span>
            </motion.button>
          ) : (
            <motion.article
              key="letter"
              className="letter-paper"
              initial={{ opacity: 0, y: reducedMotion ? 0 : 60, rotateX: reducedMotion ? 0 : -8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="letter-greeting">{loveLetter.greeting}</p>
              {revealed.map((text, index) => {
                const isActiveParagraph =
                  !done && text.length < loveLetter.paragraphs[index].length;
                const isCurrentlyTyping =
                  isActiveParagraph &&
                  revealed.slice(0, index).every((prior, i) => prior.length === loveLetter.paragraphs[i].length);
                return (
                  <p className="letter-paragraph" key={index}>
                    {text}
                    {isCurrentlyTyping && <span className="letter-caret" aria-hidden="true" />}
                  </p>
                );
              })}
              <AnimatePresence>
                {done && (
                  <motion.p
                    className="letter-signature"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    {loveLetter.signaturePrefix}
                    <br />
                    <span className="letter-signature-name">{loveLetter.signature}</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.article>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {done && (
          <motion.button
            type="button"
            className="btn btn-primary"
            onClick={onContinue}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {loveLetter.continueLabel}
          </motion.button>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
