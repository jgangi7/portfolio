import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import type { SocialLinks } from '../../types';

interface HeroProps {
  name: string;
  tagline: string;
  socialLinks: SocialLinks;
}

export const Hero: React.FC<HeroProps> = ({ name, tagline, socialLinks }) => {
  return (
    <section className="section-padding flex flex-col items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
          Hi, I'm <span className="text-primary">{name}</span>
        </h1>
        <p className="text-xl md:text-2xl text-center text-gray-600 dark:text-gray-300">
          {tagline}
        </p>
      </motion.div>

      <div className="flex gap-6 mt-8">
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-primary">
          <FaGithub />
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-primary">
          <FaLinkedin />
        </a>
        <a href={`mailto:${socialLinks.email}`} className="text-3xl hover:text-primary">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}; 