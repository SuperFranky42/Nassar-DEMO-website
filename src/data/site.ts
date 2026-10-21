import leadCarpenter from "../../assets/crew/2.jpg";
import finishCrew from "../../assets/crew/3.jpg";
import projectLead from "../../assets/crew/project_lead.jpg";

export const serviceAreas = [
  { group: "Cities", name: "Broken Arrow, OK" },
  { group: "Cities", name: "Shawnee, OK" },
  { group: "Cities", name: "Tahlequah, OK" },
  { group: "Counties", name: "Tulsa County, OK" },
  { group: "Counties", name: "Muskogee County, OK" },
  { group: "Counties", name: "Oklahoma County, OK" },
] as const;

export const site = {
  name: "Nassar",
  legalName: "Nassar Renovation",
  tagline: "Renovation, handled with care",
  phoneDisplay: "+1 918-990-3807",
  phoneHref: "tel:+19189903807",
  email: "nassarconstructionllc@gmail.com",
  address: "6220 Kingston Rd, Oklahoma City, OK, United States, 73122",
  serviceArea:
    "Broken Arrow, Shawnee, Tahlequah, and Tulsa, Muskogee, and Oklahoma counties",
  hours: "Monday to Saturday, 9:00–5:00. Sunday closed",
  license: "OK #44190",
  established: "2018",
};

export const nav = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Our Work" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
];

export const trust = [
  {
    title: "Quality craftsmanship",
    text: "Cabinets sit flush, tile lines stay true, and paint is checked in daylight before we call a room done.",
  },
  {
    title: "Modern design solutions",
    text: "Layout, storage, and finishes are chosen for how you use the room, then written into the quote before we build.",
  },
  {
    title: "Experienced professionals",
    text: `A project lead and a finish crew who have done this work since ${site.established}. The same people stay from the first visit through the walkthrough.`,
  },
  {
    title: "On-time and reliable service",
    text: "The start date and the milestones are set with the scope. If a day has to move, you hear it from us before it does.",
  },
];

export const steps = [
  {
    title: "Plan",
    text: "We walk the house, learn how you use the rooms, and set the scope before any design starts.",
  },
  {
    title: "Design",
    text: "Layout, materials, and finishes are chosen with you, then written into the quote.",
  },
  {
    title: "Build",
    text: "Construction stays with one project lead. You hear about a change before the work changes.",
  },
  {
    title: "Deliver",
    text: "We walk the finished rooms with you, close the punch list, and leave the site clean.",
  },
];

export const roles = [
  {
    title: "Project lead",
    text: "Your contact from the first visit through the final walkthrough. One person owns the schedule and the answers.",
    image: projectLead,
  },
  {
    title: "Lead carpenter",
    text: "Runs the site day to day, protects the rooms you are still using, and keeps the work in the order we promised.",
    image: leadCarpenter,
  },
  {
    title: "Finish crew",
    text: "Cabinets, tile, paint, and floors. The people who make the last stretch look like it was planned.",
    image: finishCrew,
  },
];

export const budgetOptions = [
  "Under $15,000",
  "$15,000–$40,000",
  "$40,000–$80,000",
  "$80,000 and up",
];

export const timelineOptions = [
  "As soon as you can start",
  "In 1–3 months",
  "In 3–6 months",
  "Just exploring",
];
