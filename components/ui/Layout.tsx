import Head from 'next/head';
import { ReactNode } from 'react';
import { ThemeToggle } from './ThemeToggle';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'James Gangi - Software Developer Portfolio',
  description = 'Software Developer Portfolio showcasing my projects and skills',
}) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ThemeToggle />

      <main className="container mx-auto px-4">
        {children}
      </main>

      <footer className="text-center py-6 mt-12 border-t">
        <p>© {new Date().getFullYear()} James Gangi. All rights reserved.</p>
      </footer>
    </div>
  );
}; 