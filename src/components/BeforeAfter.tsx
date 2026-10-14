import { useState } from "react";

type BeforeAfterProps = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

export function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
}: BeforeAfterProps) {
  const [value, setValue] = useState(56);

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl bg-ink">
        <img src={after} alt={afterAlt} className="aspect-[16/10] w-full object-cover" />
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${value}%` }}
        >
          <img
            src={before}
            alt={beforeAlt}
            className="absolute top-0 left-0 h-full max-w-none object-cover"
            style={{ width: `${(100 / value) * 100}%` }}
          />
          <span className="absolute top-3 left-3 rounded-full bg-ink/80 px-3 py-1 text-xs tracking-wide text-paper">
            Before
          </span>
        </div>
        <span className="pointer-events-none absolute top-3 right-3 rounded-full bg-paper/90 px-3 py-1 text-xs tracking-wide text-ink">
          After
        </span>
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-paper"
          style={{ left: `${value}%` }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-line bg-paper text-ink shadow-md"
          style={{ left: `${value}%` }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M6 4 L2 9 L6 14" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 4 L16 9 L12 14" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <label className="mt-3 block text-sm text-muted">
        Slide to compare before and after
        <input
          className="mt-2 w-full accent-brass"
          type="range"
          min={8}
          max={92}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
      </label>
    </div>
  );
}
