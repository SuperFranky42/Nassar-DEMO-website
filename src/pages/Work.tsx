import { useSearchParams } from "react-router-dom";
import { PageHero } from "../components/PageHero.tsx";
import { ProjectCard } from "../components/ProjectCard.tsx";
import { QuoteBand } from "../components/QuoteBand.tsx";
import { usePageTitle } from "../components/usePageTitle.ts";
import { Reveal } from "../components/Reveal.tsx";
import { revealDelay } from "../lib/motion.ts";
import { categories, isCategory } from "../data/categories.ts";
import { projects } from "../data/projects.ts";
import { container } from "../lib/styles.ts";

const filters = [{ id: "all", label: "All" }, ...categories];

export function Work() {
  usePageTitle("Our Work · Nassar Renovation");
  const [params, setParams] = useSearchParams();
  const param = params.get("type");
  const active = isCategory(param) ? param : "all";
  const visible =
    active === "all" ? projects : projects.filter((project) => project.category === active);

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Houses we have"
        accent="finished."
        text="A sample of kitchens, baths, and whole-home jobs. Open a project for the scope, the timeline, and a before-and-after."
      />
      <div className={`${container} pt-12`}>
        <Reveal>
          <div className="flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter projects">
          {filters.map((filter) => {
            const selected = active === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  if (filter.id === "all") setParams({});
                  else setParams({ type: filter.id });
                }}
                className={`shrink-0 rounded-md border px-4 py-2 text-sm font-semibold transition ${
                  selected
                    ? "border-ink bg-ink text-brass"
                    : "border-line bg-white text-ink hover:border-brass"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
          </div>
          <p className="mt-6 text-sm text-muted">
            {visible.length} {visible.length === 1 ? "project" : "projects"}
          </p>
        </Reveal>
        {visible.length === 0 ? (
          <p className="mt-8 text-muted">No sample projects in that category yet.</p>
        ) : (
          <ul className="mt-6 grid gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, index) => (
              <li key={project.slug}>
                <Reveal delay={revealDelay(index)} className="h-full">
                  <ProjectCard project={project} />
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
      <QuoteBand
        title="See a room like yours?"
        text="Tell us the project type and we will follow up to set a visit."
      />
    </>
  );
}
