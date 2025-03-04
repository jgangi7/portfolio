import { Layout } from "../components/ui/Layout";
import { motion } from 'framer-motion';
import type { Project, Skill } from "../types";

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

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            James Gangi
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Software Developer specializing in full-stack development
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(
              skills.reduce((acc, skill) => {
                if (!acc[skill.category]) {
                  acc[skill.category] = [];
                }
                acc[skill.category].push(skill);
                return acc;
              }, {} as Record<string, Skill[]>)
            ).map(([category, categorySkills]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {skill.icon} {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Hi there! I'm James Gangi, a passionate Software Developer with a strong foundation in full-stack development. 
                I specialize in building scalable web applications using modern technologies and best practices.
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Professional Journey
                </h3>
                <p>
                  Throughout my career, I've worked with a diverse range of technologies and frameworks, 
                  focusing on creating efficient, maintainable, and user-friendly applications. 
                  My experience spans from front-end development with React and Angular to back-end 
                  systems using Node.js and .NET.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  What I Do
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Develop full-stack web applications</li>
                  <li>Design and implement RESTful APIs</li>
                  <li>Work with cloud services (AWS, Azure)</li>
                  <li>Practice DevOps and CI/CD</li>
                  <li>Write clean, maintainable code</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Facts
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li>🎓 Computer Science Background</li>
                  <li>💼 Full-Stack Developer</li>
                  <li>🌟 Problem Solver</li>
                  <li>📚 Continuous Learner</li>
                  <li>🤝 Team Player</li>
                </ul>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Connect With Me
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/jgangi7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <span className="mr-2">📦</span> GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/james-gangi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <span className="mr-2">💼</span> LinkedIn
                  </a>
                  <a
                    href="mailto:gangijames18@gmail.com"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <span className="mr-2">📧</span> Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
