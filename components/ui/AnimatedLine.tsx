import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from 'three';

type Point = [number, number, number];

const AnimatedLine = () => {
  const lineRef = useRef<THREE.Line>(null);
  const [points, setPoints] = useState<Point[]>([
    [-2, Math.random() * 2 - 1, 0],
    [-1, Math.random() * 2 - 1, 0],
    [0, Math.random() * 2 - 1, 0],
    [1, Math.random() * 2 - 1, 0],
    [2, Math.random() * 2 - 1, 0],
  ]);

  useEffect(() => {
    const animatePoints = () => {
      const newPoints = points.map((point) => [...point] as Point);
      gsap.to(newPoints, {
        duration: 2,
        y: () => Math.random() * 2 - 1,
        onUpdate: () => setPoints([...newPoints]),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    };
    animatePoints();
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
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <AnimatedLine />
      </Canvas>
    </div>
  );
}; 