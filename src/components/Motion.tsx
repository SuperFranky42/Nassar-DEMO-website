import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { MotionContext } from "../lib/motion.ts";

export function MotionProvider({ children }: { children: ReactNode }) {
  const [epoch, setEpoch] = useState(0);
  const cancelRef = useRef<(() => void) | null>(null);

  const resetMotion = useCallback(() => {
    cancelRef.current?.();
    cancelRef.current = null;

    if (window.scrollY <= 8) {
      setEpoch((value) => value + 1);
      return;
    }

    let frame = 0;
    let lowest = window.scrollY;
    const started = performance.now();

    const tick = () => {
      const y = window.scrollY;
      if (y <= 8) {
        cancelRef.current = null;
        setEpoch((value) => value + 1);
        return;
      }
      if (y > lowest + 12 || performance.now() - started > 4000) {
        cancelRef.current = null;
        return;
      }
      lowest = Math.min(lowest, y);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    cancelRef.current = () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => () => cancelRef.current?.(), []);

  return <MotionContext.Provider value={{ epoch, resetMotion }}>{children}</MotionContext.Provider>;
}
