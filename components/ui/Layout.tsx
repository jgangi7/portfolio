import Head from 'next/head';
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { withLoadingGuard } from '../LoadingProvider';
import Header from './Header';
import { useGLTF } from '@react-three/drei';
import { useFrame, Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const GuardedFooter = withLoadingGuard(Footer, 900); // 0.9s delay after Hero

export const Layout = ({
  children,
  title = 'James Gangi - Software Developer Portfolio',
  description = 'Software Developer Portfolio showcasing my projects and skills',
}: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a192f] transition-colors">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 pt-20">
        {children}
      </main>

      <GuardedFooter />
    </div>
  );
};

export function Model() {
  const { scene } = useGLTF('/models/wilsonHall.glb');
  return <primitive object={scene} />;
}

export function Scene() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
} 