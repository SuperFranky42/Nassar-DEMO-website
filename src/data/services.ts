import type { IconName } from "../components/Icon.tsx";
import type { CategoryId } from "./categories.ts";
import { photo } from "./photos.ts";

export type Service = {
  slug: string;
  name: string;
  summary: string;
  includes: string[];
  image: string;
  icon: IconName;
  workCategory?: CategoryId;
};

export const services: Service[] = [
  {
    slug: "residential",
    name: "Residential Construction",
    summary:
      "New homes and additions, built as one scope. Structure, envelope, and the rooms you will live in are written down before we start.",
    includes: [
      "How the new work meets the lot, or the house already there",
      "Foundation, framing, roof, windows, and insulation",
      "Interior finishes included in the same written scope",
      "A walkthrough against the plans before we hand over the keys",
    ],
    image: photo("1600585154340-be6161a56a0c"),
    icon: "home",
  },
  {
    slug: "commercial",
    name: "Commercial Construction",
    summary:
      "Offices, tenant spaces, and small commercial buildings. The scope, the schedule, and the inspections are set before the first day on site.",
    includes: [
      "A written scope matched to how the space will be used",
      "Structure, build-out, and the code items called out up front",
      "Trades and inspections kept to the schedule we agreed",
      "A finished space you can open against the drawings",
    ],
    image: photo("1541888946425-d81bb19240f5"),
    icon: "building",
  },
  {
    slug: "bathroom",
    name: "Bathroom Remodeling",
    summary:
      "Wet rooms rebuilt to stay dry. We handle waterproofing, ventilation, and the finishes you see every morning.",
    includes: [
      "Layout and a waterproof shower or tub",
      "Tile, vanity, and a fixture package",
      "Fan, lighting, and the electrical that supports them",
      "A dry, finished room at handover",
    ],
    image: photo("1600566753190-17f0baa2a6c3"),
    icon: "bath",
    workCategory: "bathroom",
  },
  {
    slug: "kitchen",
    name: "Kitchen Remodeling",
    summary:
      "A new layout, cabinets, and finishes for a kitchen you actually cook in. We sequence the work so the rest of the house stays usable.",
    includes: [
      "Layout, cabinet plan, and lighting",
      "Counters, backsplash, and fixtures",
      "Demo, plus plumbing and electrical coordination",
      "Install and a punch list closed with you in the room",
    ],
    image: photo("1600489000022-c2086d79f9d4"),
    icon: "kitchen",
    workCategory: "kitchen",
  },
  {
    slug: "framing",
    name: "Framing & Structural Work",
    summary:
      "Walls, floors, and roofs the rest of the job stands on. We frame to the plan, and we say so if the existing structure needs a change.",
    includes: [
      "Layout checked against the drawings before lumber goes up",
      "Walls, floors, roof framing, and headers",
      "A conversation before we change anything found in the existing structure",
      "The frame left square and ready for the next trade",
    ],
    image: photo("1589939705384-5185137a7f0f"),
    icon: "frame",
  },
  {
    slug: "home-renovations",
    name: "Home Renovations",
    summary:
      "Several rooms, one plan. We sequence the job so you can keep living in the house when the scope allows it.",
    includes: [
      "A room-by-room written scope",
      "An order of work that protects the rooms you still use",
      "One project lead across every trade",
      "A final walkthrough against the written scope",
    ],
    image: photo("1600210492486-724fe5c67fb0"),
    icon: "layers",
    workCategory: "whole-home",
  },
  {
    slug: "interior-exterior",
    name: "Interior & Exterior Improvements",
    summary:
      "The work that changes how a house looks and wears: floors, paint, siding, and the details between rooms.",
    includes: [
      "Interior floors, paint, trim, and ceilings",
      "Exterior siding, paint, and the trim at doors and windows",
      "Prep checked before the finish material goes on",
      "A walkthrough in daylight before we call it done",
    ],
    image: photo("1600596542815-ffad4c1539a9"),
    icon: "brush",
  },
];

const projectCategoryService: Record<CategoryId, string> = {
  kitchen: "kitchen",
  bathroom: "bathroom",
  "whole-home": "home-renovations",
  flooring: "interior-exterior",
  painting: "interior-exterior",
  addition: "residential",
};

export function serviceForProject(category: CategoryId) {
  const slug = projectCategoryService[category];
  return services.find((service) => service.slug === slug);
}

export const projectTypeOptions = [
  ...services.map((service) => service.name),
  "Not sure yet",
];
