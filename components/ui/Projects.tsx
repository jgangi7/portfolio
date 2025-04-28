import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaAngular, FaPython, FaBrain, FaCss3, FaHtml5, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiDotnet, SiJavascript } from 'react-icons/si';
import Link from 'next/link';


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
  categoryKey?: string;
  pageUrl?: string;
}

const projects: Project[] = [
  {
    titleKey: "podcast-visualizer.title",
    descriptionKey: "podcast-visualizer.description",
    technologies: [
      { nameKey: "technologies.python", icon: <FaPython /> },
      { nameKey: "technologies.LLM", icon: <FaBrain /> },
      { nameKey: "technologies.js", icon: <SiJavascript /> }
    ],
    imageUrl: "/images/podcast-visualizer.png",
    githubUrl: "https://github.com/jgangi7/podcast-visualizer",
    categoryKey: "categories.webApp",
    pageUrl: "/podcastProject"
  },
  {
    titleKey: "Commanders UI Redesign",
    descriptionKey: "Commanders UI Redesign Description",
    technologies: [
      { nameKey: "technologies.react", icon: <FaReact /> },
      { nameKey: "technologies.typescript", icon: <SiTypescript /> },
      { nameKey: "technologies.dotnet", icon: <SiDotnet /> },
      { nameKey: "technologies.nodejs", icon: <FaNodeJs /> },
      { nameKey: "technologies.css", icon: <FaCss3 /> },
      { nameKey: "technologies.html", icon: <FaHtml5 /> },
      { nameKey: "technologies.figma", icon: <FaFigma /> }
    ],
    imageUrl: "/images/commanders-ui.png",
    githubUrl: "https://github.com/jgangi7/commanders-ui-redesign",
    categoryKey: "categories.ui",
    pageUrl: "/commanders"
  },
  {
    titleKey: "top-5-movies.title",
    descriptionKey: "top-5-movies.description",
    technologies: [
      { nameKey: "technologies.react", icon: <FaReact /> },
      { nameKey: "technologies.typescript", icon: <SiTypescript /> },
      { nameKey: "technologies.dotnet", icon: <SiDotnet /> },
      { nameKey: "technologies.nodejs", icon: <FaNodeJs /> }
    ],
    imageUrl: "/images/top-5-movies.png",
    githubUrl: "https://github.com/jgangi7/movie-top-5",
    categoryKey: "categories.webApp"
  },
  {
    titleKey: "chrome-extension.title",
    descriptionKey: "chrome-extension.description",
    technologies: [
      { nameKey: "technologies.typescript", icon: <SiTypescript /> },
      { nameKey: "technologies.js", icon: <SiJavascript /> }
    ],
    imageUrl: "/images/chrome-extension.png",
    githubUrl: "https://github.com/jgangi7/chrome-ext-search",
    categoryKey: "categories.browserExtension"
  },
  {
    titleKey: "golang-app.title",
    descriptionKey: "golang-app.description",
    technologies: [
      { nameKey: "technologies.golang" }
    ],
    imageUrl: "/images/ausitn-map.png",
    githubUrl: "https://github.com/jgangi7/go-austin-map",
    categoryKey: "categories.goApplication"
  },
  {
    titleKey: "chatbot.title",
    descriptionKey: "chatbot.description",
    technologies: [
      { nameKey: "technologies.typescript", icon: <SiTypescript /> },
      { nameKey: "technologies.angular", icon: <FaAngular /> },
      { nameKey: "technologies.nodejs", icon: <FaNodeJs /> }
    ],
    imageUrl: "/images/chatbot.png",
    githubUrl: "https://github.com/jgangi7/angular-health-bot",
    categoryKey: "categories.webApp"
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
              {project.pageUrl ? (
                <Link href={project.pageUrl} className="block">
                  <div className="flex flex-col lg:flex-row h-full">
                    {/* Image container - left side */}
                    <div className="hidden lg:block lg:w-1/2 h-[300px] lg:h-[400px] relative overflow-hidden bg-gray-100 dark:bg-[#2C2C2C]">
                      <div className="absolute top-4 left-4 z-10 text-gray-600 dark:text-gray-400 text-sm font-medium">
                        {String(index + 1).padStart(2, '0')} | {project.categoryKey ? t(project.categoryKey) : t('categories.project')}
                      </div>
                      {project.imageUrl ? (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#1C1C1C] dark:to-[#2C2C2C]">
                          <img 
                            src={project.imageUrl} 
                            alt={t(project.titleKey)} 
                            className="w-full h-full object-contain p-4 mt-[28%]"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-500">
                          Image coming soon
                        </div>
                      )}
                    </div>

                    {/* Content container - right side */}
                    <div className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-4 lg:hidden">
                          <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                            {String(index + 1).padStart(2, '0')} | {project.categoryKey ? t(project.categoryKey) : t('categories.project')}
                          </span>
                        </div>
                        <h3 className="text-xl lg:text-3xl font-semibold text-gray-800 dark:text-white mb-3 lg:mb-4">
                          {t(project.titleKey)}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-400 mb-4 lg:mb-6 text-sm lg:text-base leading-relaxed">
                          {t(project.descriptionKey)}
                        </p>
                        <div className="flex flex-wrap gap-2 lg:gap-3 mb-4 lg:mb-6">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech.nameKey}
                              className="px-2 lg:px-3 py-1 bg-gray-100 dark:bg-[#2C2C2C] text-gray-700 dark:text-gray-300 rounded-full text-xs lg:text-sm flex items-center gap-1 lg:gap-2 border border-gray-200 dark:border-transparent"
                            >
                              <span className="text-sm lg:text-base">{tech.icon}</span>
                              {t(tech.nameKey)}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 lg:gap-6">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
                            aria-label={t('githubLink')}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGithub className="text-xl lg:text-2xl" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
                            aria-label={t('liveLink')}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaExternalLinkAlt className="text-xl lg:text-2xl" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Image container - left side */}
                  <div className="hidden lg:block lg:w-1/2 h-[300px] lg:h-[400px] relative overflow-hidden bg-gray-100 dark:bg-[#2C2C2C]">
                    <div className="absolute top-4 left-4 z-10 text-gray-600 dark:text-gray-400 text-sm font-medium">
                      {String(index + 1).padStart(2, '0')} | {project.categoryKey ? t(project.categoryKey) : t('categories.project')}
                    </div>
                    {project.imageUrl ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#1C1C1C] dark:to-[#2C2C2C]">
                        <img 
                          src={project.imageUrl} 
                          alt={t(project.titleKey)} 
                          className="w-full h-full object-contain p-4 mt-[28%]"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-500">
                        Image coming soon
                      </div>
                    )}
                  </div>

                  {/* Content container - right side */}
                  <div className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4 lg:hidden">
                        <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                          {String(index + 1).padStart(2, '0')} | {project.categoryKey ? t(project.categoryKey) : t('categories.project')}
                        </span>
                      </div>
                      <h3 className="text-xl lg:text-3xl font-semibold text-gray-800 dark:text-white mb-3 lg:mb-4">
                        {t(project.titleKey)}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-400 mb-4 lg:mb-6 text-sm lg:text-base leading-relaxed">
                        {t(project.descriptionKey)}
                      </p>
                      <div className="flex flex-wrap gap-2 lg:gap-3 mb-4 lg:mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech.nameKey}
                            className="px-2 lg:px-3 py-1 bg-gray-100 dark:bg-[#2C2C2C] text-gray-700 dark:text-gray-300 rounded-full text-xs lg:text-sm flex items-center gap-1 lg:gap-2 border border-gray-200 dark:border-transparent"
                          >
                            <span className="text-sm lg:text-base">{tech.icon}</span>
                            {t(tech.nameKey)}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 lg:gap-6">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
                          aria-label={t('githubLink')}
                        >
                          <FaGithub className="text-xl lg:text-2xl" />
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
                          <FaExternalLinkAlt className="text-xl lg:text-2xl" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 