import { useEffect, useRef, useState, type ReactNode } from "react";
import { useMotion } from "../lib/motion.ts";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function RevealOnce({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(
    () => prefersReducedMotion() || !("IntersectionObserver" in window),
  );

  useEffect(() => {
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${shown ? " reveal-in" : ""}${className ? ` ${className}` : ""}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export function Reveal(props: RevealProps) {
  const { epoch } = useMotion();
  return <RevealOnce key={epoch} {...props} />;
}
