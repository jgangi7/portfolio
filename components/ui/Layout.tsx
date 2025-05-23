import Head from 'next/head';
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { withLoadingGuard } from '../LoadingProvider';
import Header from './Header';
import { Analytics } from '@vercel/analytics/react';
import CursorTracer from './CursorTracer';

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
    <div className="min-h-screen bg-white dark:bg-[#0a192f] transition-colors duration-300">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 pt-20">
        {children}
      </main>

      <GuardedFooter />
      <Analytics />
      <CursorTracer />
    </div>
  );
}; 