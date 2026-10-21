import { useSearchParams } from "react-router-dom";
import { Icon } from "../components/Icon.tsx";
import { PageHero } from "../components/PageHero.tsx";
import { QuoteForm } from "../components/QuoteForm.tsx";
import { usePageTitle } from "../components/usePageTitle.ts";
import { Reveal } from "../components/Reveal.tsx";
import { revealDelay } from "../lib/motion.ts";
import { site, steps } from "../data/site.ts";
import { container } from "../lib/styles.ts";

export function Quote() {
  usePageTitle("Get a quote · Nassar Renovation");
  const [params] = useSearchParams();
  const initialProjectType = params.get("project") ?? params.get("type") ?? undefined;

  return (
    <>
      <PageHero
        eyebrow="Get a quote"
        title="Tell us about the"
        accent="project."
        text="A name, a way to reach you, and a sentence on the project. We follow up to set a visit and send a written quote."
      />
      <div className="bg-paper">
        <div className={`${container} grid gap-12 py-16 lg:grid-cols-[1.4fr_0.8fr]`}>
          <Reveal>
            <QuoteForm initialProjectType={initialProjectType} />
          </Reveal>
          <Reveal delay={revealDelay(1)}>
          <aside>
            <h2 className="text-2xl font-extrabold text-ink">What happens next</h2>
            <ol className="mt-6 space-y-5">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-sm font-extrabold text-brass">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-bold">{step.title}</span>
                    <span className="mt-1 block text-sm text-muted">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-2xl bg-ink p-6 text-sm text-white">
              <p className="text-lg font-extrabold">Prefer to call or write?</p>
              <a href={site.phoneHref} className="mt-4 flex items-center gap-3 font-semibold hover:text-brass">
                <Icon name="phone" className="h-4 w-4 text-brass" />
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 flex items-center gap-3 font-semibold break-all hover:text-brass"
              >
                <Icon name="mail" className="h-4 w-4 shrink-0 text-brass" />
                {site.email}
              </a>
              <p className="mt-4 text-white/60">{site.hours}</p>
              <p className="mt-2 text-white/60">Visits across {site.serviceArea}.</p>
            </div>
          </aside>
          </Reveal>
        </div>
      </div>
    </>
  );
}
