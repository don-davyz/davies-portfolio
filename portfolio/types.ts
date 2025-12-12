export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}