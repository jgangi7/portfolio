import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaAngular, FaPython, FaBrain, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { SiTypescript, SiDotnet, SiJavascript } from 'react-icons/si';
import Link from 'next/link';
import { useState } from 'react';

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
  year: number;
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
    pageUrl: "/podcastProject",
    year: 2025
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
    categoryKey: "categories.webApp",
    year: 2024
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
    categoryKey: "categories.browserExtension",
    year: 2024
  },
  {
    titleKey: "golang-app.title",
    descriptionKey: "golang-app.description",
    technologies: [
      { nameKey: "technologies.golang" }
    ],
    imageUrl: "/images/ausitn-map.png",
    githubUrl: "https://github.com/jgangi7/go-austin-map",
    categoryKey: "categories.goApplication",
    year: 2023
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
    categoryKey: "categories.webApp",
    year: 2023
  }
];

export default function Projects() {
  const t = useTranslations('projects');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const selectedProject = projects[selectedProjectIndex];

  return (
    <section id="projects" className="py-40 bg-white dark:bg-[#0a192f]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="flex gap-12">
          {/* Left sidebar - Project selector */}
          <div className="w-40 space-y-12">
            {projects.map((project, index) => (
              <button
                key={project.titleKey}
                onClick={() => {
                  setSelectedProjectIndex(index);
                  if (project.pageUrl) {
                    window.location.href = project.pageUrl;
                  }
                }}
                onMouseEnter={() => setSelectedProjectIndex(index)}
                className={`block text-sm transition-colors ${
                  selectedProjectIndex === index
                    ? 'text-gray-900 dark:text-white font-semibold'
                    : 'text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                } ${project.pageUrl ? 'cursor-pointer hover:underline' : 'cursor-default'}`}
              >
                <span className="font-bold text-[#1e40af] dark:text-[#64ffdb]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {' '}{t(project.titleKey)}
              </button>
            ))}
          </div>

          {/* Right side - Project description */}
          <div className="flex-1">
              <div className="max-w-6xl flex gap-12">
                {/* Left - Text content */}
                <div className="flex-1">
                  <button
                    onClick={() => {
                      if (selectedProject.pageUrl) {
                        window.location.href = selectedProject.pageUrl as string;
                      }
                    }}
                    className={`block mb-6 ${
                      selectedProject.pageUrl ? 'hover:opacity-75 transition-opacity cursor-pointer' : 'cursor-default'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {t(selectedProject.titleKey)}
                      </h3>
                      {selectedProject.pageUrl && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = selectedProject.pageUrl as string;
                          }}
                          className="p-2 transition-opacity hover:opacity-75 text-[#1e40af] dark:text-[#64ffdb]"
                        >
                          <FaArrowRight className="text-2xl" />
                        </button>
                      )}
                    </div>
                  </button>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
                    {t(selectedProject.descriptionKey)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech.nameKey}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm flex items-center gap-2 border border-gray-200 dark:border-gray-700"
                      >
                        <span className="text-base">{tech.icon}</span>
                        {t(tech.nameKey)}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4" >
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                        aria-label="GitHub"
                        style={{display: 'flex', alignItems: 'center'}}
                      >
                        <FaGithub className="text-2xl" /> <FaArrowLeft className="text-sm inline-block ml-1 transition-opacity hover:opacity-75 text-[#1e40af] dark:text-[#64ffdb]" />
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                        aria-label="Live site"
                      >
                        <FaExternalLinkAlt className="text-2xl" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right - Project image */}
                {selectedProject.imageUrl && (
                  <div 
                    className="flex-shrink-0 w-64 h-48 cursor-pointer"
                    onClick={() => setImageModalOpen(true)}
                  >
                    <img
                      src={selectedProject.imageUrl}
                      alt={t(selectedProject.titleKey)}
                      className="w-full h-full object-contain rounded-lg hover:opacity-80 transition-opacity"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

        {/* Image Modal */}
        {imageModalOpen && selectedProject.imageUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setImageModalOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-lg overflow-hidden"
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src={selectedProject.imageUrl}
                  alt={t(selectedProject.titleKey)}
                  className="w-full h-full object-cover object-top"
                  style={{ maxHeight: '125%' }}
                />
              </div>
              <button
                onClick={() => setImageModalOpen(false)}
                className="absolute top-4 right-4 p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
} 