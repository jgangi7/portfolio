import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaAngular } from 'react-icons/fa';
import { SiTypescript, SiVite, SiMui, SiSharp, SiDotnet, SiSwagger, SiHiveBlockchain, SiJavascript } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

interface Project {
  titleKey: string;
  descriptionKey: string;
  technologies: {
    nameKey: string;
    icon?: React.ReactNode;
  }[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    titleKey: "chrome-extension.title",
    descriptionKey: "chrome-extension.description",
    technologies: [
      { nameKey: "technologies.typescript", icon: <SiTypescript /> },
      { nameKey: "technologies.js", icon: <SiJavascript /> }
    ],
    githubUrl: "https://github.com/jgangi7/chrome-ext-search",
  },
  {
    titleKey: "golang-app.title",
    descriptionKey: "golang-app.description",
    technologies: [
      { nameKey: "technologies.golang" }
    ],
    githubUrl: "https://github.com/jgangi7/go-austin-map",
  },
  {
    titleKey: "portfolio.title",
    descriptionKey: "portfolio.description",
    technologies: [
      { nameKey: "technologies.react", icon: <FaReact /> },
      { nameKey: "technologies.typescript", icon: <SiTypescript /> },
      { nameKey: "technologies.vite", icon: <SiVite /> },
      { nameKey: "technologies.materialui", icon: <SiMui /> },
      { nameKey: "technologies.recharts", icon: <FaDatabase /> },
      { nameKey: "technologies.alphaVantage", icon: <TbApi /> }
    ],
    githubUrl: "https://github.com/jgangi7/portfolio-visualizer",
  },
  {
    titleKey: "blockchain.title",
    descriptionKey: "blockchain.description",
    technologies: [
      { nameKey: "technologies.csharp", icon: <SiSharp /> },
      { nameKey: "technologies.dotnet", icon: <SiDotnet /> },
      { nameKey: "technologies.restapi", icon: <TbApi /> },
      { nameKey: "technologies.swagger", icon: <SiSwagger /> },
      { nameKey: "technologies.blockchain", icon: <SiHiveBlockchain /> }
    ],
    githubUrl: "https://github.com/jgangi7/blockchain-c-sharp",
  },
  {
    titleKey: "chatbot.title",
    descriptionKey: "chatbot.description",
    technologies: [
      { nameKey: "technologies.typescript", icon: <SiTypescript /> },
      { nameKey: "technologies.angular", icon: <FaAngular /> },
      { nameKey: "technologies.nodejs", icon: <FaNodeJs /> }
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
              key={project.titleKey}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              {project.imageUrl && (
                <div className="h-48 overflow-hidden">
                  <img src={project.imageUrl} alt={t(project.titleKey)} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t(project.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t(project.descriptionKey)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech.nameKey}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm flex items-center gap-2"
                    >
                      <span className="text-base">{tech.icon}</span>
                      {t(tech.nameKey)}
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
                      aria-label={t('githubLink')}
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
                      aria-label={t('liveLink')}
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