import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaCloud, FaTools, FaDesktop, FaServer } from 'react-icons/fa';

interface SkillCategory {
  name: string;
  icon: JSX.Element;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Languages',
      icon: <FaCode className="text-2xl text-blue-500" />,
      skills: ['TypeScript', 'JavaScript', 'C#', 'SQL', 'HTML', 'CSS']
    },
    {
      name: 'Frontend',
      icon: <FaDesktop className="text-2xl text-green-500" />,
      skills: ['React', 'AngularJS', 'Redux', 'RxJS', 'TailwindCSS']
    },
    {
      name: 'Backend',
      icon: <FaServer className="text-2xl text-purple-500" />,
      skills: ['Node.js', '.NET', 'Express', 'REST APIs']
    },
    {
      name: 'Databases',
      icon: <FaDatabase className="text-2xl text-yellow-500" />,
      skills: ['PostgreSQL', 'MongoDB', 'SQL Server', 'Azure']
    },
    {
      name: 'Cloud & DevOps',
      icon: <FaCloud className="text-2xl text-cyan-500" />,
      skills: ['AWS (SNS, SQS, Lambda, EC2)', 'Docker', 'Jenkins', 'Redis', 'Datadog']
    },
    {
      name: 'Testing & Tools',
      icon: <FaTools className="text-2xl text-red-500" />,
      skills: ['Cypress.io', 'Jest', 'Git', 'TFS']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 dark:text-gray-300">A comprehensive list of my technical expertise</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2 text-gray-800 dark:text-white">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 