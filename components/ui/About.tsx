import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="pt-80 bg-white dark:bg-[#0a192f]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
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
                <li>Skilled in ReactJS, AngularJS, TypeScript, .NET, C#, and Node.js.</li>
                <li>Experience in caching, query optimization, and API efficiency.</li>
                <li>Proficient in Micro Front-Ends and modular design.</li>
                <li>Strong with GitHub, TFS, and CI/CD</li>
                <li>Expertise in SQL, procedure deployment, and optimization.</li>
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
  );
}; 