import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS. Features dark mode, internationalization, and smooth animations.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    githubUrl: "https://github.com/jgangi7/portfolio",
    liveUrl: "https://jamesgangi.com"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce platform with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/jgangi7/ecommerce-platform",
  },
  {
    title: "Task Management System",
    description: "A collaborative task management system with real-time updates and team collaboration features.",
    technologies: ["Angular", ".NET", "SQL Server", "SignalR"],
    githubUrl: "https://github.com/jgangi7/task-manager",
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
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
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