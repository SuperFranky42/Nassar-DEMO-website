import type { IconName } from "../components/Icon.tsx";
import { photo } from "./photos.ts";

export type Issue = {
  id: string;
  label: string;
  icon: IconName;
  x: number;
  y: number;
  image: string;
  cause: string;
  fix: string;
  serviceSlug: string;
};

export const issues: Issue[] = [
  {
    id: "dated-kitchen",
    label: "Dated kitchen",
    icon: "kitchen",
    x: 22,
    y: 58,
    image: photo("1484154218962-a197022b5858", 1000),
    cause:
      "Closed-in layouts, worn cabinets, and too little light make the busiest room in the house the hardest to use.",
    fix: "Kitchen remodel",
    serviceSlug: "kitchen",
  },
  {
    id: "failing-bathroom",
    label: "Failing bathroom",
    icon: "droplet",
    x: 70,
    y: 34,
    image: photo("1584622650111-993a426fbf0a", 1000),
    cause:
      "Loose tile, soft subfloor, and mildew are signs water is getting behind the surface. Covering it only hides the damage.",
    fix: "Bathroom remodel with waterproofing",
    serviceSlug: "bathroom",
  },
  {
    id: "worn-floors",
    label: "Worn floors & finishes",
    icon: "brush",
    x: 48,
    y: 82,
    image: photo("1615873968403-89e068629265", 1000),
    cause:
      "Scratched floors, tired paint, and mismatched trim make a sound house look older than it is.",
    fix: "Interior & exterior improvements",
    serviceSlug: "interior-exterior",
  },
  {
    id: "need-space",
    label: "Need more space",
    icon: "expand",
    x: 86,
    y: 64,
    image: photo("1600585154340-be6161a56a0c", 1000),
    cause:
      "A growing family or a home office can outgrow the floor plan. An addition can cost less than moving.",
    fix: "Residential construction & additions",
    serviceSlug: "residential",
  },
  {
    id: "structural",
    label: "Sagging or cracked structure",
    icon: "alert",
    x: 40,
    y: 22,
    image: photo("1589939705384-5185137a7f0f", 1000),
    cause:
      "Sloping floors, sticking doors, and cracks above openings often point to framing or headers that need attention.",
    fix: "Framing & structural work",
    serviceSlug: "framing",
  },
  {
    id: "whole-home",
    label: "Whole house feels dated",
    icon: "home",
    x: 58,
    y: 52,
    image: photo("1560185007-cde436f6a4d0", 1000),
    cause:
      "When several rooms need work, doing them one at a time costs more and keeps the house torn up for longer.",
    fix: "Whole-home renovation",
    serviceSlug: "home-renovations",
  },
];
