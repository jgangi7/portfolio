import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import gsap from "gsap";

const AnimatedLine = () => {
  const lineRef = useRef();
  const [points, setPoints] = useState([
    [-2, Math.random() * 2 - 1, 0],
    [-1, Math.random() * 2 - 1, 0],
    [0, Math.random() * 2 - 1, 0],
    [1, Math.random() * 2 - 1, 0],
    [2, Math.random() * 2 - 1, 0],
  ]);

  useEffect(() => {
    const animatePoints = () => {
      gsap.to(points, {
        duration: 2,
        y: () => points.map(() => Math.random() * 2 - 1),
        onUpdate: () => setPoints([...points]),
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