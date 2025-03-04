import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Line, Text } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from 'three';

type Point = [number, number, number];

const PointLabel = ({ position, index }: { position: Point; index: number }) => {
  return (
    <Text
      position={[position[0], position[1] + 0.2, position[2]]}
      fontSize={0.2}
      color="currentColor"
      anchorX="center"
      anchorY="bottom"
    >
      {`P${index + 1}`}
    </Text>
  );
};

const AnimatedLine = () => {
  const lineRef = useRef<THREE.Line>(null);
  const [points, setPoints] = useState<Point[]>(() => {
    // Initialize with more spread out points
    const numPoints = 5;
    return Array.from({ length: numPoints }, (_, i) => {
      const x = (i - (numPoints - 1) / 2) * (6 / (numPoints - 1)); // Increased spread
      return [x, Math.sin(i / 2) * 0.8, 0] as Point; // Increased amplitude
    });
  });

  useEffect(() => {
    if (!lineRef.current) return;

    const timeline = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { duration: 4, ease: "power1.inOut" } // Slower animation
    });

    const animate = () => {
      const newPoints = points.map((point) => {
        // Random position within bounds
        const y = (Math.random() - 0.5) * 2; // Random y between -1 and 1
        return [point[0], y, point[2]] as Point;
      });

      timeline.to(points, {
        duration: 4, // Slower animation
        onUpdate: () => {
          const currentPoints = points.map((point, i) => {
            const progress = timeline.progress();
            const targetY = newPoints[i][1];
            const currentY = point[1] + (targetY - point[1]) * progress;
            return [point[0], currentY, point[2]] as Point;
          });
          setPoints(currentPoints);
        },
      });
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
        lineWidth={3} // Thicker line
        className="text-gray-800 dark:text-[#64ffda]"
      />
      {points.map((point, index) => (
        <PointLabel key={index} position={point} index={index} />
      ))}
    </>
  );
};

export const AnimatedLineCanvas = () => {
  return (
    <div className="w-full h-[300px] mb-8"> {/* Increased height */}
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }} {/* Adjusted camera position */}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <AnimatedLine />
      </Canvas>
    </div>
  );
}; 