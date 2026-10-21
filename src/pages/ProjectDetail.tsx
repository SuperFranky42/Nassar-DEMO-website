import { Link, useParams } from "react-router-dom";
import { BeforeAfter } from "../components/BeforeAfter.tsx";
import { Icon } from "../components/Icon.tsx";
import { ProjectCard } from "../components/ProjectCard.tsx";
import { QuoteBand } from "../components/QuoteBand.tsx";
import { SectionHeading } from "../components/SectionHeading.tsx";
import { usePageTitle } from "../components/usePageTitle.ts";
import { Reveal } from "../components/Reveal.tsx";
import { revealDelay } from "../lib/motion.ts";
import { categoryLabel } from "../data/categories.ts";
import { getProject, relatedProjects } from "../data/projects.ts";
import { serviceForProject } from "../data/services.ts";
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
        <Reveal>
          <h1 className="text-4xl font-extrabold text-ink">That project is not in this demo.</h1>
          <Link to="/work" className={`${textLink} mt-6 inline-block`}>
            Back to our work
          </Link>
        </Reveal>
      </div>
    );
  }

  const label = categoryLabel(project.category);
  const service = serviceForProject(project.category);
  const related = relatedProjects(project.slug);
  const facts = [
    { label: "Location", value: project.location },
    { label: "Year", value: project.year },
    { label: "Duration", value: project.duration },
    { label: "Type", value: label },
  ];

  return (
    <article>
      <header className="relative isolate overflow-hidden bg-ink text-white">
        <img
          src={project.cover}
          alt={`${project.title} after renovation`}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
        <div className={`${container} pt-12 pb-10 sm:pt-40`}>
          <Reveal>
          <p className="text-sm text-white/70">
            <Link to="/work" className="font-semibold text-brass hover:underline">
              Our work
            </Link>
            <span className="px-2">/</span>
            {label}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">{project.summary}</p>
          <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-white/15 pt-6 sm:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-bold tracking-[0.14em] text-brass uppercase">{fact.label}</dt>
                <dd className="mt-1 font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
          </Reveal>
        </div>
      </header>

      <div className={`${container} grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr]`}>
        <Reveal>
        <div>
          <SectionHeading title="The" accent="work" />
          <p className="mt-5 text-lg leading-relaxed text-muted">{project.story}</p>
        </div>
        </Reveal>
        <Reveal delay={revealDelay(1)}>
        <div className="rounded-2xl bg-ink p-6 text-white sm:p-8">
          <h2 className="text-2xl font-extrabold">What was included</h2>
          <ul className="mt-5 space-y-3">
            {project.scope.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
                {item}
              </li>
            ))}
          </ul>
          {service ? (
            <Link
              to={`/quote?project=${encodeURIComponent(service.name)}`}
              className={`${btnPrimary} mt-8 w-full py-3 text-base`}
            >
              Start a project like this
            </Link>
          ) : null}
        </div>
        </Reveal>
      </div>

      {project.before && project.after ? (
        <div className="bg-paper py-16">
          <div className={container}>
            <Reveal>
            <SectionHeading
              title="Before and"
              accent="after"
              text="Drag across the photograph to see the room we started with and the room we left."
            />
            <div className="mt-8">
              <BeforeAfter
                before={project.before}
                after={project.after}
                beforeAlt={`${project.title} before renovation`}
                afterAlt={`${project.title} after renovation`}
              />
            </div>
            </Reveal>
          </div>
        </div>
      ) : null}

      <div className={`${container} py-16`}>
        <Reveal>
          <SectionHeading title="More from" accent="the job" />
        </Reveal>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {project.gallery.map((image, index) => (
            <li key={image}>
              <Reveal delay={revealDelay(index)}>
                <img
                  src={image}
                  alt={`${project.title}, detail ${index + 1}`}
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      {related.length > 0 ? (
        <section className="border-t border-line bg-paper py-16">
          <div className={container}>
            <Reveal>
              <SectionHeading title="Other" accent="work" />
            </Reveal>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((item, index) => (
                <li key={item.slug}>
                  <Reveal delay={revealDelay(index)} className="h-full">
                    <ProjectCard project={item} />
                  </Reveal>
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
