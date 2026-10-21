import { Link } from "react-router-dom";
import { roles, site, trustChecks } from "../../data/site.ts";
import { btnPrimaryLarge, container, sectionDark } from "../../lib/styles.ts";
import { Icon } from "../Icon.tsx";

export function TrustSplit() {
  const lead = roles.find((role) => role.title === "Project lead") ?? roles[0];

  return (
    <section className={sectionDark}>
      <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
        <div>
          <h2 className="text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl">
            Rooted in Oklahoma,
            <span className="block text-brass">Built on Trust.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            Nassar Construction has built and remodeled homes across Oklahoma since{" "}
            {site.established}. Every job starts with a visit and a written scope, and the
            same project lead stays with you until the final walkthrough.
          </p>
          <ul className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
            {trustChecks.map((item) => (
              <li key={item} className="flex items-center gap-3 font-semibold">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brass/15 text-brass">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Link to="/about" className={`${btnPrimaryLarge} mt-10`}>
            Learn More About Us
          </Link>
        </div>
        <div className="relative">
          <img
            src={lead.image}
            alt="Nassar project lead on a job site"
            className="aspect-[4/5] w-full rounded-2xl border-4 border-white/10 object-cover object-[center_20%] sm:aspect-[5/4] lg:aspect-[4/5]"
          />
          <div className="absolute right-4 bottom-4 rounded-xl bg-brass px-5 py-4 text-ink shadow-xl sm:right-6 sm:bottom-6">
            <p className="text-lg leading-tight font-extrabold">
              Licensed
              <span className="block">{site.license}</span>
            </p>
            <p className="mt-1 text-xs font-bold tracking-wide uppercase">Since {site.established}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
