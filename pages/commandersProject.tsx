'use client';

import { useTranslations } from 'next-intl';
import { FaGithub, FaReact, FaNodeJs, FaCss3, FaHtml5, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiDotnet } from 'react-icons/si';
import { Layout } from "../components/ui/Layout";
import { LoadingProvider } from '../components/LoadingProvider';
import { useState, useEffect } from 'react';

export default function PodcastProject() {
  const t = useTranslations('projects.commanders');
  return (
    <LoadingProvider>
      <Layout>
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a192f] text-gray-800 dark:text-gray-300">
          {/* Title Section */}
          <section className="pt-32 pb-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
              <h1 className="text-5xl text-gray-900 dark:text-white mb-4 text-center">
                {t('title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 text-center max-w-3xl">
                {t('demoDescription')}
              </p>
            </div>
          </section>

          {/* Hero Video Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-16">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 w-full">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    loop
                    onLoadedMetadata={(e) => {
                      e.currentTarget.currentTime = 1;
                    }}
                  >
                    <source src="/videos/commanders-demo.mp4" type="video/mp4" />
                    {t('videoError')}
                  </video>
                </div>
              </div>
            </div>
          </section>

                    {/* Project Details Section */}
            <section className="py-20">
            <div className="max-w-6xl mx-auto px-6">
              {/* The Idea Header */}
              <div className="border-b border-gray-200 dark:border-gray-800">
                <p className="text-sm uppercase tracking-wider text-gray-900 dark:text-white mb-2">
                  PROCESS
                </p>
                <h1 className="text-3xl text-gray-900 dark:text-white mb-3">
                  Process Exploration
                </h1>
              </div>

              {/* Project Overview Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 my-10">

                {/* Disciplines */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Disciplines</h2>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>UI Design</li>
                    <li>UX Research</li>
                    <li>Frontend Development</li>
                    <li>Backend Development</li>
                  </ul>
                </div>

                {/* Responsibilities */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Responsibilities</h2>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>UX Research</li>
                    <li>UI Design</li>
                    <li>Prototyping</li>
                    <li>Fullstack Development</li>
                  </ul>
                </div>

                {/* Tools */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tools</h2>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <FaReact className="text-lg text-gray-700 dark:text-white" />
                      React
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <SiTypescript className="text-lg text-gray-700 dark:text-white" />
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <SiDotnet className="text-lg text-gray-700 dark:text-white" />
                      .NET
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <FaNodeJs className="text-lg text-gray-700 dark:text-white" />
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <FaFigma className="text-lg text-gray-700 dark:text-white" />
                      Figma
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm flex items-center gap-2">
                      <a
                        href="https://github.com/jgangi7/commanders-ui-redesign"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-[#7a1c1c] dark:hover:text-[#7a1c1c] transition-colors inline-flex items-center gap-2"
                      >
                        <FaGithub className="text-xl" />
                        {t('viewOnGitHub')}
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              {/* Challenge and Solution */}
              <div className="py-5 mb-30 border-b border-t border-gray-200 dark:border-gray-800">
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h2 className="text-xl text-gray-900 dark:text-white mb-6">Challenge</h2>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Create a new UI for the Washington Commanders website that is more user-friendly and intuitive. Currently, all NFL team websites are very similar and lack a unique identity.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl text-gray-900 dark:text-white mb-6">Solution</h2>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Create a new UI for the Washington Commanders that is more modern and user-friendly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Section */}
              <div className="py-20">
                <div className="max-w-6xl mx-auto">
                  <div className="border-b border-gray-200 dark:border-gray-800">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      BACKGROUND
                    </p>
                    <h1 className="text-xl text-gray-900 dark:text-white mb-3">The Idea</h1>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5">
                    TEXT
                  </p>
                </div>
              </div>

              {/* Process Section */}
              <div className="py-20">
                <div className="max-w-6xl mx-auto">
                  <div className="border-b border-gray-200 dark:border-gray-800">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">PROCESS</p>
                    <h1 className="text-xl text-gray-900 dark:text-white mb-3">Development Timeline</h1>
                  </div>
                  <div className="mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                      {/* Phase 1 - Research */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <span className="bg-[#7a1c1c] dark:bg-[#7a1c1c] text-white dark:text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                          <h3 className="text-gray-900 dark:text-white text-lg">Research</h3>
                        </div>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                          <li>Competitor Analysis</li>
                          <li>Identifying Problems</li>
                        </ul>
                      </div>

                      {/* Phase 2 - Synthesis */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <span className="bg-[#7a1c1c] dark:bg-[#7a1c1c] text-white dark:text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                          <h3 className="text-gray-900 dark:text-white text-lg">Synthesis</h3>
                        </div>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                          <li>Team Persona</li>
                          <li>User Journey</li>
                        </ul>
                      </div>

                      {/* Phase 3 - Ideation */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <span className="bg-[#7a1c1c] dark:bg-[#7a1c1c] text-white dark:text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                          <h3 className="text-gray-900 dark:text-white text-lg">Ideation</h3>
                        </div>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                          <li>Developing Solution</li>
                          <li>User Flow</li>
                          <li>Low Fidelity Prototyping</li>
                          <li>High Fidelity Prototyping</li>
                        </ul>
                      </div>

                      {/* Phase 4 - Final Designs */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <span className="bg-[#7a1c1c] dark:bg-[#7a1c1c] text-white dark:text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                          <h3 className="text-gray-900 dark:text-white text-lg">Final Designs</h3>
                        </div>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                          <li>Final Prototype</li>
                          <li>Implementation</li>
                        </ul>
                      </div>

                      {/* Phase 5 - Reflection */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <span className="bg-[#7a1c1c] dark:bg-[#7a1c1c] text-white dark:text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">5</span>
                          <h3 className="text-gray-900 dark:text-white text-lg">Reflection</h3>
                        </div>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                          <li>User Testing</li>
                          <li>User Feedback</li>
                          <li>Conclusion</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
              {/* Research Section */}
              <div className="py-20">
              <div className="py-10">
                <div className="max-w-6xl mx-auto">
                  <div className="border-b border-gray-200 dark:border-gray-800">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">RESEARCH</p>
                    <h1 className="text-xl text-gray-900 dark:text-white mb-3">Competitor Analysis</h1>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5">
                    TEXT
                  </p>
                </div>
              </div>
                <div className="max-w-6xl mx-auto">
                  <div className="border-b border-gray-200 dark:border-gray-800">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      RESEARCH
                    </p>
                    <h1 className="text-xl text-gray-900 dark:text-white mb-3">Identifying Problems</h1>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5">
                    TEXT
                  </p>
                </div>
              </div>



              {/* Synthesis Section */}
              <div className="py-20">
                <div className="max-w-6xl mx-auto">
                  <div className="border-b border-gray-800">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      SYNTHESIS
                    </p>
                    <h1 className="text-xl text-gray-900 dark:text-white mb-3">Team Persona</h1>
                  </div>  
                  <p className="text-gray-400 leading-relaxed mt-5 mb-10">
                  </p>

                  {/* Persona Card */}
                  <div className="bg-gray-100 dark:bg-[#112240] rounded-lg p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Left Column - Profile */}
                      <div className="md:col-span-1">
                        <div className="flex flex-col items-start">
                          <div className="w-24 h-24 bg-gray-200 dark:bg-gray-800 rounded-full mb-4 overflow-hidden">
                            <img src="/images/commanders-persona.png" alt="Alex" className="w-full h-full object-cover" />
                          </div>
                          <h2 className="text-xl text-gray-900 dark:text-white mb-1">{t('synthesis.name')}</h2>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{t('synthesis.nameDescription')}</p>
                          
                          <div className="space-y-4 w-full">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 flex items-center justify-center">
                                  <span className="text-[#7a1c1c] dark:text-[#7a1c1c]">📍</span>
                                </div>
                                <span className="text-gray-500 text-sm uppercase">{t('synthesis.location')}</span>
                              </div>
                              <p className="text-gray-900 dark:text-white ml-8">{t('synthesis.sanfrancisco')}</p>
                            </div>

                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 flex items-center justify-center">
                                  <span className="text-[#7a1c1c] dark:text-[#7a1c1c]">🎓</span>
                                </div>
                                <span className="text-gray-500 text-sm uppercase">{t('synthesis.occupation')}</span>
                              </div>
                              <p className="text-gray-900 dark:text-white ml-8">{t('synthesis.swe')}</p>
                            </div>

                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 flex items-center justify-center">
                                  <span className="text-[#7a1c1c] dark:text-[#7a1c1c]">⭐</span>
                                </div>
                                <span className="text-gray-500 text-sm uppercase">{t('synthesis.experience')}</span>
                              </div>
                              <p className="text-gray-900 dark:text-white ml-8">{t('synthesis.fourYears')}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Goals, Needs, Pain Points */}
                      <div className="md:col-span-2">
                        <div className="grid grid-cols-1 gap-6">
                          {/* Goals Card */}
                          <div className="bg-white dark:bg-[#1a2f55] rounded-lg p-6">
                            <div className="flex items-center gap-2 mb-4">
                              <span className="text-[#7a1c1c] dark:text-[#7a1c1c] text-xl">⚡</span>
                              <h3 className="text-gray-900 dark:text-white text-lg">Goals</h3>
                            </div>
                            <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                              <li>• {t('synthesis.goals1')}</li>
                              <li>• {t('synthesis.goals2')}</li>
                              <li>• {t('synthesis.goals3')}</li>
                            </ul>
                          </div>

                          {/* Needs Card */}
                          <div className="bg-white dark:bg-[#1a2f55] rounded-lg p-6">
                            <div className="flex items-center gap-2 mb-4">
                              <span className="text-[#7a1c1c] dark:text-[#7a1c1c] text-xl">❓</span>
                              <h3 className="text-gray-900 dark:text-white text-lg">{t('synthesis.needs')}</h3>
                            </div>
                            <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                              <li>• {t('synthesis.needs1')}</li>
                              <li>• {t('synthesis.needs2')}</li>
                              <li>• {t('synthesis.needs3')}</li>
                            </ul>
                          </div>

                          {/* Pain Points Card */}
                          <div className="bg-white dark:bg-[#1a2f55] rounded-lg p-6">
                            <div className="flex items-center gap-2 mb-4">
                              <span className="text-[#7a1c1c] dark:text-[#7a1c1c] text-xl">⚠️</span>
                              <h3 className="text-gray-900 dark:text-white text-lg">{t('synthesis.painPoints')}</h3>
                            </div>
                            <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                              <li>• {t('synthesis.painPoints1')}</li>
                              <li>• {t('synthesis.painPoints2')}</li>
                              <li>• {t('synthesis.painPoints3')}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="py-20">
                    <div className="max-w-6xl mx-auto">
                      <div className="border-b border-gray-800">
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                          SYNTHESIS
                        </p>
                        <h1 className="text-xl text-gray-900 dark:text-white mb-3">User Journey</h1>
                      </div> 
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5 mb-10">
                        TEXT
                      </p>

                      {/* Journey Timeline */}
                      <div className="relative my-20">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-800 top-32 transform -translate-y-1/2"></div>

                        {/* Journey Steps */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                          {/* Starting */}
                          <div className="relative">
                            <div className="h-24">
                              <h4 className="text-gray-900 dark:text-white text-lg mb-2">Starting</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Starting Description
                              </p>
                            </div>
                            <div className="hidden md:block absolute left-1/2 top-32 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-4 h-4 rounded-full bg-[#7a1c1c] dark:bg-[#7a1c1c]"></div>
                            </div>
                          </div>

                          {/* Trying */}
                          <div className="relative">
                            <div className="h-24">
                              <h4 className="text-gray-900 dark:text-white text-lg mb-2">Trying</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Trying Description
                              </p>
                            </div>
                            <div className="hidden md:block absolute left-1/2 top-32 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-4 h-4 rounded-full bg-[#7a1c1c] dark:bg-[#7a1c1c]"></div>
                            </div>
                          </div>

                          {/* Struggling */}
                          <div className="relative">
                            <div className="h-24">
                              <h4 className="text-gray-900 dark:text-white text-lg mb-2">Struggling</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Struggling Description
                              </p>
                            </div>
                            <div className="hidden md:block absolute left-1/2 top-32 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-4 h-4 rounded-full text-bold bg-[#7a1c1c] dark:bg-[#7a1c1c]"></div>
                            </div>
                          </div>

                          {/* Seeking Solution */}
                          <div className="relative">
                            <div className="h-24">
                              <h4 className="text-gray-900 dark:text-white text-lg mb-2">Seeking Solution</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Seeking Solution Description
                              </p>
                            </div>
                            <div className="hidden md:block absolute left-1/2 top-32 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-4 h-4 rounded-full bg-[#7a1c1c] dark:bg-[#7a1c1c]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ideation Section */}
                <div className="max-w-6xl mx-auto">
                  <div className="border-b border-gray-800">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      IDEATION
                    </p>
                    <h1 className="text-xl text-gray-900 dark:text-white mb-3">Developing Solution</h1>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5 mb-10">
                    Text 
                  </p>

                  <div className="border-b border-gray-800">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      IDEATION
                    </p>
                    <h1 className="text-xl text-gray-900 dark:text-white mb-3">User Flow</h1>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5 mb-10">
                    Text 
                  </p>


                  <div className="border-b border-gray-800">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      IDEATION
                    </p>
                    <h1 className="text-xl text-gray-900 dark:text-white mb-3">Low Fidelity Prototyping</h1>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5 mb-10">
                    Text 
                  </p>

                  <div className="border-b border-gray-800">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      IDEATION
                    </p>
                    <h1 className="text-xl text-gray-900 dark:text-white mb-3">High Fidelity Prototyping</h1>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5 mb-10">
                    Text 
                  </p>

                  {/* Final Designs Section */}
                  <div className="py-20">
                  <div className="max-w-6xl mx-auto">
                      <div className="border-b border-gray-200 dark:border-gray-800">
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                            FINAL DESIGNS
                        </p>
                        <h1 className="text-xl text-gray-900 dark:text-white mb-3">Final Designs</h1>
                      </div>
                      <div className="mt-10">
                        <div className="relative rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
                          <img
                            src="/images/commanders-screenshot.png"
                            alt="Commanders Implementation"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-6 text-center text-sm">
                            Text
                        </p>
                      </div>
                    </div>
                    <div className="max-w-6xl mx-auto">
                      <div className="border-b border-gray-200 dark:border-gray-800">
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                            FINAL DESIGNS
                        </p>
                        <h1 className="text-xl text-gray-900 dark:text-white mb-3">Implementation</h1>
                      </div>
                      <div className="mt-10">
                        <div className="relative rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
                          <img
                            src="/images/commanders-screenshot.png"
                            alt="Commanders Implementation"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-6 text-center text-sm">
                            Text
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Reflections Section */}
                  <div className="py-20">
                  <div className="max-w-6xl mx-auto">
                      <div className="border-b border-gray-200 dark:border-gray-800">
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                            REFLECTION
                        </p>
                        <h1 className="text-xl text-gray-900 dark:text-white mb-3">User Testing</h1>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5 mb-10">
                        Text    
                      </p>
                    </div>
                    <div className="max-w-6xl mx-auto">
                      <div className="border-b border-gray-200 dark:border-gray-800">
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                            REFLECTION
                        </p>
                        <h1 className="text-xl text-gray-900 dark:text-white mb-3">User Feedback</h1>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5 mb-10">
                        Text    
                      </p>
                    </div>
                    <div className="max-w-6xl mx-auto">
                      <div className="border-b border-gray-200 dark:border-gray-800">
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                            REFLECTION
                        </p>
                        <h1 className="text-xl text-gray-900 dark:text-white mb-3">Conclusion</h1>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5 mb-10">
                        Text    
                      </p>
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