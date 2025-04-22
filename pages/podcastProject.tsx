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
        <div className="min-h-screen bg-[#0a192f] text-gray-300">
          {/* Title Section */}
          <section className="pt-32 pb-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
              <h1 className="text-5xl text-white mb-4 text-center">
                Podcast Visualizer
              </h1>
              <p className="text-xl text-gray-400 text-center max-w-3xl">
                Transform audio/video content into a short and easy to digest synopsis and a visual map of the podcast.
              </p>
            </div>
          </section>

          {/* Hero Video Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-16">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800 w-full">
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
          </section>

          {/* Project Details Section */}
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-6">
              {/* The Idea Header */}
              <div className="border-b border-gray-800">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                  PROCESS HIGHLIGHTS
                </p>
                <h1 className="text-3xl text-white mb-3">
                  Part One - Exploration
                </h1>
              </div>

              {/* Project Overview Grid */}


              {/* Challenge and Solution */}
              <div className="py-5 mb-30 border-b border-gray-800">
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h2 className="text-xl text-white mb-6">Challenge</h2>
                      <p className="text-gray-400 leading-relaxed">
                        Podcasts are increasingly popular, and rightfully so. They are a great way to consume information and learn new and complex topics. However, they take a large amount of time to listen to, and it can be hard to remember what you learned.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl text-white mb-6">Solution</h2>
                      <p className="text-gray-400 leading-relaxed">
                        Create an summarization and visualization tool that turns podcast audio/video into a short and easy to digest synopsis and a visual map of the podcast.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 my-10">
                {/* Timeline */}
                <div>
                  <h2 className="text-lg font-semibold text-white mb-4">Timeline</h2>
                  <p className="text-gray-400">March - April 2025</p>
                </div>

                {/* Disciplines */}
                <div>
                  <h2 className="text-lg font-semibold text-white mb-4">Disciplines</h2>
                  <ul className="space-y-2 text-gray-400">
                    <li>JavaScript Logic</li>
                    <li>Python Development</li>
                    <li>User Experience Design</li>
                    <li>Data Visualization</li>
                  </ul>
                </div>

                {/* Responsibilities */}
                <div>
                  <h2 className="text-lg font-semibold text-white mb-4">Responsibilities</h2>
                  <ul className="space-y-2 text-gray-400">
                    <li>UX Research</li>
                    <li>Data Processing</li>
                    <li>Prototyping</li>
                    <li>Fullstack Development</li>
                  </ul>
                </div>

                {/* Tools */}
                <div>
                  <h2 className="text-lg font-semibold text-white mb-4">Tools</h2>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-sm flex items-center gap-2">
                      <FaPython className="text-lg" />
                      Python
                    </span>
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-sm flex items-center gap-2">
                      <FaBrain className="text-lg" />
                      LLM
                    </span>
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-sm flex items-center gap-2">
                      <SiJavascript className="text-lg" />
                      JavaScript
                    </span>
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-sm flex items-center gap-2">
                      <a
                        href="https://github.com/jgangi7/podcast-visualizer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                      >
                        <FaGithub className="text-xl" />
                        <span>View on GitHub</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              {/* Background Section */}
              <div className="py-20">
                <div className="max-w-6xl mx-auto">
                  <div className="border-b border-gray-800">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      BACKGROUND
                    </p>
                    <h1 className="text-xl text-white mb-3">The Why</h1>
                  </div>
                  <p className="text-gray-400 leading-relaxed mt-5">
                    <span className="font-bold" style={{color: '#64ffda'}}>Podcasts</span> are my favorite way to consume information. I love the opitons of audio and video and the <span className="font-bold" style={{color: '#64ffda'}}>ability to learn</span> new and complex topics that I am interested in or have never heard of before. I cant tell you the <span className="font-bold" style={{color: '#64ffda'}}>amount of change </span>I have taken from podcasts and brought into my own life. Whether that be a new way of thinking about a international issue, a new hobby, or any other small piece of information that I can take with me. However, they take a large amount of time to listen to, and it can be hard to remember what you learned. <span className="font-bold" style={{color: '#64ffda'}}>So I wanted to create a tool that would help me and others like me to get the most out of podcasts and retain </span>what they learned.
                  </p>
                </div>
              </div>

              {/* Process Section */}
              <div className="py-20">
                <div className="max-w-6xl mx-auto">
                  <div className="border-b border-gray-800">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">THE PROCESS</p>
                    <h1 className="text-xl text-white mb-3">Development Timeline</h1>
                  </div>
                  <div className="mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                      {/* Phase 1 - Research */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <span className="bg-[#64ffda] text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                          <h3 className="text-white text-lg">Research</h3>
                        </div>
                        <ul className="text-gray-400 space-y-2 text-sm">
                          <li>Identifying Problems</li>
                          <li>Desk Research</li>
                          <li>Competitor Analysis</li>
                        </ul>
                      </div>

                      {/* Phase 2 - Synthesis */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <span className="bg-[#64ffda] text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                          <h3 className="text-white text-lg">Synthesis</h3>
                        </div>
                        <ul className="text-gray-400 space-y-2 text-sm">
                          <li>User Persona</li>
                          <li>User Journey</li>
                          <li>User Flow</li>
                        </ul>
                      </div>

                      {/* Phase 3 - Ideation */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <span className="bg-[#64ffda] text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                          <h3 className="text-white text-lg">Ideation</h3>
                        </div>
                        <ul className="text-gray-400 space-y-2 text-sm">
                          <li>Developing a Solution</li>
                          <li>Moodboard</li>
                          <li>Low Fidelity</li>
                          <li>High Fidelity</li>
                          <li>Further Explorations</li>
                        </ul>
                      </div>

                      {/* Phase 4 - Final Designs */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <span className="bg-[#64ffda] text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                          <h3 className="text-white text-lg">Final Designs</h3>
                        </div>
                        <ul className="text-gray-400 space-y-2 text-sm">
                          <li>Keynote Prototype</li>
                          <li>SwiftUI Prototype</li>
                          <li>Figma Prototype</li>
                        </ul>
                      </div>

                      {/* Phase 5 - Reflection */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <span className="bg-[#64ffda] text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">5</span>
                          <h3 className="text-white text-lg">Reflection</h3>
                        </div>
                        <ul className="text-gray-400 space-y-2 text-sm">
                          <li>User Feedback</li>
                          <li>Next Steps</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </LoadingProvider>
  );
} 