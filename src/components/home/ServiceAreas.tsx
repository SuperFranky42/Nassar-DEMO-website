import { Link } from "react-router-dom";
import { serviceAreas } from "../../data/site.ts";
import { container } from "../../lib/styles.ts";
import { Icon } from "../Icon.tsx";
import { revealDelay } from "../../lib/motion.ts";
import { Reveal } from "../Reveal.tsx";
import { SectionHeading } from "../SectionHeading.tsx";

export function ServiceAreas() {
  return (
    <section className="bg-paper py-20 md:py-24">
      <div className={container}>
        <Reveal>
          <SectionHeading
            center
            title="Serving"
            accent="Oklahoma"
            text="We build and remodel across these cities and counties. If you are close by, ask. We will tell you before we set a visit."
          />
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area, index) => (
            <li key={area.name}>
              <Reveal delay={revealDelay(index)} className="h-full">
                <Link
                  to="/about#where-we-work"
                  className="group relative block overflow-hidden rounded-xl bg-ink"
                >
                  <img
                    src={area.image}
                    alt=""
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-55"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute bottom-5 left-5 flex items-center gap-2 text-xl font-extrabold text-white sm:text-2xl">
                    <Icon name="pin" className="h-5 w-5 text-brass" />
                    {area.name.replace(", OK", "")}
                  </span>
                  <span className="absolute top-4 right-4 rounded-md bg-white/15 px-2 py-1 text-xs font-bold tracking-wider text-white uppercase backdrop-blur">
                    {area.group === "Cities" ? "City" : "County"}
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
