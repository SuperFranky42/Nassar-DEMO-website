import { Link } from "react-router-dom";
import { services } from "../../data/services.ts";
import { btnGhostDark, container } from "../../lib/styles.ts";
import { Icon } from "../Icon.tsx";
import { revealDelay } from "../../lib/motion.ts";
import { Reveal } from "../Reveal.tsx";
import { SectionHeading } from "../SectionHeading.tsx";

export function ServiceGrid() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 text-white md:py-24">
      <div className="pattern-dots absolute inset-0 -z-10 opacity-80" />
      <div className={container}>
        <Reveal>
          <SectionHeading
            dark
            center
            title="Our Professional"
            accent="Services"
            text="From a single bathroom to a new commercial build, every service starts with a visit and a written scope."
          />
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <li key={service.slug} className={index === services.length - 1 ? "sm:col-span-2" : ""}>
              <Reveal delay={revealDelay(index)} className="h-full">
                <Link
                  to={`/services#${service.slug}`}
                  className="group flex h-full flex-col rounded-xl bg-white p-6 text-ink transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brass/20"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-brass/15 text-brass-deep transition group-hover:bg-brass group-hover:text-ink">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold">{service.name}</h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted">{service.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brass-deep">
                    Learn more
                    <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal>
          <div className="mt-12 text-center">
            <Link to="/services" className={btnGhostDark}>
              View All Services
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
