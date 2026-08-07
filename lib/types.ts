export type ProjectFilter = "all" | "websites" | "applications" | "ai" | "other";

export interface Project {
  slug: string;
  title: string;
  category: string;
  filterCategory: Exclude<ProjectFilter, "all">;
  description: string;
  longDescription: string;
  challenge: string;
  approach: string;
  experience: string;
  build: string;
  result: string;
  keyFeatures: string[];
  technologies: string[];
  image: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  accentColor: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}
