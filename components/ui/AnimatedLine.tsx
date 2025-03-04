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
  const pointsRef = useRef<{ x: number; y: number; z: number }[]>([]);
  const [points, setPoints] = useState<Point[]>(() => {
    const numPoints = 7;
    const initialPoints = Array.from({ length: numPoints }, (_, i) => {
      const x = (i - (numPoints - 1) / 2) * (12 / (numPoints - 1));
      const y = Math.sin(i / 2) * 1.2;
      return [x, y, 0] as Point;
    });
    
    // Initialize the ref with the same points
    pointsRef.current = initialPoints.map(([x, y, z]) => ({ x, y, z }));
    return initialPoints;
  });

  // Generate random letters once on mount
  const [letters] = useState(() => 
    Array.from({ length: points.length }, () => getRandomLetter())
  );

  useEffect(() => {
    if (!lineRef.current) return;

    const timeline = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power2.inOut" }
    });

    const animate = () => {
      // Create target positions for each point
      const targetPositions = pointsRef.current.map((point) => ({
        y: (Math.random() - 0.5) * 3
      }));

      timeline
        .to(pointsRef.current, {
          duration: 6,
          y: (index) => targetPositions[index].y,
          stagger: {
            each: 0.1,
            from: "random"
          },
          onUpdate: () => {
            setPoints(pointsRef.current.map(({ x, y, z }) => [x, y, z]));
          }
        })
        .to({}, { duration: 1 }) // Pause
        .to(pointsRef.current, {
          duration: 6,
          y: (index) => points[index][1], // Return to original positions
          stagger: {
            each: 0.1,
            from: "random"
          },
          onUpdate: () => {
            setPoints(pointsRef.current.map(({ x, y, z }) => [x, y, z]));
          }
        })
        .to({}, { duration: 1 }); // Pause
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