import { tickerItems } from "../data/site.ts";

function TickerRun({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {tickerItems.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-6 text-xs font-extrabold tracking-[0.12em] whitespace-nowrap text-ink uppercase sm:text-sm">
            {item}
          </span>
          <span className="text-ink/60" aria-hidden="true">
            •
          </span>
        </li>
      ))}
    </ul>
  );
}

export function TrustTicker() {
  return (
    <div className="overflow-hidden bg-brass py-2">
      <div className="flex w-max animate-marquee">
        <TickerRun />
        <TickerRun hidden />
        <TickerRun hidden />
        <TickerRun hidden />
      </div>
    </div>
  );
}
