import { Link } from "react-router-dom";
import { projects } from "../../data/projects.ts";
import { btnSecondary, container, sectionLight } from "../../lib/styles.ts";
import { BeforeAfter } from "../BeforeAfter.tsx";
import { Icon } from "../Icon.tsx";
import { SectionHeading } from "../SectionHeading.tsx";

export function RecentProjects() {
  const compared = projects.filter((project) => project.before && project.after).slice(0, 3);

  return (
    <section className={sectionLight}>
      <div className={container}>
        <SectionHeading
          center
          title="Recent"
          accent="Projects"
          text="See the quality of our work for yourself. Drag the slider to see the transformation."
        />
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {compared.map((project) =>
            project.before && project.after ? (
              <li key={project.slug} className="text-center">
                <BeforeAfter
                  compact
                  before={project.before}
                  after={project.after}
                  beforeAlt={`${project.title} before renovation`}
                  afterAlt={`${project.title} after renovation`}
                />
                <h3 className="mt-5 text-xl font-extrabold">
                  <Link to={`/work/${project.slug}`} className="hover:text-brass-deep">
                    {project.title}
                  </Link>
                </h3>
                <p className="mx-auto mt-2 max-w-sm text-sm text-muted">{project.summary}</p>
              </li>
            ) : null,
          )}
        </ul>
        <div className="mt-12 text-center">
          <Link to="/work" className={btnSecondary}>
            View All Projects
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
