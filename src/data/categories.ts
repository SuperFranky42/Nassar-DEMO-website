export const categories = [
  { id: "kitchen", label: "Kitchen" },
  { id: "bathroom", label: "Bathroom" },
  { id: "whole-home", label: "Whole home" },
  { id: "flooring", label: "Flooring" },
  { id: "painting", label: "Painting" },
  { id: "addition", label: "Additions" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export function isCategory(value: string | null): value is CategoryId {
  return categories.some((category) => category.id === value);
}

export function categoryLabel(id: string) {
  const match = categories.find((category) => category.id === id);
  return match ? match.label : id;
}
