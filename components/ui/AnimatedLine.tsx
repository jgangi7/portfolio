import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Line, Text } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from 'three';

type Point = [number, number, number];

// Generate random letter (A-Z)
const getRandomLetter = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters[Math.floor(Math.random() * letters.length)];
};

const PointLabel = ({ position, letter }: { position: Point; letter: string }) => {
  return (
    <Text
      position={[position[0], position[1] + 0.3, position[2]]}
      fontSize={0.3}
      color="currentColor"
      anchorX="center"
      anchorY="bottom"
      font="/fonts/PlayfairDisplay-Italic.ttf" // Make sure to add this font to your public folder
    >
      {letter}
    </Text>
  );
};

const AnimatedLine = () => {
  const lineRef = useRef<THREE.Line>(null);
  const [points, setPoints] = useState<Point[]>(() => {
    // Initialize with points spread across the full width
    const numPoints = 7; // More points for smoother line
    return Array.from({ length: numPoints }, (_, i) => {
      const x = (i - (numPoints - 1) / 2) * (12 / (numPoints - 1)); // Wider spread (12 units)
      return [x, Math.sin(i / 2) * 1.2, 0] as Point; // Increased amplitude
    });
  });

  // Generate random letters once on mount
  const [letters] = useState(() => 
    Array.from({ length: points.length }, () => getRandomLetter())
  );

  useEffect(() => {
    if (!lineRef.current) return;

    const timeline = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power1.inOut" }
    });

    const animate = () => {
      const newPoints = points.map((point) => {
        // Random position within bounds
        const y = (Math.random() - 0.5) * 3; // Increased random range
        return [point[0], y, point[2]] as Point;
      });

      // Add animation sequence with pauses
      timeline
        .to(points, {
          duration: 6, // Slower animation
          onUpdate: () => {
            const currentPoints = points.map((point, i) => {
              const progress = timeline.progress();
              const targetY = newPoints[i][1];
              const currentY = point[1] + (targetY - point[1]) * progress;
              return [point[0], currentY, point[2]] as Point;
            });
            setPoints(currentPoints);
          },
        })
        .to({}, { duration: 1 }); // 1 second pause
    };

    animate();

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <>
      <Line 
        ref={lineRef} 
        points={points} 
        color="currentColor" 
        lineWidth={3}
        className="text-gray-800 dark:text-[#64ffda]"
      />
      {points.map((point, index) => (
        <PointLabel 
          key={index} 
          position={point} 
          letter={letters[index]}
        />
      ))}
    </>
  );
};

export const AnimatedLineCanvas = () => {
  return (
    <div className="w-full h-[300px] mb-8">
      <Canvas 
        camera={{ position: [0, 0, 12], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <AnimatedLine />
      </Canvas>
    </div>
  );
}; 