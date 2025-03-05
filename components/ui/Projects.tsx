import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaAngular } from 'react-icons/fa';
import { SiTypescript, SiVite, SiMui, SiSharp, SiDotnet, SiSwagger, SiHiveBlockchain } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

interface Project {
  title: string;
  description: string;
  technologies: {
    name: string;
    icon: React.ReactNode;
  }[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Stock Portfolio Analytics",
    description: "A React TypeScript application for tracking and visualizing stock portfolio performance. Features real-time stock price updates, portfolio allocation visualization, and gain/loss tracking.",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Material-UI", icon: <SiMui /> },
      { name: "Recharts", icon: <FaDatabase /> },
      { name: "Alpha Vantage API", icon: <TbApi /> }
    ],
    githubUrl: "https://github.com/jgangi7/portfolio-visualizer",
  },
  {
    title: "C# Blockchain API",
    description: "A simple blockchain implementation in C# using ASP.NET Core Web API. Features block creation with proof-of-work, chain validation, and RESTful endpoints with Swagger documentation.",
    technologies: [
      { name: "C#", icon: <SiSharp /> },
      { name: "ASP.NET Core", icon: <SiDotnet /> },
      { name: "REST API", icon: <TbApi /> },
      { name: "Swagger", icon: <SiSwagger /> },
      { name: "Blockchain", icon: <SiHiveBlockchain /> }
    ],
    githubUrl: "https://github.com/jgangi7/blockchain-c-sharp",
  },
  {
    title: "Angular Chat Bot",
    description: "An Angular-based chatbot that helps screen for memory loss through interactive and adaptive conversations.",
    technologies: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Angular", icon: <FaAngular /> },
      { name: "NodeJs", icon: <FaNodeJs /> }
    ],
    githubUrl: "https://github.com/jgangi7/angular-health-bot",
  }
];

export default function Projects() {
  const t = useTranslations('projects');

  return (
    <section id="projects" className="py-40 bg-white dark:bg-[#0a192f]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              {project.imageUrl && (
                <div className="h-48 overflow-hidden">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm flex items-center gap-2"
                    >
                      <span className="text-base">{tech.icon}</span>
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 