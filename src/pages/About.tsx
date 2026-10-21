import { Icon } from "../components/Icon.tsx";
import { PageHero } from "../components/PageHero.tsx";
import { QuoteBand } from "../components/QuoteBand.tsx";
import { SectionHeading } from "../components/SectionHeading.tsx";
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

const details = [
  { label: "Office", value: site.address },
  { label: "Hours", value: site.hours },
  { label: "License", value: site.license },
  { label: "Since", value: site.established },
];

export function About() {
  usePageTitle("About · Nassar Renovation");

  return (
    <>
      <PageHero
        eyebrow="About Nassar"
        wideTitle
        title="An experienced team focused on quality, reliability, and"
        accent="customer satisfaction."
      />

      <section id="who-you-will-meet" className="scroll-mt-32 bg-canvas py-20">
        <div className={container}>
          <SectionHeading title="Who you will" accent="meet" />
          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {roles.map((role) => (
              <li key={role.title} className="overflow-hidden rounded-2xl border border-line bg-white">
                <img
                  src={role.image}
                  alt=""
                  className="aspect-[4/5] w-full object-cover object-[center_20%]"
                />
                <div className="p-6">
                  <h3 className="text-xl font-extrabold">{role.title}</h3>
                  <p className="mt-3 text-sm text-muted">{role.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pattern-dots py-20 text-white">
        <div className={container}>
          <SectionHeading dark title="Working around a" accent="lived-in house" />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {promises.map((promise) => (
              <li key={promise.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Icon name="shield" className="h-7 w-7 text-brass" />
                <h3 className="mt-4 text-xl font-extrabold">{promise.title}</h3>
                <p className="mt-3 text-sm text-white/70">{promise.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="where-we-work" className="scroll-mt-32 bg-paper py-20">
        <div className={`${container} grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center`}>
          <div>
            <SectionHeading
              title="Where we"
              accent="work"
              text={`Visits are across ${site.serviceArea}. If the house is farther out, we will say so before we set a time.`}
            />
            <ul className="mt-8 grid gap-8 sm:grid-cols-2">
              {["Cities", "Counties"].map((group) => (
                <li key={group}>
                  <p className="text-xs font-bold tracking-[0.14em] text-brass-deep uppercase">{group}</p>
                  <ul className="mt-3 space-y-2">
                    {serviceAreas
                      .filter((area) => area.group === group)
                      .map((area) => (
                        <li key={area.name} className="flex items-center gap-2 font-semibold">
                          <Icon name="pin" className="h-4 w-4 text-brass-deep" />
                          {area.name}
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
            <dl className="mt-8 grid gap-4 border-t border-line pt-6 text-sm sm:grid-cols-2">
              {details.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-xs font-bold tracking-[0.14em] text-brass-deep uppercase">
                    {detail.label}
                  </dt>
                  <dd className="mt-1">{detail.value}</dd>
                </div>
              ))}
              <div>
                <dt className="text-xs font-bold tracking-[0.14em] text-brass-deep uppercase">Phone</dt>
                <dd className="mt-1">
                  <a href={site.phoneHref} className="font-semibold underline underline-offset-4">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-[0.14em] text-brass-deep uppercase">Email</dt>
                <dd className="mt-1 break-all">
                  <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-4">
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border-4 border-white shadow-xl shadow-black/10">
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
