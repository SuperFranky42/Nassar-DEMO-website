import { Link } from "react-router-dom";
import { categoryLabel } from "../data/categories.ts";
import { getProject, projects } from "../data/projects.ts";
import { reviews } from "../data/reviews.ts";
import { services } from "../data/services.ts";
import { steps, trust } from "../data/site.ts";
import { ProjectCard } from "../components/ProjectCard.tsx";
import { ReviewCard } from "../components/ReviewCard.tsx";
import { SectionHeading } from "../components/SectionHeading.tsx";
import { usePageTitle } from "../components/usePageTitle.ts";
import { btnPrimary, btnSecondary, container, textLink } from "../lib/styles.ts";

export function Home() {
  usePageTitle("Nassar Renovation");
  const featured = projects.filter((project) => project.featured);
  const hero = getProject("linden-whole-home");
  const highlights = reviews.slice(0, 3);

  return (
    <>
      <section className={`${container} grid items-center gap-10 py-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16 lg:py-20`}>
        <div className="order-2 lg:order-1">
          <p className="text-xs font-medium tracking-[0.18em] text-brass uppercase">
            Nassar Construction LLC
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-balance text-ink sm:text-6xl lg:text-7xl">
            Building Your Vision Into Reality!
          </h1>
          <p className="mt-6 max-w-md text-lg text-pretty text-muted">
            At Nassar Construction LLC, we turn your ideas into strong, modern,
            and high-quality construction projects. From planning to completion,
            our experienced team delivers excellence every step of the way.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/quote" className={btnPrimary}>
              Get a quote
            </Link>
            <Link to="/work" className={btnSecondary}>
              See the work
            </Link>
          </div>
        </div>
        {hero ? (
          <Link to={`/work/${hero.slug}`} className="group order-1 block lg:order-2">
            <img
              src={hero.cover}
              alt={`${hero.title} after renovation`}
              className="aspect-[4/3] w-full rounded-3xl object-cover sm:aspect-[5/4] lg:aspect-[4/5] lg:min-h-[34rem]"
            />
            <span className="mt-3 flex items-center justify-between text-sm text-muted">
              <span>
                {hero.location} · {categoryLabel(hero.category)}
              </span>
              <span className="text-brass-deep group-hover:underline">View project</span>
            </span>
          </Link>
        ) : null}
      </section>

      <section className="border-y border-line" aria-label="How we work with clients">
        <ul className={`${container} grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-4`}>
          {trust.map((item) => (
            <li key={item.title}>
              <p className="font-medium text-ink">{item.title}</p>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${container} py-16 sm:py-20`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="What we build"
            text="From a kitchen remodel to a full build. Each service starts with a visit and a written scope."
          />
          <Link to="/services" className={textLink}>
            All services
          </Link>
        </div>
        <ul className="mt-10 grid gap-px border-b border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.slug} className="bg-canvas">
              <Link
                to={`/services#${service.slug}`}
                className="flex h-full flex-col transition hover:bg-paper"
              >
                <img
                  src={service.image}
                  alt=""
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs tracking-[0.16em] text-brass">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl text-ink">{service.name}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted">{service.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <div className={container}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Our work"
              title="Recent houses"
              text="Open a project for the scope, the timeline, and a before-and-after."
            />
            <Link to="/work" className={textLink}>
              Full gallery
            </Link>
          </div>
          <ul className="mt-10 grid gap-8 md:grid-cols-2">
            {featured.map((project, index) => (
              <li key={project.slug} className={index === 0 ? "md:col-span-2" : ""}>
                <ProjectCard project={project} large={index === 0} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${container} py-16 sm:py-20`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Reviews"
            title="Notes from the people who lived through it"
            text="Sample comments from finished projects. Communication, the quote, and a livable house come up every time."
          />
          <Link to="/reviews" className={textLink}>
            All reviews
          </Link>
        </div>
        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {highlights.map((review) => (
            <li key={review.id}>
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line bg-cream py-16 sm:py-20">
        <div className={container}>
          <SectionHeading
            eyebrow="Process"
            title="Plan, design, build, deliver"
            text="From planning and design to construction and final delivery, we handle every step with precision and quality. Whether it's a custom home, kitchen remodel, bathroom renovation, or outdoor living space, our team is committed to bringing your vision to life with expert craftsmanship and reliable service."
          />
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title}>
                <p className="font-serif text-3xl text-brass">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className={`${container} flex flex-col gap-6 py-16 md:flex-row md:items-end md:justify-between`}>
          <div>
            <h2 className="font-serif text-4xl text-balance">Tell us about the room.</h2>
            <p className="mt-3 max-w-lg text-paper/75">
              A short note is enough. We follow up to set a visit and a written quote.
            </p>
          </div>
          <Link to="/quote" className={btnPrimary}>
            Get a quote
          </Link>
        </div>
      </section>
    </>
  );
}
