import { PageHero } from "../components/PageHero.tsx";
import { QuoteBand } from "../components/QuoteBand.tsx";
import { usePageTitle } from "../components/usePageTitle.ts";
import { photo } from "../data/photos.ts";
import { roles, site } from "../data/site.ts";
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
        eyebrow="About"
        title="A crew that treats the homeowner as the client."
        text="Nassar plans and builds renovations for people who want the work explained in plain language, then done that way."
      />
      <section className={`${container} grid items-center gap-10 border-t border-line py-14 lg:grid-cols-2`}>
        <div>
          <h2 className="font-serif text-3xl text-ink">How the work is run</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            A job starts with a visit, a measurement, and a written scope. The same
            project lead stays from that conversation through the final walkthrough.
            The crew is local to {site.serviceArea}, which is how we can come back
            when a detail needs another look.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            We would rather explain a limit on day one than discover it in week six.
            If a room should wait, we say so. If a floor can be saved, we repair it
            before we talk about replacing it.
          </p>
        </div>
        <img
          src={photo("1503387762-592deb58ef4e")}
          alt="Drawings and a renovation in progress"
          className="aspect-[5/4] w-full rounded-3xl object-cover"
        />
      </section>

      <section className="bg-paper py-14">
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
                  <p className="text-sm font-medium text-ink">{role.name}</p>
                  <h3 className="mt-1 font-serif text-2xl">{role.title}</h3>
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

      <section className="border-t border-line bg-cream">
        <div className={`${container} grid gap-8 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center`}>
          <div>
            <h2 className="font-serif text-3xl text-ink">Where we work</h2>
            <p className="mt-4 text-muted">
              Visits are across {site.serviceArea}. Call, email, or send a quote
              request and we will set a time at the house.
            </p>
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
