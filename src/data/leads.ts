export const leadStatuses = [
  { id: "new", label: "New" },
  { id: "contacted", label: "Contacted" },
  { id: "site-visit", label: "Site visit" },
  { id: "quoted", label: "Quoted" },
  { id: "won", label: "Won" },
] as const;

export type LeadStatus = (typeof leadStatuses)[number]["id"];

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  area: string;
  budget: string;
  timeline: string;
  message: string;
  status: LeadStatus;
  createdAt: string;
  source: "sample" | "quote";
};

export type LeadInput = Omit<Lead, "id" | "status" | "createdAt" | "source">;

export const seedLeads: Lead[] = [
  {
    id: "lead-paula",
    name: "Paula Trent",
    email: "paula.trent@example.com",
    phone: "(555) 010-2284",
    projectType: "Bathroom renovation",
    area: "Broken Arrow, OK",
    budget: "$15,000–$40,000",
    timeline: "As soon as you can start",
    message:
      "The main bath fan failed and the grout is soft along the tub. We would like a visit this month if the schedule allows.",
    status: "new",
    createdAt: "2026-10-09T15:20:00.000Z",
    source: "sample",
  },
  {
    id: "lead-ben",
    name: "Ben Carter",
    email: "ben.carter@example.com",
    phone: "(555) 017-6630",
    projectType: "Bathroom renovation",
    area: "Shawnee, OK",
    budget: "Under $15,000",
    timeline: "In 1–3 months",
    message:
      "Powder room under the stairs. The door hits the sink. We want a tighter vanity and new tile, and we can stay in the house.",
    status: "new",
    createdAt: "2026-10-06T18:05:00.000Z",
    source: "sample",
  },
  {
    id: "lead-amira",
    name: "Amira Solano",
    email: "amira.solano@example.com",
    phone: "(555) 013-4418",
    projectType: "Kitchen remodeling",
    area: "Tahlequah, OK",
    budget: "$40,000–$80,000",
    timeline: "In 1–3 months",
    message:
      "The kitchen faces north and the cabinets are original. We cook every night and need a plan that lets us stay in the house.",
    status: "contacted",
    createdAt: "2026-09-28T14:10:00.000Z",
    source: "sample",
  },
  {
    id: "lead-samir",
    name: "Samir Haddad",
    email: "samir.haddad@example.com",
    phone: "(555) 016-9021",
    projectType: "Flooring and finishes",
    area: "Tulsa County, OK",
    budget: "$15,000–$40,000",
    timeline: "In 3–6 months",
    message:
      "Maple in the kitchen and hall is cupped near the dishwasher. We want the patch to match, and we can empty those rooms in November.",
    status: "contacted",
    createdAt: "2026-09-22T11:40:00.000Z",
    source: "sample",
  },
  {
    id: "lead-ibarra",
    name: "The Ibarra family",
    email: "hello@ibarra.example",
    phone: "(555) 019-7742",
    projectType: "Whole-home renovation",
    area: "Muskogee County, OK",
    budget: "$80,000 and up",
    timeline: "In 3–6 months",
    message:
      "Kitchen, living room, and the stair hall. We would live upstairs. Please include dust control in the visit notes.",
    status: "site-visit",
    createdAt: "2026-09-14T16:00:00.000Z",
    source: "sample",
  },
  {
    id: "lead-nora",
    name: "Nora Feldman",
    email: "nora.feldman@example.com",
    phone: "(555) 012-3388",
    projectType: "Painting",
    area: "Oklahoma County, OK",
    budget: "Under $15,000",
    timeline: "In 1–3 months",
    message:
      "Whole interior, including the stair. The house is white now and the north rooms feel cold. We want samples before a quote is final.",
    status: "quoted",
    createdAt: "2026-09-08T13:25:00.000Z",
    source: "sample",
  },
  {
    id: "lead-elise",
    name: "Elise Nguyen",
    email: "elise.nguyen@example.com",
    phone: "(555) 015-2209",
    projectType: "Additions",
    area: "Broken Arrow, OK",
    budget: "$80,000 and up",
    timeline: "Just exploring",
    message:
      "A family room off the kitchen, about fourteen feet. We care more about matching the brick than about finishing fast.",
    status: "quoted",
    createdAt: "2026-08-30T17:45:00.000Z",
    source: "sample",
  },
  {
    id: "lead-greg",
    name: "Greg Walsh",
    email: "greg.walsh@example.com",
    phone: "(555) 018-4410",
    projectType: "Kitchen remodeling",
    area: "Shawnee, OK",
    budget: "$40,000–$80,000",
    timeline: "As soon as you can start",
    message:
      "Cabinet replacement and a new counter. Layout can stay. We signed the scope in August and the crew starts next month.",
    status: "won",
    createdAt: "2026-08-18T12:00:00.000Z",
    source: "sample",
  },
];
