'use client';

import { useTranslations } from 'next-intl';
import { FaGithub, FaPython, FaBrain } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { Layout } from "../components/ui/Layout";
import { LoadingProvider } from '../components/LoadingProvider';

export default function PodcastProject() {
  const t = useTranslations('projects.podcast-visualizer');

  return (
    <LoadingProvider>
      <Layout>
        <div className="min-h-screen bg-white dark:bg-[#0a192f] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left side - Project details */}
              <div className="lg:w-1/2">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('title')}
                </h1>
                <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  {t('description')}
                </p>

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gray-100 dark:bg-[#2C2C2C] text-gray-700 dark:text-gray-300 rounded-full flex items-center gap-2">
                      <FaPython className="text-xl" />
                      Python
                    </span>
                    <span className="px-4 py-2 bg-gray-100 dark:bg-[#2C2C2C] text-gray-700 dark:text-gray-300 rounded-full flex items-center gap-2">
                      <FaBrain className="text-xl" />
                      LLM
                    </span>
                    <span className="px-4 py-2 bg-gray-100 dark:bg-[#2C2C2C] text-gray-700 dark:text-gray-300 rounded-full flex items-center gap-2">
                      <SiJavascript className="text-xl" />
                      JavaScript
                    </span>
                    <a
                    href="https://github.com/jgangi7/podcast-visualizer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors pt-2"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  </div>
                </div>
              </div>

              {/* Right side - Demo video */}
              <div className="lg:w-1/2">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-[#2C2C2C]">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    loop
                    onLoadedMetadata={(e) => {
                      e.currentTarget.currentTime = 4;
                    }}
                  >
                    <source src="/videos/podcast-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </LoadingProvider>
  );
} 