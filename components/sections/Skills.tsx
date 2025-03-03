import { motion } from 'framer-motion';
import type { Skill } from '../../types';

interface SkillsProps {
  skills: Skill[];
}

const SkillCard: React.FC<Skill> = ({ name, icon, category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm flex items-center gap-3"
    >
      {icon && <span className="text-2xl">{icon}</span>}
      <div>
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 capitalize">{category}</p>
      </div>
    </motion.div>
  );
};

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const categories = ['frontend', 'backend', 'tools', 'other'] as const;
  
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800" id="skills">
      <h2 className="heading text-center">Skills</h2>
      
      {categories.map((category) => {
        const categorySkills = skills.filter(skill => skill.category === category);
        
        if (categorySkills.length === 0) return null;
        
        return (
          <div key={category} className="mb-8">
            <h3 className="subheading capitalize text-center mb-6">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categorySkills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}; 