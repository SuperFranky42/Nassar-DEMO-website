import { Link } from "react-router-dom";
import { categoryLabel } from "../data/categories.ts";
import type { Project } from "../data/projects.ts";

type ProjectCardProps = {
  project: Project;
  large?: boolean;
};

export function ProjectCard({ project, large = false }: ProjectCardProps) {
  return (
    <Link to={`/work/${project.slug}`} className="group block">
      <article>
        <div className="overflow-hidden rounded-2xl bg-cream">
          <img
            src={project.cover}
            alt={`${project.title} after renovation`}
            className={`w-full object-cover transition duration-500 group-hover:scale-[1.03] ${large ? "aspect-[16/9]" : "aspect-[4/3]"}`}
          />
        </div>
        <p className="mt-4 text-xs tracking-[0.16em] text-brass uppercase">
          {categoryLabel(project.category)}
        </p>
        <h3 className="mt-1 font-serif text-2xl text-ink">{project.title}</h3>
        <p className="mt-1 text-sm text-muted">
          {project.location} · {project.year}
        </p>
      </article>
    </Link>
  );
}
