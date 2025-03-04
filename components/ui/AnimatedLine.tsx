import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from 'three';

type Point = [number, number, number];

const AnimatedLine = () => {
  const lineRef = useRef<THREE.Line>(null);
  const [points, setPoints] = useState<Point[]>(() => {
    // Initialize with smooth curve points
    const numPoints = 5;
    return Array.from({ length: numPoints }, (_, i) => {
      const x = (i - (numPoints - 1) / 2) * (4 / (numPoints - 1));
      return [x, Math.sin(i / 2) * 0.5, 0] as Point;
    });
  });

  useEffect(() => {
    if (!lineRef.current) return;

    const timeline = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { duration: 2, ease: "sine.inOut" }
    });

    const animate = () => {
      const newPoints = points.map((point, i) => {
        const y = Math.sin((i / points.length) * Math.PI * 2) * 0.75;
        return [point[0], y, point[2]] as Point;
      });

      timeline.to(points, {
        duration: 2,
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
    <Line 
      ref={lineRef} 
      points={points} 
      color="currentColor" 
      lineWidth={2}
      className="text-gray-800 dark:text-[#64ffda]"
    />
  );
};

export const AnimatedLineCanvas = () => {
  return (
    <div className="w-full h-[200px] mb-8">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <AnimatedLine />
      </Canvas>
    </div>
  );
}; 