import { useRouter } from 'next/router';

export const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul className="flex space-x-6">
        <li>
          <button
            onClick={() => scrollToSection('home')}
            className="text-lg font-medium transition-colors text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-lg font-medium transition-colors text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('about')}
            className="text-lg font-medium transition-colors text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            About
          </button>
        </li>
      </ul>
    </nav>
  );
}; 