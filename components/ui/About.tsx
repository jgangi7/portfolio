import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function About() {
  const t = useTranslations('about');

  // Create arrays for skills using the flattened structure
  const skills = [
    t.raw('whatIDo').skills[0],
    t.raw('whatIDo').skills[1],
    t.raw('whatIDo').skills[2],
    t.raw('whatIDo').skills[3],
    t.raw('whatIDo').skills[4],
  ];

  const spotifyCards = [
    {
      category: 'music',
      song: 'Innerbloom',
      artist: 'RÜFÜS DU SOL',
      color: 'bg-cyan-500',
      image: '/spotify1.jpg'
    },
    {
      category: 'drives',
      song: 'Marisa (we\'ve lost dancing)',
      artist: 'Fred again.. The Blessed Madonna',
      color: 'bg-red-700',
      image: '/spotify2.jpg'
    },
    {
      category: 'creative',
      song: 'Runaway (U & I)',
      artist: 'Galantis',
      color: 'bg-purple-600',
      image: '/spotify3.jpg'
    },
    {
      category: 'flow',
      song: 'Food for the Soul',
      artist: 'it\'s murph',
      color: 'bg-teal-600',
      image: '/spotify4.jpg'
    }
  ];

  const experiences = [
    {
      company: 'CoStar Group',
      role: 'Software Engineer',
      year: '2022-2025',
      icon: '/costar.png'
    },
    {
      company: 'Maxar Technologies',
      role: 'Associate Software Engineer',
      year: '2021-2022',
      icon: '/maxar.png'
    }
  ];


  return (
    <div className="min-h-screen p-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
      {/* Left Column - Text Content */}
      <div className="space-y-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-white"
        >
          About
        </motion.h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">TODAY</h2>
            <p className="text-gray-800 dark:text-gray-200">
              {t('professional.content')}
            </p>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">WHAT I DO</h2>
            <div className="space-y-4">
              <p className="text-gray-800 dark:text-gray-200">
                {t.raw('whatIDo').content}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
                {skills.map((skill, index) => (
                  <li key={index} className="leading-relaxed">{skill}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* <div>
            <h2 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">GROWTH</h2>
            <p className="text-gray-800 dark:text-gray-200">
              {t('growth')}
            </p>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">GOAL</h2>
            <p className="text-gray-800 dark:text-gray-200">
              {t('goal')}
            </p>
          </div> */}
        </div>
      </div>

      {/* Right Column - Spotify Cards and Experience */}
      <div className="space-y-8">
        {/* Spotify Cards Grid */}
        <div className="grid grid-cols-2 gap-4">
          {spotifyCards.map((card, index) => (
            <div 
              key={index}
              className={`${card.color} rounded-xl p-4 relative overflow-hidden aspect-square`}
            >
              <span className="absolute top-4 left-4 text-white/80 text-sm">{card.category}</span>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex-shrink-0"></div>
                  <div className="flex-grow">
                    <h3 className="text-white text-sm font-medium truncate">{card.song}</h3>
                    <p className="text-white/70 text-xs truncate">{card.artist}</p>
                  </div>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black">▶</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
              RECENT EXPERIENCES
            </h2>
            <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
              VIEW ALL
            </button>
          </div>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-gray-900 dark:text-white font-medium">{exp.role}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{exp.company}</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400">{exp.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 