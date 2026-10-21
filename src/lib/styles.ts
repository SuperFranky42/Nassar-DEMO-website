export const container = "mx-auto w-full max-w-6xl px-5";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";

export const btnPrimary = `inline-flex items-center justify-center gap-2 rounded-md bg-brass px-5 py-2.5 text-sm font-bold text-ink transition hover:bg-brass-bright ${focusRing}`;

export const btnPrimaryLarge = `inline-flex items-center justify-center gap-2 rounded-md bg-brass px-7 py-3.5 text-base font-bold text-ink transition hover:bg-brass-bright ${focusRing}`;

export const btnSecondary = `inline-flex items-center justify-center gap-2 rounded-md border border-ink/15 bg-canvas px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-ink/40 ${focusRing}`;

export const btnGhostDark = `inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-7 py-3.5 text-base font-bold text-white transition hover:bg-white/10 ${focusRing}`;

export const textLink = `font-semibold text-brass-deep underline decoration-brass/50 underline-offset-4 transition hover:decoration-brass-deep ${focusRing}`;

export const sectionDark = "pattern-dots py-20 text-white md:py-24";

export const sectionLight = "bg-canvas py-20 md:py-24";
