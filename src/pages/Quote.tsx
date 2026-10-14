import { useSearchParams } from "react-router-dom";
import { PageHero } from "../components/PageHero.tsx";
import { QuoteForm } from "../components/QuoteForm.tsx";
import { usePageTitle } from "../components/usePageTitle.ts";
import { site, steps } from "../data/site.ts";
import { container } from "../lib/styles.ts";

export function Quote() {
  usePageTitle("Get a quote · Nassar Renovation");
  const [params] = useSearchParams();
  const initialProjectType = params.get("project") ?? undefined;

  return (
    <>
      <PageHero
        eyebrow="Get a quote"
        title="Tell us about the room."
        text="A name, a way to reach you, and a sentence on the project. We follow up to set a visit and send a written quote."
      />
      <div className={`${container} grid gap-12 pb-20 lg:grid-cols-[1.4fr_0.8fr]`}>
        <QuoteForm initialProjectType={initialProjectType} />
        <aside>
          <h2 className="font-serif text-3xl text-ink">What happens next</h2>
          <ol className="mt-6 space-y-5">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t border-line pt-4">
                <p className="text-xs tracking-[0.14em] text-brass uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 font-medium">{step.title}</p>
                <p className="mt-1 text-sm text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 rounded-2xl bg-cream p-6 text-sm">
            <p className="font-medium">Prefer to write or call?</p>
            <a href={`mailto:${site.email}`} className="mt-3 block underline underline-offset-4">
              {site.email}
            </a>
            <a href={site.phoneHref} className="mt-1 block underline underline-offset-4">
              {site.phoneDisplay}
            </a>
            <p className="mt-3 text-muted">{site.hours}</p>
            <p className="mt-2 text-muted">Visits across {site.serviceArea}.</p>
          </div>
        </aside>
      </div>
    </>
  );
}
