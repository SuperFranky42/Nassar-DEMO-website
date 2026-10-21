import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo-lockup.png";
import { nav, roles, site } from "../data/site.ts";
import { btnPrimary, container } from "../lib/styles.ts";

const navClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm transition ${isActive ? "text-ink" : "text-muted hover:text-ink"}`;

export function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [openPath, setOpenPath] = useState(location.pathname);

  if (open && openPath !== location.pathname) {
    setOpenPath(location.pathname);
    setOpen(false);
  }

  const lead = roles.find((role) => role.title === "Project lead") ?? roles[0];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur-md">
      <div className="h-1 bg-brass" />
      <div className={`${container} flex items-center justify-between gap-4 py-2`}>
        <Link
          to="/"
          aria-label="The Nassar Construction LLC"
          className="shrink-0"
          onClick={() => {
            setOpen(false);
            if (location.pathname === "/" && location.hash === "") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img
            src={logo}
            alt="The Nassar Construction LLC"
            className="h-12 w-auto brightness-0 sm:h-14 lg:h-16"
          />
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              to="/about#who-you-will-meet"
              className="shrink-0 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
            >
              <img
                src={lead.image}
                alt={lead.title}
                className="h-9 w-9 rounded-full object-cover"
              />
            </Link>
            <span className="leading-tight">
              <a href={site.phoneHref} className="block text-sm text-muted hover:text-ink">
                {site.phoneDisplay}
              </a>
              <span className="block text-[11px] tracking-wide text-muted">
                Lic. {site.license}
              </span>
            </span>
          </div>
          <Link to="/quote" className={btnPrimary}>
            <span className="sm:hidden">Quote</span>
            <span className="hidden sm:inline">Get a quote</span>
          </Link>
          <button
            type="button"
            className="text-sm font-medium md:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => {
              setOpenPath(location.pathname);
              setOpen((value) => !value);
            }}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="site-menu"
          className={`${container} flex flex-col border-t border-line py-3 md:hidden`}
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="border-b border-line py-3 text-base"
            >
              {item.label}
            </NavLink>
          ))}
          <a href={site.phoneHref} className="py-3 text-base">
            Call {site.phoneDisplay}
          </a>
          <p className="pb-3 text-sm text-muted">Licensed {site.license}</p>
        </nav>
      ) : null}
    </header>
  );
}
