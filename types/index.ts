export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  category: "languages" | "frontend" | "backend" | "databases" | "cloud" | "testing";
  icon: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
} 