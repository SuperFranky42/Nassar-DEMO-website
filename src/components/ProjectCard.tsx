import { Link } from "react-router-dom";
import { categoryLabel } from "../data/categories.ts";
import type { Project } from "../data/projects.ts";
import { Icon } from "./Icon.tsx";

type ProjectCardProps = {
  project: Project;
  large?: boolean;
};

export function ProjectCard({ project, large = false }: ProjectCardProps) {
  return (
    <Link to={`/work/${project.slug}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-black/10">
        <div className="relative overflow-hidden bg-ink">
          <img
            src={project.cover}
            alt={`${project.title} after renovation`}
            className={`w-full object-cover transition duration-500 group-hover:scale-[1.04] ${large ? "aspect-[16/9]" : "aspect-[4/3]"}`}
          />
          <span className="absolute top-4 left-4 rounded-md bg-brass px-3 py-1 text-xs font-extrabold tracking-wider text-ink uppercase">
            {categoryLabel(project.category)}
          </span>
        </div>
        <div className="flex flex-1 items-end justify-between gap-4 p-5">
          <div>
            <h3 className="text-xl font-extrabold text-ink">{project.title}</h3>
            <p className="mt-1 text-sm text-muted">
              {project.location} · {project.year}
            </p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-brass transition group-hover:bg-brass group-hover:text-ink">
            <Icon name="arrow" className="h-4 w-4" />
          </span>
        </div>
      </article>
    </Link>
  );
}
