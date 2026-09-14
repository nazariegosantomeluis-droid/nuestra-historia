import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { IntroScreen } from "./components/IntroScreen";
import { MedicalDiagnosis } from "./components/MedicalDiagnosis";
import { KittyHunt } from "./components/KittyHunt";
import { LoveLetter } from "./components/LoveLetter";
import { FinalScreen } from "./components/FinalScreen";
import { Navigation, type ScreenId } from "./components/Navigation";
import { RelationshipCounter } from "./components/RelationshipCounter";

const ORDER: ScreenId[] = ["intro", "level1", "level2", "level3", "closing"];

export default function App() {
  const [screen, setScreen] = useState<ScreenId>("intro");

  const goNext = () => {
    const currentIndex = ORDER.indexOf(screen);
    const next = ORDER[Math.min(currentIndex + 1, ORDER.length - 1)];
    setScreen(next);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navigation current={screen} />

      {screen !== "intro" && screen !== "closing" && (
        <div className="persistent-counter">
          <RelationshipCounter size="compact" />
        </div>
      )}

      <AnimatePresence mode="wait">
        {screen === "intro" && <IntroScreen key="intro" onStart={goNext} />}
        {screen === "level1" && <MedicalDiagnosis key="level1" onContinue={goNext} />}
        {screen === "level2" && <KittyHunt key="level2" onContinue={goNext} />}
        {screen === "level3" && <LoveLetter key="level3" onContinue={goNext} />}
        {screen === "closing" && <FinalScreen key="closing" />}
      </AnimatePresence>
    </>
  );
}
