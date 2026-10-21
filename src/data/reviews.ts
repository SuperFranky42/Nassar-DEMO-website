export type Review = {
  id: string;
  name: string;
  project: string;
  category: string;
  neighborhood: string;
  rating: number;
  quote: string;
};

export const reviewThemes = [
  {
    title: "One person to call",
    text: "Homeowners mention the project lead by name. Questions go to the same person from the visit to the walkthrough.",
  },
  {
    title: "The quote holds",
    text: "The written scope is what people compare to the invoice. Changes are raised before the work shifts.",
  },
  {
    title: "The house stays livable",
    text: "Dust walls, a daily cleanup, and a plan for the rooms still in use show up in almost every note.",
  },
];

export const reviews: Review[] = [
  {
    id: "mara-ellison",
    name: "Mara Ellison",
    project: "Hale Street Kitchen",
    category: "Kitchen",
    neighborhood: "Hale Street",
    rating: 5,
    quote:
      "They wrote the scope in plain language. Week four looked like the page we signed, including the part where we kept cooking in the dining room.",
  },
  {
    id: "jonah-park",
    name: "Jonah Park",
    project: "Clerestory Bath",
    category: "Bathroom",
    neighborhood: "Clerestory Court",
    rating: 5,
    quote:
      "One person answered the phone the whole time. That mattered more than the tile, and the tile is the part guests notice.",
  },
  {
    id: "priya-shah",
    name: "Priya Shah",
    project: "Linden Whole Home",
    category: "Whole home",
    neighborhood: "Linden Avenue",
    rating: 5,
    quote:
      "We lived upstairs for sixteen weeks. The crew protected the rooms we were still using and told us each Sunday what the next week would touch.",
  },
  {
    id: "helen-ortiz",
    name: "Helen Ortiz",
    project: "Maple Run Floors",
    category: "Flooring",
    neighborhood: "Maple Run",
    rating: 4,
    quote:
      "They finished when they said they would. I wish the stain sample had been larger, but the patch in the hall disappeared once the furniture was back.",
  },
  {
    id: "chris-adeyemi",
    name: "Chris Adeyemi",
    project: "North Room Color",
    category: "Painting",
    neighborhood: "North End",
    rating: 5,
    quote:
      "The color advice was practical. They put samples on the dark wall and the bright wall and let us look for three evenings before anyone opened a can.",
  },
  {
    id: "lang-family",
    name: "The Lang family",
    project: "West Light Addition",
    category: "Addition",
    neighborhood: "West Ridge",
    rating: 5,
    quote:
      "The new room feels like it was always part of the house. Guests look for the seam and cannot find it, which was the whole point.",
  },
];

export function reviewAverage() {
  return reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
}
