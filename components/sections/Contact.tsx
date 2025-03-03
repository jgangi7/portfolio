import { motion } from 'framer-motion';

interface ContactProps {
  email: string;
}

export const Contact: React.FC<ContactProps> = ({ email }) => {
  return (
    <section className="section-padding" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="heading text-center">Get In Touch</h2>
        <div className="max-w-lg mx-auto">
          <p className="text-center mb-8">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out!
          </p>
          <div className="flex justify-center">
            <a
              href={`mailto:${email}`}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}; 