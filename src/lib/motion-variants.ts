import type { Variants } from "framer-motion";

/**
 * Fade + slide-up de entrada, com stagger por índice (via prop `custom`).
 * `delayStep` e `duration` existem para preservar o timing que cada secção já
 * usava antes da centralização (Services: 0.08/0.5, Stats: 0.1/0.3, Differentials: 0.08/0.3).
 */
export function fadeUpStagger(delayStep = 0.08, duration = 0.5): Variants {
  return {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * delayStep, duration },
    }),
  };
}
