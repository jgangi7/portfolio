import Head from 'next/head';
import { ReactNode } from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export const Layout = ({
  children,
  title = 'James Gangi - Software Developer Portfolio',
  description = 'Software Developer Portfolio showcasing my projects and skills',
}: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
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

      <footer className="text-center py-6 mt-12 border-t border-gray-200 dark:border-gray-800">
        <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} James Gangi. All rights reserved.</p>
      </footer>
    </div>
  );
}; 