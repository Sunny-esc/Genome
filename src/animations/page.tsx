// src/animations/pageTransitions.ts
export const pageTransition = {
  initial: { opacity: 0, scale: 0.97, filter: "blur(6px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.97, filter: "blur(6px)" },
  transition: { duration: 1.0, ease: "easeOut" },
};
