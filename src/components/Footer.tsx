import { Link } from "react-router-dom";
import logo from "../../assets/logo-lockup.png";
import { services } from "../data/services.ts";
import { nav, serviceAreas, site } from "../data/site.ts";
import { container } from "../lib/styles.ts";
import { Icon } from "./Icon.tsx";

const headingClass = "text-sm font-extrabold tracking-[0.12em] text-brass uppercase";
const linkClass = "text-sm text-white/70 transition hover:text-brass";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className={`${container} grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1fr_1.3fr]`}>
        <div>
          <img src={logo} alt="The Nassar Construction LLC" className="h-auto w-full max-w-56" />
          <p className="mt-5 max-w-xs text-sm text-white/70">
            {site.tagline}. Kitchens, baths, whole homes, and commercial builds, with a
            written scope before the work starts.
          </p>
          <p className="mt-4 text-xs text-white/50">
            Licensed {site.license} · Since {site.established}
          </p>
        </div>
        <div>
          <h2 className={headingClass}>Quick links</h2>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/quote" className={linkClass}>
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className={headingClass}>Services</h2>
          <ul className="mt-5 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/services#${service.slug}`} className={linkClass}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={headingClass}>Service areas</h2>
          <ul className="mt-5 space-y-3">
            {serviceAreas.map((area) => (
              <li key={area.name}>
                <Link to="/about#where-we-work" className={linkClass}>
                  {area.name.replace(", OK", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={headingClass}>Contact us</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 hover:text-brass">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-white/10 text-brass">
                  <Icon name="phone" className="h-4 w-4" />
                </span>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all hover:text-brass">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-white/10 text-brass">
                  <Icon name="mail" className="h-4 w-4" />
                </span>
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/70">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-white/10 text-brass">
                <Icon name="pin" className="h-4 w-4" />
              </span>
              <span>
                {site.address}
                <span className="mt-1 block text-xs text-white/50">{site.hours}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 pt-5 pb-24 text-center sm:pb-5 text-xs text-white/50">
        Sample projects, reviews, and leads for a client demonstration. © 2026{" "}
        {site.legalName}. All rights reserved.
      </p>
    </footer>
  );
}
