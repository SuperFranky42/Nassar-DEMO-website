import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero.tsx";
import { QuoteBand } from "../components/QuoteBand.tsx";
import { usePageTitle } from "../components/usePageTitle.ts";
import { services } from "../data/services.ts";
import { container, textLink } from "../lib/styles.ts";

export function Services() {
  usePageTitle("Services · Nassar Renovation");

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Work matched to the room you have."
        text="Residential and commercial construction, remodels, framing, and interior and exterior work. Each one starts with a visit and a written scope."
      />
      {services.map((service, index) => {
        const flipped = index % 2 === 1;
        return (
          <article
            key={service.slug}
            id={service.slug}
            className={`${container} scroll-mt-24 grid items-center gap-8 border-t border-line py-12 lg:grid-cols-2 lg:py-16`}
          >
            <img
              src={service.image}
              alt={service.name}
              className={`aspect-[5/4] w-full rounded-2xl object-cover ${flipped ? "lg:order-2" : ""}`}
            />
            <div>
              <h2 className="font-serif text-4xl text-ink">{service.name}</h2>
              <p className="mt-4 text-muted">{service.summary}</p>
              <h3 className="mt-6 text-xs font-medium tracking-[0.14em] text-brass uppercase">
                Included
              </h3>
              <ul className="mt-3">
                {service.includes.map((item) => (
                  <li key={item} className="border-t border-line py-2 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
              {service.workCategory ? (
                <Link
                  to={`/work?type=${service.workCategory}`}
                  className={`${textLink} mt-6 inline-block`}
                >
                  See this work
                </Link>
              ) : null}
            </div>
          </article>
        );
      })}
      <QuoteBand
        title="Not sure which service fits?"
        text="Describe the room. We will sort the scope on the visit."
      />
    </>
  );
}
