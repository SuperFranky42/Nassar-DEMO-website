import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo-lockup.png";
import { nav, site } from "../data/site.ts";
import { btnPrimary, container } from "../lib/styles.ts";
import { Icon } from "./Icon.tsx";
import { useMotion } from "../lib/motion.ts";
import { TrustTicker } from "./TrustTicker.tsx";

const navClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-semibold transition ${isActive ? "text-brass-deep" : "text-ink hover:text-brass-deep"}`;

export function Header() {
  const location = useLocation();
  const { resetMotion } = useMotion();
  const [open, setOpen] = useState(false);
  const [openPath, setOpenPath] = useState(location.pathname);

  if (open && openPath !== location.pathname) {
    setOpenPath(location.pathname);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 bg-canvas shadow-sm">
      <div className={`${container} flex items-center justify-between gap-4 py-2`}>
        <Link
          to="/"
          aria-label="The Nassar Construction LLC"
          className="shrink-0"
          onClick={() => {
            setOpen(false);
            if (location.pathname === "/") {
              if (location.hash === "") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              resetMotion();
            }
          }}
        >
          <img
            src={logo}
            alt="The Nassar Construction LLC"
            className="h-12 w-auto brightness-0 sm:h-14 lg:h-16"
          />
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-semibold text-ink transition hover:border-ink/40 lg:inline-flex"
          >
            <Icon name="phone" className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <Link to="/quote" className={btnPrimary}>
            <span className="sm:hidden">Quote</span>
            <span className="hidden sm:inline">Request Quote</span>
          </Link>
          <button
            type="button"
            className="rounded-md border border-line px-3 py-2 text-sm font-semibold md:hidden"
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
          <NavLink to="/" end className="border-b border-line py-3 text-base font-semibold">
            Home
          </NavLink>
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="border-b border-line py-3 text-base font-semibold"
            >
              {item.label}
            </NavLink>
          ))}
          <a href={site.phoneHref} className="py-3 text-base font-semibold">
            Call {site.phoneDisplay}
          </a>
          <p className="pb-3 text-sm text-muted">Licensed {site.license}</p>
        </nav>
      ) : null}
      <TrustTicker />
    </header>
  );
}
