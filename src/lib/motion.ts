import { createContext, useContext } from "react";

export function revealDelay(index: number) {
  return (index % 4) * 80;
}

export type MotionValue = {
  epoch: number;
  resetMotion: () => void;
};

export const MotionContext = createContext<MotionValue | null>(null);

export function useMotion() {
  const value = useContext(MotionContext);
  if (!value) {
    throw new Error("useMotion must be used within MotionProvider");
  }
  return value;
}
