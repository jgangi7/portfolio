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
  icon?: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
} 