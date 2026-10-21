import { site } from "../data/site.ts";
import { Icon } from "./Icon.tsx";

export function CallNowButton() {
  return (
    <a
      href={site.phoneHref}
      className="fixed bottom-5 left-5 z-30 inline-flex items-center gap-2 rounded-full bg-brass px-5 py-3 text-sm font-bold text-ink shadow-lg shadow-black/25 transition hover:bg-brass-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
    >
      <Icon name="phone" className="h-4 w-4" />
      Call Now
    </a>
  );
}
