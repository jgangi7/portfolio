declare module '@react-three/fiber' {
  import { Camera, Scene, WebGLRenderer } from 'three';
  import { ReactNode } from 'react';

  export interface CanvasProps {
    children: ReactNode;
    camera?: any;
    className?: string;
    style?: React.CSSProperties;
  }

  export const Canvas: React.FC<CanvasProps>;
  export const useFrame: (callback: (state: any, delta: number) => void) => void;

  interface ThreeElements {
    ambientLight: JSX.IntrinsicElements['mesh'] & {
      intensity?: number;
    };
  }

  declare global {
    namespace JSX {
      interface IntrinsicElements extends ThreeElements {}
    }
  }
}

declare module '@react-three/drei' {
  import { ReactNode } from 'react';
  import { Line as ThreeLine } from 'three';

  export interface LineProps {
    points: [number, number, number][];
    color?: string;
    lineWidth?: number;
    ref?: React.RefObject<ThreeLine>;
    className?: string;
  }

  export interface TextProps {
    children: ReactNode;
    position: [number, number, number];
    fontSize?: number;
    color?: string;
    anchorX?: 'center' | 'left' | 'right';
    anchorY?: 'bottom' | 'top' | 'middle';
  }

  export const Line: React.FC<LineProps>;
  export const Text: React.FC<TextProps>;
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
  export function timeline(config?: { repeat?: number; yoyo?: boolean; defaults?: any }): any;
} 