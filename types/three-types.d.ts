declare module '@react-three/fiber' {
  import { Camera, Scene, WebGLRenderer } from 'three';
  import { ReactNode } from 'react';

  export interface CanvasProps {
    children: ReactNode;
    camera?: any;
    className?: string;
  }

  export const Canvas: React.FC<CanvasProps>;
}

declare module '@react-three/drei' {
  import { ReactNode } from 'react';
  import { Line as ThreeLine } from 'three';

  export interface LineProps {
    points: [number, number, number][];
    color?: string;
    lineWidth?: number;
    ref?: React.RefObject<ThreeLine>;
  }

  export const Line: React.FC<LineProps>;
}

declare module 'gsap' {
  interface TweenVars {
    duration?: number;
    y?: number | (() => number);
    onUpdate?: () => void;
    ease?: string;
    repeat?: number;
    yoyo?: boolean;
  }

  export function to(targets: any, vars: TweenVars): any;
} 