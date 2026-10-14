import { Link, useParams } from "react-router-dom";
import { BeforeAfter } from "../components/BeforeAfter.tsx";
import { ProjectCard } from "../components/ProjectCard.tsx";
import { QuoteBand } from "../components/QuoteBand.tsx";
import { usePageTitle } from "../components/usePageTitle.ts";
import { categoryLabel } from "../data/categories.ts";
import { getProject, relatedProjects } from "../data/projects.ts";
import { serviceBySlug } from "../data/services.ts";
import { btnPrimary, container, textLink } from "../lib/styles.ts";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  usePageTitle(
    project ? `${project.title} · Nassar Renovation` : "Project · Nassar Renovation",
  );

  if (!project) {
    return (
      <div className={`${container} py-24`}>
        <h1 className="font-serif text-4xl text-ink">That project is not in this demo.</h1>
        <Link to="/work" className={`${textLink} mt-6 inline-block`}>
          Back to our work
        </Link>
      </div>
    );
  }

  const label = categoryLabel(project.category);
  const service = serviceBySlug(project.category);
  const related = relatedProjects(project.slug);
  const facts = [
    { label: "Location", value: project.location },
    { label: "Year", value: project.year },
    { label: "Duration", value: project.duration },
    { label: "Type", value: label },
  ];

  return (
    <article>
      <div className={`${container} pt-10`}>
        <p className="text-sm text-muted">
          <Link to="/work" className={textLink}>
            Our work
          </Link>
          <span className="px-2">/</span>
          {label}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl text-balance text-ink sm:text-6xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{project.summary}</p>
        <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-line py-5 sm:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs tracking-[0.14em] text-brass uppercase">{fact.label}</dt>
              <dd className="mt-1 font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <img
        src={project.cover}
        alt={`${project.title} after renovation`}
        className="mt-8 aspect-[4/3] w-full object-cover sm:aspect-[16/8]"
      />

      <div className={`${container} grid gap-12 py-14 lg:grid-cols-[1.2fr_0.8fr]`}>
        <div>
          <h2 className="font-serif text-3xl text-ink">The work</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{project.story}</p>
        </div>
        <div className="rounded-2xl border border-line bg-paper p-6">
          <h2 className="font-serif text-2xl text-ink">Included</h2>
          <ul className="mt-4">
            {project.scope.map((item) => (
              <li key={item} className="border-t border-line py-3 text-sm">
                {item}
              </li>
            ))}
          </ul>
          {service ? (
            <Link
              to={`/quote?project=${encodeURIComponent(service.name)}`}
              className={`${btnPrimary} mt-6`}
            >
              Start a project like this
            </Link>
          ) : null}
        </div>
      </div>

      {project.before && project.after ? (
        <div className={`${container} pb-14`}>
          <h2 className="font-serif text-3xl text-ink">Before and after</h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Slide across the photograph to see the room we started with and the room we left.
          </p>
          <div className="mt-6">
            <BeforeAfter
              before={project.before}
              after={project.after}
              beforeAlt={`${project.title} before renovation`}
              afterAlt={`${project.title} after renovation`}
            />
          </div>
        </div>
      ) : null}

      <div className={`${container} pb-16`}>
        <h2 className="font-serif text-3xl text-ink">More from the job</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {project.gallery.map((image, index) => (
            <li key={image}>
              <img
                src={image}
                alt={`${project.title}, detail ${index + 1}`}
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
            </li>
          ))}
        </ul>
      </div>

      {related.length > 0 ? (
        <section className="border-t border-line bg-paper py-14">
          <div className={container}>
            <h2 className="font-serif text-3xl text-ink">Other work</h2>
            <ul className="mt-8 grid gap-8 sm:grid-cols-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <ProjectCard project={item} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <QuoteBand
        title="Planning a room like this?"
        text="Send a note with the project type and we will set a visit."
      />
    </article>
  );
}
