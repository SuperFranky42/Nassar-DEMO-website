import type { CategoryId } from "./categories.ts";
import { photo } from "./photos.ts";

export type Service = {
  slug: CategoryId;
  name: string;
  summary: string;
  includes: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "kitchen",
    name: "Kitchen remodeling",
    summary:
      "A new layout, cabinets, and finishes for a kitchen you actually cook in. We sequence the work so the rest of the house stays usable.",
    includes: [
      "Layout, cabinet plan, and lighting",
      "Counters, backsplash, and fixtures",
      "Demo, plus plumbing and electrical coordination",
      "Install and a punch list closed with you in the room",
    ],
    image: photo("1600489000022-c2086d79f9d4"),
  },
  {
    slug: "bathroom",
    name: "Bathroom renovation",
    summary:
      "Wet rooms rebuilt to stay dry. We handle waterproofing, ventilation, and the finishes you see every morning.",
    includes: [
      "Layout and a waterproof shower or tub",
      "Tile, vanity, and a fixture package",
      "Fan, lighting, and the electrical that supports them",
      "A dry, finished room at handover",
    ],
    image: photo("1600566753190-17f0baa2a6c3"),
  },
  {
    slug: "whole-home",
    name: "Whole-home renovation",
    summary:
      "Several rooms, one plan. We sequence the job so you can keep living in the house when the scope allows it.",
    includes: [
      "A room-by-room written scope",
      "An order of work that protects the rooms you still use",
      "One project lead across every trade",
      "A final walkthrough against the written scope",
    ],
    image: photo("1600210492486-724fe5c67fb0"),
  },
  {
    slug: "flooring",
    name: "Flooring and finishes",
    summary:
      "Floors that meet the rest of the house. We check the subfloor first, then install, sand, or tile so the transitions disappear.",
    includes: [
      "Subfloor check before any material goes down",
      "Hardwood, engineered wood, or tile",
      "Transitions, baseboards, and stair nosing",
      "A clear cure time before furniture comes back",
    ],
    image: photo("1615873968403-89e068629265"),
  },
  {
    slug: "painting",
    name: "Painting",
    summary:
      "Color chosen in the light of the actual room, then applied with the prep that makes it last past the first year.",
    includes: [
      "Color samples checked in daylight and at night",
      "Patch, sand, caulk, and prime",
      "Walls, trim, ceilings, and the stair",
      "A walkthrough while the light is still honest",
    ],
    image: photo("1616594039964-ae9021a400a0"),
  },
  {
    slug: "addition",
    name: "Additions",
    summary:
      "A new room that feels like it was always part of the house. Structure, envelope, and finishes are one scope.",
    includes: [
      "How the new room meets the old roof and walls",
      "Structure, insulation, and windows",
      "Interior finishes that match the rooms beside it",
      "Permit path written into the scope before we start",
    ],
    image: photo("1600585154340-be6161a56a0c"),
  },
];

export function serviceBySlug(slug: CategoryId) {
  return services.find((service) => service.slug === slug);
}

export const projectTypeOptions = [
  ...services.map((service) => service.name),
  "Not sure yet",
];
