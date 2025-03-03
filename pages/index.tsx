import { Layout } from '../components/ui/Layout';
import { Hero } from '../components/sections/Hero';
import { Projects } from '../components/sections/Projects';
import { Skills } from '../components/sections/Skills';
import { Contact } from '../components/sections/Contact';
import type { Project, Skill } from '../types';

// You can replace these with your actual data
const projects: Project[] = [
  {
    title: "Portforlio website",
    description: "Portforlio website",
    technologies: ["React", "TypeScript", "Node.js", "TailwindCSS"],
    githubUrl: "https://github.com/jgangi7/portolio",
    liveUrl: "https://github.com/jgangi7/portfolio"
  },
  // Add more projects here
];

const skills: Skill[] = [
  {
    name: "React",
    category: "frontend",
    icon: "⚛️"
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "📘"
  },
  {
    name: "Node.js",
    category: "backend",
    icon: "🟢"
  },
  // Add more skills here
];

const socialLinks = {
  github: "https://github.com/jgangi7",
  linkedin: "https://linkedin.com/in/james-gangi",
  email: "gangijames18@gmail.com"
};

export default function Home() {
  return (
    <Layout>
      <Hero
        name="James Gangi"
        tagline="Software Developer passionate about creating impactful solutions"
        socialLinks={socialLinks}
      />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact email={socialLinks.email} />
    </Layout>
  );
} 