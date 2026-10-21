import { useState } from "react";

type BeforeAfterProps = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  compact?: boolean;
};

export function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
  compact = false,
}: BeforeAfterProps) {
  const [value, setValue] = useState(50);

  return (
    <div className="relative overflow-hidden rounded-xl bg-ink shadow-lg shadow-black/10 has-[input:focus-visible]:ring-4 has-[input:focus-visible]:ring-brass">
      <img
        src={after}
        alt={afterAlt}
        className={`w-full object-cover ${compact ? "aspect-[4/3]" : "aspect-[16/10]"}`}
      />
      <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${value}%` }}>
        <img
          src={before}
          alt={beforeAlt}
          className="absolute top-0 left-0 h-full max-w-none object-cover"
          style={{ width: `${(100 / value) * 100}%` }}
        />
      </div>
      <span className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-ink/85 px-3 py-1 text-xs font-extrabold tracking-wider text-white uppercase">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 bottom-3 rounded-md bg-brass px-3 py-1 text-xs font-extrabold tracking-wider text-ink uppercase">
        After
      </span>
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white"
        style={{ left: `${value}%` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-brass bg-white text-brass-deep shadow-md"
        style={{ left: `${value}%` }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M6 4 L2 9 L6 14" stroke="currentColor" strokeWidth="2" />
          <path d="M12 4 L16 9 L12 14" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <input
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        type="range"
        min={4}
        max={96}
        value={value}
        aria-label="Slide to compare before and after"
        onChange={(event) => setValue(Number(event.target.value))}
      />
    </div>
  );
}
