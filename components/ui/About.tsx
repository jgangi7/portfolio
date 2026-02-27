import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { socialLinks } from "@/data/social";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function About() {
  const t = useTranslations("about");
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const spotifyCards = [
    {
      song: "My Old Ways",
      artist: "Tame Impala", 
      color: "from-green-500/80",
      link: "https://open.spotify.com/track/4whkhyXTrTgHKZzkUvdwoq" 
    },
    {
      song: "Cold Blue Rain",
      artist: "Milky Chance",
      color: "from-gray-400/80",
      link: "https://open.spotify.com/track/2lHJmKHN768UkN39rp7Z7Y"
    },
    {
      song: "you're a star",
      artist: "Fred Again..",
      color: "from-blue-600/80",
      link: "https://open.spotify.com/track/017erFbOyCrdz0yburnVGZ" 
    },
    {
      song: "28",
      artist: "Zach Bryan",
      color: "from-black/80",
      link: "https://open.spotify.com/track/6dANcQ00uiiWoBDYVrsGvz"
    },
    {
      song: "SOLE",
      artist: "Turnstile",
      color: "from-pink-600/80",
      link: "https://open.spotify.com/track/6PaSOin7Y9GnXRZ5U5sMsv"
    },
    {
      song: "Tuesday's Gone",
      artist: "Lynyrd Skynyrd",
      color: "from-red-600/80",
      link: "https://open.spotify.com/track/64sn7wgJfeQKY3Jisnl59w"
    },
    {
      song: "Sober",
      artist: "Tool",
      color: "from-yellow-500/80",
      link: "https://open.spotify.com/track/6DyywdbmTzlmXBzG9ym7Rt"
    },
  ];

  const timeline = [
    {
      company: "Goddard",
      role: "Full Stack Software Developer - 2025",
    },
    {
      company: "CoStar Group",
      role: "Software Developer - 2022",
    },
    {
      company: "Maxar Technologies",
      role: "Associate Software Developer - 2022",
    },
    {
      company: "Maxar Technologies",
      role: "Internship - 2021",
    },
  ];

  const socialItems = [
    { label: "email", link: `mailto:${socialLinks.email}` },
    // { label: 'cv', link: '#' },
    { label: "linkedin", link: socialLinks.linkedin },
    { label: "github", link: socialLinks.github },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-7xl mx-auto">
        {/* Left: Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-medium text-gray-600 dark:text-white mb-6 flex flex-wrap items-center gap-2">
            {t('title')}
            <div className="signature-wrapper inline-block">
              {mounted && (
                <Image
                  src={currentTheme === "dark" ? "/images/dark_theme_name.png" : "/images/light_theme_name.png"}
                  alt="Name signature"
                  width={300}
                  height={100}
                />
              )}
            </div>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
            {t('content')}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-base italic">
            {t('cheers')}
          </p>
        </motion.div>
      </div>

      {/* Three Column Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {/* On Repeat */}
        <div>
          <h2 className="text-gray-900 dark:text-white text-lg font-medium mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            {t('onRepeat')}
          </h2>
          <div className="space-y-4">
            {spotifyCards.map((card, index) => (
              <a
                key={index}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex items-center justify-between p-4 rounded-lg bg-transparent group-hover:bg-gradient-to-r group-hover:from-gray-100 dark:group-hover:from-gray-900/50 group-hover:to-transparent border border-transparent group-hover:border-gray-300 dark:group-hover:border-gray-600 transition-all">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div
                      className={`w-12 h-12 rounded flex-shrink-0 ${
                        card.color === "from-green-500/80"
                          ? "bg-green-500"
                          : card.color === "from-gray-400/80"
                            ? "bg-gray-400"
                            : card.color === "from-blue-600/80"
                              ? "bg-blue-600"
                              : card.color === "from-yellow-500/80"
                                ? "bg-yellow-500"
                                : card.color === "from-black/80"
                                  ? "bg-black border border-gray-600"
                                  : card.color === "from-pink-600/80"
                                    ? "bg-pink-600"
                                    : "bg-red-600"
                      }`}
                    />
                    <div className="min-w-0">
                      <h3 className="text-gray-900 dark:text-white font-medium text-sm truncate">
                        {card.song}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-xs truncate">
                        {card.artist}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors text-xs ml-4 flex-shrink-0 hidden group-hover:block">
                    {t('playOnSpotify')} ↗
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-gray-900 dark:text-white text-lg font-medium mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            Timeline
          </h2>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index}>
                <h3 className="text-gray-800 dark:text-gray-300 font-medium text-sm">
                  {item.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">{item.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Find Me */}
        <div>
          <h2 className="text-gray-900 dark:text-white text-lg font-medium mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            {t('findMe')}
          </h2>
          <div className="space-y-3">
            {socialItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target={item.label !== "email" ? "_blank" : undefined}
                rel={item.label !== "email" ? "noopener noreferrer" : undefined}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors block text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
