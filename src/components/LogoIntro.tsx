import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "highlighter-intro-shown";
const DESKTOP_HOLD_MS = 1900;
const MOBILE_HOLD_MS = 900;

export function LogoIntro({ children }: { children: ReactNode }) {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    if (reducedMotion || alreadyShown) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    setShowIntro(true);
  }, []);

  return (
    <>
      {children}
      <AnimatePresence>
        {showIntro && <IntroOverlay onDone={() => setShowIntro(false)} />}
      </AnimatePresence>
    </>
  );
}

function IntroOverlay({ onDone }: { onDone: () => void }) {
  // Seguro chamar matchMedia direto no inicializador: este componente só
  // monta no cliente (nunca durante SSR), porque `showIntro` começa a false.
  const [isMobile] = useState(
    () => window.matchMedia("(max-width: 767px)").matches,
  );
  const holdMs = isMobile ? MOBILE_HOLD_MS : DESKTOP_HOLD_MS;
  const fadeDuration = isMobile ? 0.3 : 0.4;

  useEffect(() => {
    const timer = setTimeout(onDone, holdMs);
    return () => clearTimeout(timer);
  }, [holdMs, onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: fadeDuration }}
    >
      <button
        onClick={onDone}
        className="absolute top-6 right-6 text-sm font-medium text-muted-foreground hover:text-brand-deep transition-colors"
      >
        Saltar
      </button>

      <div className="flex items-center gap-4">
        <div className="relative flex h-16 w-20 items-center justify-center sm:h-20 sm:w-24">
          {/* Pilar cinza */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute left-1 h-full w-4 rounded-full bg-brand-gray sm:w-5"
          />
          {/* Pilar azul: no desktop roda e desliza até alinhar; no mobile só um fade/scale 2D */}
          <motion.div
            initial={
              isMobile
                ? { opacity: 0, scale: 0.9 }
                : { opacity: 0, rotate: -24, x: -12 }
            }
            animate={
              isMobile
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, rotate: 0, x: 0 }
            }
            transition={{ duration: 0.5, delay: isMobile ? 0.15 : 0.3 }}
            className="absolute right-1 h-full w-4 rounded-full bg-brand sm:w-5"
          />
          {/* Faixa azul que "risca" o ecrã */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.5,
              delay: isMobile ? 0.2 : 0.7,
              ease: "easeOut",
            }}
            style={{ transformOrigin: "left" }}
            className="absolute h-4 w-28 rounded-full bg-brand sm:h-5 sm:w-32"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: isMobile ? 0.4 : 1.0 }}
          className="font-display leading-tight"
        >
          <div className="text-2xl font-bold text-brand sm:text-3xl">
            highlighter
          </div>
          <div className="text-lg text-brand-gray sm:text-xl">group</div>
        </motion.div>
      </div>
    </motion.div>
  );
}
