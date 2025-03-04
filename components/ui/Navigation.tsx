import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navigation = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <nav>
      <ul className="flex space-x-6">
        <li>
          <Link
            href="/"
            className={`text-lg font-medium transition-colors ${
              isActive('/') 
                ? 'text-blue-500 dark:text-blue-400' 
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`text-lg font-medium transition-colors ${
              isActive('/about')
                ? 'text-blue-500 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
            }`}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}; 