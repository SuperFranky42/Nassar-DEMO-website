import { PageHero } from "../components/PageHero.tsx";
import { QuoteBand } from "../components/QuoteBand.tsx";
import { usePageTitle } from "../components/usePageTitle.ts";
import { roles, serviceAreas, site } from "../data/site.ts";
import { container } from "../lib/styles.ts";

const promises = [
  {
    title: "You can stay when the scope allows it",
    text: "We plan dust walls, access, and daily cleanup around the rooms you are still living in.",
  },
  {
    title: "Decisions are written down",
    text: "A finish choice, a date, and a price live in the scope so they do not get lost between trades.",
  },
  {
    title: "A surprise in the walls is a conversation",
    text: "If the structure changes the work, you hear it before the crew changes course.",
  },
];

export function About() {
  usePageTitle("About · Nassar Renovation");

  return (
    <>
      <PageHero
        wideTitle
        title="An experienced team that focuses on quality, reliability, and customer satisfaction from start to finish."
      />

      <section id="who-you-will-meet" className="scroll-mt-24 bg-paper py-14">
        <div className={container}>
          <h2 className="font-serif text-3xl text-ink">Who you will meet</h2>
          <ul className="mt-8 grid gap-6 lg:grid-cols-3">
            {roles.map((role) => (
              <li key={role.title} className="overflow-hidden rounded-2xl border border-line bg-canvas">
                <img
                  src={role.image}
                  alt=""
                  className="aspect-[4/5] w-full object-cover object-[center_20%]"
                />
                <div className="p-6">
                  <h3 className="font-serif text-2xl">{role.title}</h3>
                  <p className="mt-3 text-sm text-muted">{role.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${container} py-14`}>
        <h2 className="font-serif text-3xl text-ink">Working around a lived-in house</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {promises.map((promise) => (
            <li key={promise.title}>
              <h3 className="font-serif text-2xl text-ink">{promise.title}</h3>
              <p className="mt-3 text-sm text-muted">{promise.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="where-we-work" className="scroll-mt-24 border-t border-line bg-cream">
        <div className={`${container} grid gap-8 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center`}>
          <div>
            <h2 className="font-serif text-3xl text-ink">Where we work</h2>
            <p className="mt-4 text-muted">
              Visits are across {site.serviceArea}. Call, email, or send a quote
              request and we will set a time at the house. If the house is farther
              out, we will say so before we set a time.
            </p>
            <ul className="mt-8 grid gap-8 sm:grid-cols-2">
              {["Cities", "Counties"].map((group) => (
                <li key={group}>
                  <p className="font-medium text-ink">{group}</p>
                  <ul className="mt-2 space-y-1">
                    {serviceAreas
                      .filter((area) => area.group === group)
                      .map((area) => (
                        <li key={area.name} className="text-sm text-muted">
                          {area.name}
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="text-xs tracking-[0.14em] text-brass uppercase">Office</dt>
                <dd className="mt-1">{site.address}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.14em] text-brass uppercase">Hours</dt>
                <dd className="mt-1">{site.hours}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.14em] text-brass uppercase">Phone</dt>
                <dd className="mt-1">
                  <a href={site.phoneHref} className="underline underline-offset-4">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.14em] text-brass uppercase">License</dt>
                <dd className="mt-1">{site.license}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.14em] text-brass uppercase">Since</dt>
                <dd className="mt-1">{site.established}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.14em] text-brass uppercase">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="underline underline-offset-4">
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-3xl">
            <iframe
              title={`Map of the ${site.legalName} office`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(site.address)}&z=15&output=embed`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <QuoteBand
        title="Ready for a visit?"
        text="Send the room, a rough budget, and a timeline. We will follow up."
      />
    </>
  );
}
