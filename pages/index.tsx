import { Layout } from "../components/ui/Layout";
import { Hero } from "../components/ui/Hero";
import type { Project, Skill } from "../types";
import { Skills } from '@/components/ui/Skills';
import { LoadingProvider, withLoadingGuard } from '@/components/LoadingProvider';
import { About } from "@/components/ui/About";

// You can replace these with your actual data
const projects: Project[] = [
  {
    title: "Portforlio website",
    description: "Portforlio website",
    technologies: ["React", "TypeScript", "Node.js", "TailwindCSS"],
    githubUrl: "https://github.com/jgangi7/portolio",
    liveUrl: "https://github.com/jgangi7/portfolio",
  },
  // Add more projects here
];

const skills: Skill[] = [
  // Languages
  {
    name: "TypeScript",
    category: "languages",
    icon: "📘",
  },
  {
    name: "JavaScript",
    category: "languages",
    icon: "📜",
  },
  {
    name: "C#",
    category: "languages",
    icon: "🔷",
  },
  {
    name: "SQL",
    category: "languages",
    icon: "📊",
  },
  {
    name: "HTML",
    category: "languages",
    icon: "🌐",
  },
  {
    name: "CSS",
    category: "languages",
    icon: "🎨",
  },

  // Frontend
  {
    name: "React",
    category: "frontend",
    icon: "⚛️",
  },
  {
    name: "AngularJS",
    category: "frontend",
    icon: "🅰️",
  },
  {
    name: "Redux",
    category: "frontend",
    icon: "🔄",
  },
  {
    name: "RxJS",
    category: "frontend",
    icon: "🔁",
  },
  {
    name: "TailwindCSS",
    category: "frontend",
    icon: "🌊",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: "🟢",
  },
  {
    name: ".NET",
    category: "backend",
    icon: "🔷",
  },
  {
    name: "Express",
    category: "backend",
    icon: "🚂",
  },
  {
    name: "REST APIs",
    category: "backend",
    icon: "🔌",
  },

  // Databases
  {
    name: "PostgreSQL",
    category: "databases",
    icon: "🐘",
  },
  {
    name: "MongoDB",
    category: "databases",
    icon: "🍃",
  },
  {
    name: "SQL Server",
    category: "databases",
    icon: "💾",
  },
  {
    name: "Azure",
    category: "databases",
    icon: "☁️",
  },

  // Cloud & DevOps
  {
    name: "AWS",
    category: "cloud",
    icon: "☁️",
  },
  {
    name: "Docker",
    category: "cloud",
    icon: "🐳",
  },
  {
    name: "Jenkins",
    category: "cloud",
    icon: "👷",
  },
  {
    name: "Redis",
    category: "cloud",
    icon: "📦",
  },
  {
    name: "Datadog",
    category: "cloud",
    icon: "🐕",
  },

  // Testing & Tools
  {
    name: "Cypress.io",
    category: "testing",
    icon: "🔍",
  },
  {
    name: "Jest",
    category: "testing",
    icon: "🃏",
  },
  {
    name: "Git",
    category: "testing",
    icon: "📚",
  },
  {
    name: "TFS",
    category: "testing",
    icon: "🔧",
  },
];

const socialLinks = {
  github: "https://github.com/jgangi7",
  linkedin: "https://linkedin.com/in/james-gangi",
  email: "gangijames18@gmail.com",
};

// Wrap sections with loading guard and staggered delays
const GuardedSkills = withLoadingGuard(Skills, 500); // 0.5s delay after Hero
const GuardedAbout = withLoadingGuard(About, 700);   // 0.7s delay after Hero

export default function Home() {
  return (
    <LoadingProvider>
      <Layout>
        <Hero />
        <GuardedSkills />
        <GuardedAbout />
      </Layout>
    </LoadingProvider>
  );
}
