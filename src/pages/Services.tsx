import { Link } from "react-router-dom";
import { Icon } from "../components/Icon.tsx";
import { PageHero } from "../components/PageHero.tsx";
import { QuoteBand } from "../components/QuoteBand.tsx";
import { usePageTitle } from "../components/usePageTitle.ts";
import { Reveal } from "../components/Reveal.tsx";
import { revealDelay } from "../lib/motion.ts";
import { services } from "../data/services.ts";
import { btnPrimary, btnSecondary, container } from "../lib/styles.ts";

export function Services() {
  usePageTitle("Services · Nassar Renovation");

  return (
    <>
      <PageHero
        title={
          <>
            On <span className="text-brass">Time</span>. On <span className="text-brass">Budget</span>. On{" "}
            <span className="text-brass">Point</span>
          </>
        }
        text="Your renovation deserves quality, precision, and a team you can trust. We deliver exceptional craftsmanship, complete every project on schedule, and keep your budget in mind—without compromising on quality."
      />
      <nav className="border-b border-line bg-paper" aria-label="Services on this page">
        <Reveal>
          <ul className={`${container} flex gap-2 overflow-x-auto py-4 lg:flex-wrap lg:overflow-visible`}>
          {services.map((service) => (
            <li key={service.slug} className="shrink-0">
              <a
                href={`#${service.slug}`}
                className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold transition hover:border-brass"
              >
                <Icon name={service.icon} className="h-4 w-4 text-brass-deep" />
                {service.name}
              </a>
            </li>
          ))}
          </ul>
        </Reveal>
      </nav>
      {services.map((service, index) => {
        const flipped = index % 2 === 1;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-32 py-16 lg:py-20 ${flipped ? "bg-paper" : "bg-canvas"}`}
          >
            <div className={`${container} grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
              <Reveal className={flipped ? "lg:order-2" : ""}>
                <img
                  src={service.image}
                  alt={service.name}
                  className="aspect-[5/4] w-full rounded-2xl object-cover shadow-xl shadow-black/10"
                />
              </Reveal>
              <Reveal delay={revealDelay(1)}>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  {service.name}
                </h2>
                <p className="mt-4 text-lg text-muted">{service.summary}</p>
                <h3 className="mt-8 text-xs font-bold tracking-[0.14em] text-brass-deep uppercase">
                  What is included
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brass-deep" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to={`/quote?project=${encodeURIComponent(service.name)}`}
                    className={btnPrimary}
                  >
                    Get a quote
                  </Link>
                  {service.workCategory ? (
                    <Link to={`/work?type=${service.workCategory}`} className={btnSecondary}>
                      See this work
                    </Link>
                  ) : null}
                </div>
              </div>
              </Reveal>
            </div>
          </section>
        );
      })}
      <QuoteBand
        title="Not sure which service fits?"
        text="Describe the room. We will sort the scope on the visit."
      />
    </>
  );
}
