import { useState } from "react";
import { Link } from "react-router-dom";
import { issues } from "../../data/issues.ts";
import { photo } from "../../data/photos.ts";
import { services } from "../../data/services.ts";
import { btnPrimaryLarge, container, sectionDark } from "../../lib/styles.ts";
import { Icon } from "../Icon.tsx";
import { SectionHeading } from "../SectionHeading.tsx";

const houseImage = photo("1618221195710-dd6b41faaea6", 1400);

export function NeedsWork() {
  const [activeId, setActiveId] = useState(issues[0].id);
  const active = issues.find((issue) => issue.id === activeId) ?? issues[0];
  const service = services.find((item) => item.slug === active.serviceSlug);

  return (
    <section className={sectionDark}>
      <div className={container}>
        <SectionHeading
          dark
          center
          title="What Needs"
          accent="Work?"
          text="Pick the problem you are living with to see what causes it and how we fix it."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-start">
          <div>
            <div className="relative overflow-hidden rounded-2xl border-4 border-white/10">
              <img
                src={houseImage}
                alt="Living space in a home Nassar renovated"
                className="aspect-[4/3] w-full object-cover brightness-75"
              />
              {issues.map((issue) => {
                const selected = issue.id === active.id;
                return (
                  <button
                    key={issue.id}
                    type="button"
                    aria-pressed={selected}
                    aria-label={`Select ${issue.label}`}
                    onClick={() => setActiveId(issue.id)}
                    className={`absolute grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 transition focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white ${
                      selected
                        ? "h-14 w-14 border-white bg-brass text-ink shadow-[0_0_0_8px_rgba(201,162,74,0.35)]"
                        : "h-11 w-11 border-brass bg-ink/85 text-brass hover:bg-brass hover:text-ink"
                    }`}
                    style={{ left: `${issue.x}%`, top: `${issue.y}%` }}
                  >
                    <Icon name={issue.icon} className={selected ? "h-6 w-6" : "h-5 w-5"} />
                  </button>
                );
              })}
            </div>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Common problems">
              {issues.map((issue) => {
                const selected = issue.id === active.id;
                return (
                  <li key={issue.id}>
                    <button
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setActiveId(issue.id)}
                      className={`rounded-md border px-3 py-1.5 text-sm font-semibold transition ${
                        selected
                          ? "border-brass bg-brass text-ink"
                          : "border-white/15 text-white/80 hover:border-brass hover:text-white"
                      }`}
                    >
                      {issue.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-ink p-6 sm:p-8" aria-live="polite">
            <h3 className="flex items-center gap-3 text-2xl font-extrabold">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brass/15 text-brass">
                <Icon name={active.icon} className="h-5 w-5" />
              </span>
              {active.label}
            </h3>
            <img
              src={active.image}
              alt=""
              className="mt-6 aspect-[16/9] w-full rounded-xl object-cover"
            />
            <p className="mt-6 text-white/75">{active.cause}</p>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-white/60 uppercase">
                <Icon name="wrench" className="h-4 w-4 text-brass" />
                Recommended fix
              </p>
              <p className="mt-2 text-lg font-extrabold">{active.fix}</p>
            </div>
            <Link
              to={`/quote?project=${encodeURIComponent(service?.name ?? "")}`}
              className={`${btnPrimaryLarge} mt-6 w-full`}
            >
              Get a Quote for This
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
