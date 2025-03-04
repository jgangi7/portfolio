import { Layout } from '../components/ui/Layout';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <Layout 
      title="About Me - James Gangi"
      description="Learn more about James Gangi, a passionate Software Developer with expertise in full-stack development."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto py-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          About Me
        </h1>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-6 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
            Hi! I'm James Gangi, a passionate Software Developer with a strong foundation in full-stack development. I excel at building scalable web applications using the newest technologies and best practices.
            I have experience with a wide variety of technologies and frameworks throughout my career.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Professional Journey
              </h2>
              <p>
                Throughout my career I have been developing effective, sustainable, and user-friendly applications.
My expertise varies from front-end development with React and Angular to back-end
building systems using Node.js, TypeScript, C# and.NET.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                What I Do
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Skilled in ReactJS, AngularJS, TypeScript, .NET, C#, RxJS and Node.js.</li>
                <li>Experience in redis caching, query optimization, API security and efficiency.</li>
                <li>Proficient in Web Based Micro Front-Ends and modular design.</li>
                <li>Strong with GitHub, TFS, and automated pipelines.</li>
                <li>Expertise in SQL, database management, and optimization.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Beyond Coding
              </h2>
              <p>
                When I'm not coding, I enjoy staying up-to-date with the latest technology trends,
                contributing to open-source projects, and continuously learning new skills. I particularly like skiing, traveling, and staying fit!
              </p>
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
    </Layout>
  );
};

export default AboutPage; 