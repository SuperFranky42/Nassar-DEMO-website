import { Link } from "react-router-dom";
import { nav, serviceAreas, site } from "../data/site.ts";
import { container } from "../lib/styles.ts";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className={`${container} grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4`}>
        <div>
          <p className="font-serif text-2xl">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm text-paper/70">
            {site.tagline}. Kitchens, baths, and whole homes, with a written
            scope before the work starts.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.16em] text-paper/50 uppercase">Visit</p>
          <p className="mt-3 text-sm">{site.address}</p>
          <p className="mt-1 text-sm text-paper/70">
            Licensed {site.license} · Since {site.established}
          </p>
          <Link
            to="/about#where-we-work"
            className="mt-1 block text-sm text-paper/70 hover:text-cream"
          >
            {serviceAreas.map((area) => area.name).join(" · ")}
          </Link>
          <p className="mt-3 text-sm text-paper/70">{site.hours}</p>
        </div>
        <div>
          <p className="text-xs tracking-[0.16em] text-paper/50 uppercase">Talk</p>
          <a href={site.phoneHref} className="mt-3 block text-sm hover:text-cream">
            {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="mt-1 block text-sm hover:text-cream">
            {site.email}
          </a>
          <Link to="/quote" className="mt-3 inline-block text-sm text-cream underline underline-offset-4">
            Request a quote
          </Link>
        </div>
        <div>
          <p className="text-xs tracking-[0.16em] text-paper/50 uppercase">Explore</p>
          <ul className="mt-3 space-y-1 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs tracking-[0.16em] text-paper/50 uppercase">
            For this demo
          </p>
          <Link
            to="/crm"
            className="mt-2 inline-block text-sm text-cream underline underline-offset-4"
          >
            Team view
          </Link>
        </div>
      </div>
      <p className="border-t border-paper/15 px-5 py-4 text-center text-xs text-paper/50">
        Sample projects, reviews, and leads for a client demonstration. © 2026{" "}
        {site.legalName}.
      </p>
    </footer>
  );
}
