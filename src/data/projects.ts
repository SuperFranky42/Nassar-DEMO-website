import type { CategoryId } from "./categories.ts";
import { photo } from "./photos.ts";
import lindenAfter from "../../assets/home_page_banner.jpg";

export type Project = {
  slug: string;
  title: string;
  category: CategoryId;
  location: string;
  year: string;
  duration: string;
  summary: string;
  story: string;
  scope: string[];
  featured: boolean;
  cover: string;
  gallery: string[];
  before?: string;
  after?: string;
};

export const projects: Project[] = [
  {
    slug: "hale-kitchen",
    title: "Hale Street Kitchen",
    category: "kitchen",
    location: "Hale Street",
    year: "2025",
    duration: "7 weeks",
    summary:
      "A dark galley opened to the dining room, with a pantry added and the original oak floor repaired.",
    story:
      "The Hale kitchen had one window and a run of cabinets that blocked the dining room. We opened that wall, added a pantry in the old closet, and kept the oak floor, which we repaired board by board instead of covering it. The family cooked on a temporary station in the dining room for the middle three weeks.",
    scope: [
      "Removed the wall between kitchen and dining",
      "Paint-grade cabinets and a stone counter",
      "New lighting over the sink and the table",
      "Oak floor repaired and refinished",
    ],
    featured: true,
    cover: photo("1600489000022-c2086d79f9d4"),
    before: photo("1484154218962-a197022b5858"),
    after: photo("1600489000022-c2086d79f9d4"),
    gallery: [
      photo("1600585152220-90363fe7e115"),
      photo("1556909114-f6e7ad7d3136"),
    ],
  },
  {
    slug: "clerestory-bath",
    title: "Clerestory Bath",
    category: "bathroom",
    location: "Clerestory Court",
    year: "2025",
    duration: "5 weeks",
    summary:
      "A failed shower pan rebuilt, with a high window for light and the same footprint so the hall stayed intact.",
    story:
      "The shower pan had failed and the fan never really moved air. We rebuilt the wet area, raised a high window so the room gets light without losing privacy, and kept the footprint. The hallway closet stayed where it was. Waterproofing was photographed before the tile went on, and those photos went into the closeout notes.",
    scope: [
      "New shower pan and waterproofing",
      "Full-height tile and a recessed niche",
      "Vanity, faucet, and a quiet fan",
      "High window for daylight",
    ],
    featured: true,
    cover: photo("1600566753190-17f0baa2a6c3"),
    before: photo("1584622650111-993a426fbf0a"),
    after: photo("1600566753190-17f0baa2a6c3"),
    gallery: [
      photo("1620626011761-996317b8d101"),
      photo("1600566753086-00f18fb6b3ea"),
    ],
  },
  {
    slug: "linden-whole-home",
    title: "Linden Whole Home",
    category: "whole-home",
    location: "Linden Avenue",
    year: "2025",
    duration: "16 weeks",
    summary:
      "Three rooms and a stair hall, lived in the whole time, finished as one continuous ground floor.",
    story:
      "The Linden house needed the kitchen, the living room, and the stair hall to feel like one floor. The family stayed in the bedrooms. We built a dust wall at the stair, finished the private rooms first, then opened the main floor. The same project lead walked the house every afternoon at four.",
    scope: [
      "Kitchen, living room, and stair hall",
      "Dust wall so the bedrooms stayed in use",
      "Continuous floor through the ground level",
      "New lighting and paint in one palette",
    ],
    featured: true,
    cover: lindenAfter,
    before: photo("1560185007-cde436f6a4d0"),
    after: lindenAfter,
    gallery: [
      photo("1618221195710-dd6b41faaea6"),
      photo("1586023492125-27b2c045efd7"),
    ],
  },
  {
    slug: "maple-run-floors",
    title: "Maple Run Floors",
    category: "flooring",
    location: "Maple Run",
    year: "2024",
    duration: "2 weeks",
    summary:
      "Cupped maple from an old leak, patched and refinished so the repair does not announce itself.",
    story:
      "A slow dishwasher leak had cupped a section of maple in the kitchen and the first boards of the hall. We replaced the damaged field, sanded the rest of the main floor, and matched the stain in daylight. Furniture came back the morning after the finish had cured.",
    scope: [
      "Removed the cupped boards",
      "Subfloor dried and checked",
      "New maple woven into the old field",
      "Full sand and a matched stain",
    ],
    featured: false,
    cover: photo("1615873968403-89e068629265"),
    gallery: [
      photo("1600121848594-d8644e57abab"),
      photo("1616486338812-3dadae4b4ace"),
    ],
  },
  {
    slug: "north-room-color",
    title: "North Room Color",
    category: "painting",
    location: "North End",
    year: "2026",
    duration: "3 weeks",
    summary:
      "A full interior repaint after years of white, with colors tested in the light of each room.",
    story:
      "The house had been landlord white for a decade. We brushed samples on the north wall and the south wall of the same rooms, then painted walls, trim, and the stair, including the parts you only notice at noon. The family picked the final set on a cloudy day so the colors would still work in winter.",
    scope: [
      "Samples tested on two walls in each main room",
      "Prep, patch, and caulk before any finish coat",
      "Walls, ceilings, trim, and the stair",
      "A daylight walkthrough at the end",
    ],
    featured: false,
    cover: photo("1616594039964-ae9021a400a0"),
    gallery: [
      photo("1505691938895-1758d7feb511"),
      photo("1615874959474-d609969a20ed"),
    ],
  },
  {
    slug: "west-light-addition",
    title: "West Light Addition",
    category: "addition",
    location: "West Ridge",
    year: "2024",
    duration: "22 weeks",
    summary:
      "A family room off the kitchen, matched to the existing roof pitch and brick.",
    story:
      "The ask was a room for weeknights that did not feel like a box on the side of the house. We matched the roof pitch and the brick, aligned the floor with the kitchen, and used the same window proportion as the front elevation. The family used the old dining room until the addition was weathered in.",
    scope: [
      "Foundation, frame, and a matched roof",
      "Brick and trim aligned with the existing house",
      "Floor set level with the kitchen",
      "Interior paint and lighting in the house palette",
    ],
    featured: false,
    cover: photo("1600585154340-be6161a56a0c"),
    gallery: [
      photo("1600596542815-ffad4c1539a9"),
      photo("1512917774080-9991f1c4c750"),
    ],
  },
  {
    slug: "sunday-pantry-kitchen",
    title: "Sunday Pantry Kitchen",
    category: "kitchen",
    location: "Sunday Street",
    year: "2026",
    duration: "4 weeks",
    summary:
      "The layout already worked. New cabinets, a stone top, and light over the sink did the rest.",
    story:
      "This kitchen did not need a new footprint. The cabinets were failing at the hinges and the counter had cracked at the sink. We replaced the boxes, kept the appliance locations, and added a task light where the evening prep actually happens. The family stayed in the house and used a hallway table for ten days of demo.",
    scope: [
      "New cabinets in the existing layout",
      "Stone counter and a replaced sink",
      "Task lighting over the prep run",
      "Backsplash carried to the window",
    ],
    featured: false,
    cover: photo("1556909114-f6e7ad7d3136"),
    gallery: [
      photo("1600585152220-90363fe7e115"),
      photo("1600489000022-c2086d79f9d4"),
    ],
  },
  {
    slug: "east-hall-powder",
    title: "East Hall Powder Room",
    category: "bathroom",
    location: "East Hall",
    year: "2026",
    duration: "3 weeks",
    summary:
      "A cramped powder room under the stairs, retiled floor to ceiling so the room reads taller.",
    story:
      "The powder room sat under the stairs with a door that opened into the sink. We reversed the swing, built a short vanity with a drawer, and ran one tile from the floor to the ceiling. The sloped ceiling stayed. The room feels taller because the eye has one continuous surface to follow.",
    scope: [
      "Door swing reversed",
      "Short vanity with storage",
      "Tile from floor to the sloped ceiling",
      "New light and a quiet fan",
    ],
    featured: false,
    cover: photo("1600566752355-35792bedcfea"),
    gallery: [
      photo("1552321554-5fefe8c9ef14"),
      photo("1620626011761-996317b8d101"),
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function relatedProjects(slug: string) {
  const current = getProject(slug);
  if (!current) return [];
  const same = projects.filter(
    (project) =>
      project.slug !== slug && project.category === current.category,
  );
  const others = projects.filter(
    (project) =>
      project.slug !== slug && project.category !== current.category,
  );
  return [...same, ...others].slice(0, 2);
}
