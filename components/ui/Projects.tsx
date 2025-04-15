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
  category?: string;
}

const projects: Project[] = [
  {
    titleKey: "top-5-movies.title",
    descriptionKey: "top-5-movies.description",
    technologies: [
      { nameKey: "technologies.react", icon: <FaReact /> },
      { nameKey: "technologies.typescript", icon: <SiTypescript /> },
      { nameKey: "technologies.dotnet", icon: <SiDotnet /> },
      { nameKey: "technologies.nodejs", icon: <FaNodeJs /> }
    ],
    githubUrl: "https://github.com/jgangi7/movie-top-5",
  },
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
        <h2 className="text-4xl text-gray-900 dark:text-white mb-12 text-center">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.titleKey}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.01,
                y: -5,
                transition: { 
                  duration: 0.2,
                  ease: "easeOut"
                }
              }}
              whileTap={{ scale: 0.99 }}
              className="relative bg-white dark:bg-[#1C1C1C] rounded-lg overflow-hidden transition-all duration-300 
                hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] 
                hover:shadow-black/10 dark:hover:shadow-white/10 border border-gray-100 dark:border-transparent"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image container - left side */}
                <div className="md:w-1/2 h-[300px] md:h-[400px] relative overflow-hidden bg-gray-200 dark:bg-[#2C2C2C]">
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={t(project.titleKey)} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-500">
                      Image coming soon
                    </div>
                  )}
                </div>

                {/* Content container - right side */}
                <div className="md:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm mb-2 font-medium">
                      {String(index + 1).padStart(2, '0')} | {project.category || 'PROJECT'}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
                      {t(project.titleKey)}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400 mb-6 text-sm md:text-base leading-relaxed">
                      {t(project.descriptionKey)}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech.nameKey}
                          className="px-3 py-1 bg-gray-100 dark:bg-[#2C2C2C] text-gray-700 dark:text-gray-300 rounded-full text-sm flex items-center gap-2 border border-gray-200 dark:border-transparent"
                        >
                          <span className="text-base">{tech.icon}</span>
                          {t(tech.nameKey)}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-6">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
                        aria-label={t('githubLink')}
                      >
                        <FaGithub className="text-2xl" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
                        aria-label={t('liveLink')}
                      >
                        <FaExternalLinkAlt className="text-2xl" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 