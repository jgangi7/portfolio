import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

// Add Spotify icon SVG component
const SpotifyIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.371-.721.49-1.101.241-3.021-1.858-6.832-2.278-11.322-1.245-.435.101-.861-.21-.961-.645-.101-.435.21-.861.645-.961 4.91-1.121 9.021-.671 12.452 1.371.369.241.49.721.241 1.101zm1.47-3.27c-.301.458-.921.611-1.381.301-3.461-2.131-8.722-2.751-12.842-1.511-.499.15-1.021-.15-1.171-.649-.15-.499.15-1.021.649-1.171 4.681-1.421 10.522-.721 14.452 1.771.448.301.599.921.301 1.381zm.129-3.409c-4.161-2.481-11.074-2.701-15.064-1.501-.631.18-1.29-.18-1.471-.811-.18-.631.18-1.29.811-1.471 4.591-1.389 12.221-1.121 17.042 1.731.59.349.771 1.111.421 1.691-.349.58-1.111.771-1.691.421z"/>
  </svg>
);

export default function About() {
  const t = useTranslations('about.professional');

  const spotifyCards = [
    {
      song: 'Hotel California',
      artist: 'Eagles',
      color: 'from-cyan-500/80',
      image: '/images/hotel-california.jpg',
      link: 'https://open.spotify.com/track/40riOy7x9W7GXjyGp4pjAv'
    },
    {
      song: 'Find My Way Home',
      artist: 'Sammy Virji',
      color: 'from-purple-600/80',
      image: '/images/find-my-way-home.png',
      link: 'https://open.spotify.com/track/1yIi7qRdybE4yY1V0YdOKG'
    },
    {
      song: '28',
      artist: 'Zach Bryan',
      color: 'from-red-700/80',
      image: '/images/28.jpg',
      link: 'https://open.spotify.com/track/5iJKGpnFfvbjZJeAtwXfCj'
    },
    {
      song: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      color: 'from-teal-600/80',
      image: '/images/stairway-to-heaven.jpg',
      link: 'https://open.spotify.com/track/5CQ30WqJwcep0pYcV4AMNc'
    }
  ];

  const experiences = [
    {
      company: 'CoStar Group',
      role: 'Software Engineer',
      year: '2022-2025',
      icon: '/images/costar.jpeg'
    },
    {
      company: 'Maxar Technologies',
      role: 'Associate Software Engineer',
      year: '2021-2022',
      icon: '/images/maxar.png'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <motion.div 
          className="h-full"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-800 h-full">
            <h1 className="text-white text-[1.8rem] font-medium mb-4">{t('about')}</h1>
            <div className="h-full flex flex-col space-y-4">
              <div>
                <h3 className="text-gray-400 text-[1.1rem] mb-2">{t('todayheader')}</h3>
                <p className="text-gray-200 text-[0.875rem] md:text-[min(1.1rem,1.8vh)] xl:text-[min(1.2rem,2vh)] leading-[1.5]">
                  {t('content')}
                </p>
              </div>
              <div>
                <h3 className="text-gray-400 text-[1.1rem] mb-2">{t('growthheader')}</h3>
                <p className="text-gray-200 text-[0.875rem] md:text-[min(1.1rem,1.8vh)] xl:text-[min(1.2rem,2vh)] leading-[1.5]">
                  {t('growth')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          className="h-full flex flex-col"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Spotify Section */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-800 flex-1">
            <h2 className="text-lg font-medium text-white mb-4">{t('nowPlaying')}</h2>
            <div className="h-[calc(100%-3rem)] flex items-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                {spotifyCards.map((card, index) => (
                  <a 
                    key={index}
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl relative overflow-hidden aspect-square transition-transform hover:scale-105 group"
                  >
                    <Image
                      src={card.image}
                      alt={`${card.song} by ${card.artist}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${card.color} from-black/80 pointer-events-none`} />
                    <div className="absolute top-3 left-3">
                      <SpotifyIcon />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 flex items-center gap-2">
                        <div className="flex-grow min-w-0">
                          <h3 className="text-white text-sm font-medium truncate leading-tight mb-0.5">{card.song}</h3>
                          <p className="text-white/70 text-xs truncate">{card.artist}</p>
                        </div>
                        <div 
                          className="w-8 h-8 bg-[#1DB954] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg transform transition-transform group-hover:scale-110 ml-1"
                        >
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <motion.div 
            className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-800 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-white">{t('experiences')}</h2>
            </div>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                    <Image
                      src={exp.icon}
                      alt={`${exp.company} logo`}
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-gray-200 font-medium">{exp.role}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400">{exp.year}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 