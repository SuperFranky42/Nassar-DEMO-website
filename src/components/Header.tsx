import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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
      <div className={`${container} flex h-16 items-center justify-between gap-4`}>
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-ink font-serif text-lg text-cream">
            N
          </span>
          <span>
            <span className="block font-serif text-lg leading-none">{site.name}</span>
            <span className="block text-[11px] tracking-[0.16em] text-muted uppercase">
              Renovation
            </span>
          </span>
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
            <img
              src={lead.image}
              alt={`${lead.name}, ${lead.title}`}
              className="h-9 w-9 rounded-full object-cover"
            />
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
