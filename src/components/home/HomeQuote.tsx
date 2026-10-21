import { site } from "../../data/site.ts";
import { container, sectionDark } from "../../lib/styles.ts";
import { Icon } from "../Icon.tsx";
import { QuoteForm } from "../QuoteForm.tsx";

export function HomeQuote() {
  return (
    <section id="quote" className={`${sectionDark} scroll-mt-28`}>
      <div className={`${container} grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center`}>
        <div>
          <h2 className="text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl">
            Ready to start
            <span className="block">
              your <span className="text-brass">next project?</span>
            </span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-white/75">
            Get a free, no-obligation quote for your remodel, addition, or build. We follow up
            to set a visit and send a written scope.
          </p>
          <ul className="mt-10 space-y-6">
            <li>
              <a href={site.phoneHref} className="group flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brass/15 text-brass">
                  <Icon name="phone" />
                </span>
                <span>
                  <span className="block text-xs font-bold tracking-[0.14em] text-white/60 uppercase">
                    Call us directly
                  </span>
                  <span className="block text-xl font-extrabold group-hover:text-brass">
                    {site.phoneDisplay}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="group flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brass/15 text-brass">
                  <Icon name="mail" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold tracking-[0.14em] text-white/60 uppercase">
                    Email us
                  </span>
                  <span className="block text-lg font-extrabold break-all group-hover:text-brass sm:text-xl">
                    {site.email}
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <QuoteForm compact />
      </div>
    </section>
  );
}
