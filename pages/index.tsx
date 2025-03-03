import { Layout } from '../components/ui/Layout';
import { Hero } from '../components/sections/Hero';
import { Projects } from '../components/sections/Projects';
import { Skills } from '../components/sections/Skills';
import { Contact } from '../components/sections/Contact';
import type { Project, Skill } from '../types';

// You can replace these with your actual data
// const projects: Project[] = [
//   {
//     title: "Project 1",
//     description: "Description of project 1",
//     technologies: ["React", "TypeScript", "Node.js"],
//     githubUrl: "https://github.com/yourusername/project1",
//     liveUrl: "https://project1.com"
//   },
//   // Add more projects here
// ];

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
  linkedin: "https://linkedin.com/in/jaames-gangi",
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
      {/* <Projects projects={projects} /> */}
      <Skills skills={skills} />
      <Contact email={socialLinks.email} />
    </Layout>
  );
} 