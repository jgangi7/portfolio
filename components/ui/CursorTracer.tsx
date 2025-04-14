import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function CursorTracer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none w-8 h-8 rounded-full bg-blue-400/30 dark:bg-blue-400/20 mix-blend-screen z-[100]"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
      }}
    />
  );
} 