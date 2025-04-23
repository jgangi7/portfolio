'use client';

import { useTranslations } from 'next-intl';
import { FaGithub, FaPython, FaBrain } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { Layout } from "../components/ui/Layout";
import { LoadingProvider } from '../components/LoadingProvider';
import { useState, useEffect } from 'react';

export default function PodcastProject() {
  const t = useTranslations('projects.podcast-visualizer');
  const [currentLLM, setCurrentLLM] = useState(0);
  const [progress, setProgress] = useState(0);
  const [completedBars, setCompletedBars] = useState<number[]>([]);

  const llms = [
    { 
      name: t('LLMs.bart'), 
      description: t('LLMs.bartdesc') 
    },
    { 
      name: t('LLMs.llama'), 
      description: t('LLMs.llamadesc') 
    },
    { 
      name: t('LLMs.mistral'), 
      description: t('LLMs.mistraldesc') 
    },
    { 
      name: t('LLMs.grok'), 
      description: t('LLMs.grokdesc') 
    }
  ];

  useEffect(() => {
    const updateProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Reset progress and move to next item
          setCurrentLLM((current) => {
            const next = (current + 1) % llms.length;
            if (next === 0) {
              setCompletedBars([]);
            } else {
              setCompletedBars(prev => [...prev, current]);
            }
            return next;
          });
          return 0;
        }
        return prev + 1;
      });
    };

    const interval = setInterval(updateProgress, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
                      e.currentTarget.currentTime = 6;
                    }}
                  >
                    <source src="/videos/podcast-demo.mp4" type="video/mp4" />
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
                  {t('process.highlights')}
                </p>
                <h1 className="text-3xl text-gray-900 dark:text-white mb-3">
                  {t('process.exploration')}
                </h1>
              </div>

              {/* Project Overview Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 my-10">
                {/* Timeline */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('process.timeline')}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{t('process.timelineDescription')}</p>
                </div>

                {/* Disciplines */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('process.disciplines')}</h2>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>{t('process.disciplinesJs')}</li>
                    <li>{t('process.disciplinesPython')}</li>
                    <li>{t('process.disciplinesUserExperience')}</li>
                    <li>{t('process.disciplinesDataVisualization')}</li>
                  </ul>
                </div>

                {/* Responsibilities */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('process.responsibilities')}</h2>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>{t('process.responsibilitiesUX')}</li>
                    <li>{t('process.responsibilitiesDataProcessing')}</li>
                    <li>{t('process.responsibilitiesPrototyping')}</li>
                    <li>{t('process.responsibilitiesFullstackDevelopment')}</li>
                  </ul>
                </div>

                {/* Tools */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('tools.tools')}</h2>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <FaPython className="text-lg text-gray-700 dark:text-white" />
                      {t('tools.toolsPython')}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <FaBrain className="text-lg text-gray-700 dark:text-white" />
                      {t('tools.toolsLLM')}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <SiJavascript className="text-lg text-gray-700 dark:text-white" />
                      {t('tools.toolsJavaScript')}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm flex items-center gap-2">
                      <a
                        href="https://github.com/jgangi7/podcast-visualizer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-[#64ffda] transition-colors inline-flex items-center gap-2"
                      >
                        <FaGithub className="text-xl" />
                        {t('tools.viewOnGitHub')}
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
                      <h2 className="text-xl text-gray-900 dark:text-white mb-6">{t('challenge.title')}</h2>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {t('challenge.description')}
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl text-gray-900 dark:text-white mb-6">{t('solution.title')}</h2>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {t('solution.description')}
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
                      {t('background.title')}
                    </p>
                    <h1 className="text-xl text-gray-900 dark:text-white mb-3">{t('background.idea')}</h1>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5">
                    <span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('background.goal')}</span> {t('background.ideaDescriptionPT1')}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('background.challenge')}</span> {t('background.ideaDescriptionPT2')} <span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('background.grok')}</span> {t('background.ideaDescriptionPT3')} <span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('background.integrate')}</span>.
                  </p>
                </div>
              </div>

              {/* Process Section */}
              <div className="py-20">
                <div className="max-w-6xl mx-auto">
                  <div className="border-b border-gray-200 dark:border-gray-800">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">{t('theProcess.title')}</p>
                    <h1 className="text-xl text-gray-900 dark:text-white mb-3">{t('theProcess.development')}</h1>
                  </div>
                  <div className="mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                      {/* Phase 1 - Research */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <span className="bg-teal-500 dark:bg-[#64ffda] text-white dark:text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                          <h3 className="text-gray-900 dark:text-white text-lg">{t('theProcess.research')}</h3>
                        </div>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                          <li>{t('theProcess.identifyingProblems')}</li>
                          <li>{t('theProcess.competitorAnalysis')}</li>
                        </ul>
                      </div>

                      {/* Phase 2 - Synthesis */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <span className="bg-teal-500 dark:bg-[#64ffda] text-white dark:text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                          <h3 className="text-gray-900 dark:text-white text-lg">{t('theProcess.synthesis')}</h3>
                        </div>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                          <li>{t('theProcess.userPersona')}</li>
                          <li>{t('theProcess.userJourney')}</li>
                        </ul>
                      </div>

                      {/* Phase 3 - Ideation */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <span className="bg-teal-500 dark:bg-[#64ffda] text-white dark:text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                          <h3 className="text-gray-900 dark:text-white text-lg">{t('theProcess.ideation')}</h3>
                        </div>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                          <li>{t('theProcess.developingSolution')}</li>
                          <li>{t('theProcess.choosingLLM')}</li>
                          <li>{t('theProcess.furtherExplorations')}</li>
                        </ul>
                      </div>

                      {/* Phase 4 - Final Designs */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <span className="bg-teal-500 dark:bg-[#64ffda] text-white dark:text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                          <h3 className="text-gray-900 dark:text-white text-lg">{t('theProcess.finalDesigns')}</h3>
                        </div>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                          <li>{t('theProcess.implementation')}</li>
                        </ul>
                      </div>

                      {/* Phase 5 - Reflection */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <span className="bg-teal-500 dark:bg-[#64ffda] text-white dark:text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">5</span>
                          <h3 className="text-gray-900 dark:text-white text-lg">{t('theProcess.reflection')}</h3>
                        </div>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                          <li>{t('theProcess.userFeedback')}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
              {/* Research Section */}
              <div className="py-20">
                <div className="max-w-6xl mx-auto">
                  <div className="border-b border-gray-200 dark:border-gray-800">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      {t('research.title')}
                    </p>
                    <h1 className="text-xl text-gray-900 dark:text-white mb-3">{t('research.identifyingProblems')}</h1>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5">
                    <span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('research.podcast')}</span>{t('research.identifyingProblemsDescriptionPT1')}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('research.abilityToLearn')}</span>{t('research.identifyingProblemsDescriptionPT2')}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('research.amountOfChange')} </span>{t('research.identifyingProblemsDescriptionPT3')}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('research.identifyingProblemsDescriptionPT4')}</span>{t('research.whatTheyLearned')}.
                    <br></br>
                    <br></br>
                    <span>{t('research.withThisWebapp')}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('research.easilyTarget')} </span>{t('research.discussed')}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('research.relatedTopics')} </span>{t('research.touchedOn')}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('research.pinPoint')} </span>{t('research.skipAds')}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('research.skipAdsDescription')}</span></span>
                  </p>
                </div>
              </div>

              <div className="py-10">
                <div className="max-w-6xl mx-auto">
                  <div className="border-b border-gray-200 dark:border-gray-800">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">{t('research.title')}</p>
                    <h1 className="text-xl text-gray-900 dark:text-white mb-3">{t('research.competitorAnalysis')}</h1>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5">
                    <span>{t('research.competitorAnalysisDescriptionPT1')}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('research.competitorAnalysisDescriptionPT2')} </span>{t('research.competitorAnalysisDescriptionPT3')}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('research.competitorAnalysisDescriptionPT4')}</span></span>
                  </p>

                  {/* Competitor Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    <div className="bg-white dark:bg-[#112240] rounded-lg p-6 shadow-lg">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                          <span className="text-2xl"><img src="/images/podsqueeze.png" alt="Podsqueeze" className="w-12 h-12" /></span>
                        </div>
                        <h3 className="text-xl text-gray-900 dark:text-white">{t('research.podsqueeze')}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                        {t('research.podsqueezeDescription')}
                      </p>
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center gap-2 text-teal-600 dark:text-[#64ffda] mb-2">
                            <span className="text-lg">+</span>
                            <span className="text-sm uppercase tracking-wider">{t('research.podsqueezePros')}</span>
                          </div>
                          <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                            <li>+ {t('research.podsqueezePros1')}</li>
                            <li>+ {t('research.podsqueezePros2')}</li>
                            <li>+ {t('research.podsqueezePros3')}</li>
                          </ul>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 text-red-500 dark:text-red-400 mb-2">
                            <span className="text-lg">−</span>
                            <span className="text-sm uppercase tracking-wider">{t('research.podsqueezeCons')}</span>
                          </div>
                          <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                            <li>- {t('research.podsqueezeCons1')}</li>
                            <li>- {t('research.podsqueezeCons2')}</li>
                            <li>- {t('research.podsqueezeCons3')}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-[#112240] rounded-lg p-6 shadow-lg">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                          <span className="text-2xl"><img src="/images/audiograms.png" alt="Audiograms" className="w-12 h-12" /></span>
                        </div>
                        <h3 className="text-xl text-gray-900 dark:text-white">{t('research.audiograms')}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                        {t('research.audiogramsDescription')}
                      </p>
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center gap-2 text-teal-600 dark:text-[#64ffda] mb-2">
                            <span className="text-lg">+</span>
                            <span className="text-sm uppercase tracking-wider">{t('research.audiogramsPros')}</span>
                          </div>
                          <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                            <li>+ {t('research.audiogramsPros1')}</li>
                            <li>+ {t('research.audiogramsPros2')}</li>
                            <li>+ {t('research.audiogramsPros3')}</li>
                          </ul>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 text-red-500 dark:text-red-400 mb-2">
                            <span className="text-lg">−</span>
                            <span className="text-sm uppercase tracking-wider">Cons</span>
                          </div>
                          <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                            <li>- {t('research.audiogramsCons1')}</li>
                            <li>- {t('research.audiogramsCons2')}</li>
                            <li>- {t('research.audiogramsCons3')}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Synthesis Section */}
              <div className="py-20">
                <div className="max-w-6xl mx-auto">
                  <div className="border-b border-gray-800">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      {t('synthesis.title')}
                    </p>
                    <h1 className="text-xl text-gray-900 dark:text-white mb-3">{t('synthesis.userPersona')}</h1>
                  </div>  
                  <p className="text-gray-400 leading-relaxed mt-5 mb-10">
                    <span>{t('synthesis.userPersonaDescriptionPT1')}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('synthesis.userPersonaDescriptionPT2')}</span>{t('synthesis.userPersonaDescriptionPT3')}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('synthesis.userPersonaDescriptionPT4')}</span>{t('synthesis.userPersonaDescriptionPT5')}</span>
                  </p>

                  {/* Persona Card */}
                  <div className="bg-gray-100 dark:bg-[#112240] rounded-lg p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Left Column - Profile */}
                      <div className="md:col-span-1">
                        <div className="flex flex-col items-start">
                          <div className="w-24 h-24 bg-gray-200 dark:bg-gray-800 rounded-full mb-4 overflow-hidden">
                            <img src="/images/alex-persona.png" alt="Alex" className="w-full h-full object-cover" />
                          </div>
                          <h2 className="text-xl text-gray-900 dark:text-white mb-1">{t('synthesis.name')}</h2>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{t('synthesis.nameDescription')}</p>
                          
                          <div className="space-y-4 w-full">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 flex items-center justify-center">
                                  <span className="text-teal-600 dark:text-[#64ffda]">📍</span>
                                </div>
                                <span className="text-gray-500 text-sm uppercase">{t('synthesis.location')}</span>
                              </div>
                              <p className="text-gray-900 dark:text-white ml-8">{t('synthesis.sanfrancisco')}</p>
                            </div>

                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 flex items-center justify-center">
                                  <span className="text-teal-600 dark:text-[#64ffda]">🎓</span>
                                </div>
                                <span className="text-gray-500 text-sm uppercase">{t('synthesis.occupation')}</span>
                              </div>
                              <p className="text-gray-900 dark:text-white ml-8">{t('synthesis.swe')}</p>
                            </div>

                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 flex items-center justify-center">
                                  <span className="text-teal-600 dark:text-[#64ffda]">⭐</span>
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
                              <span className="text-teal-600 dark:text-[#64ffda] text-xl">⚡</span>
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
                              <span className="text-teal-600 dark:text-[#64ffda] text-xl">❓</span>
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
                              <span className="text-teal-600 dark:text-[#64ffda] text-xl">⚠️</span>
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
                          {t('synthesis.title')}
                        </p>
                        <h1 className="text-xl text-gray-900 dark:text-white mb-3">{t('synthesis.userJourney')}</h1>
                      </div> 
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5 mb-10">
                        <span>{t('synthesis.userJourneyDescriptionPT1')}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('synthesis.userJourneyDescriptionPT2')}</span>{t('synthesis.userJourneyDescriptionPT3')}</span>
                      </p>
                      <h3 className="text-gray-600 dark:text-gray-400 mb-12"><span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('synthesis.scenarios')}</span> {t('synthesis.scenario1')}</h3>

                      {/* Journey Timeline */}
                      <div className="relative my-20">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-800 top-32 transform -translate-y-1/2"></div>

                        {/* Journey Steps */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                          {/* Starting */}
                          <div className="relative">
                            <div className="h-24">
                              <h4 className="text-gray-900 dark:text-white text-lg mb-2">{t('synthesis.starting')}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {t('synthesis.startingDescription')}
                              </p>
                            </div>
                            <div className="hidden md:block absolute left-1/2 top-32 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-4 h-4 rounded-full bg-teal-500 dark:bg-[#64ffda]"></div>
                            </div>
                            <div className="mt-8 md:mt-16">
                              <p className="text-sm text-teal-600 dark:text-[#64ffda] mb-2">{t('synthesis.thought')}:</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">"{t('synthesis.startingThought')}"</p>
                              <p className="text-sm text-teal-600 dark:text-[#64ffda] mb-2">{t('synthesis.action')}:</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{t('synthesis.startingAction')}</p>
                            </div>
                          </div>

                          {/* Trying */}
                          <div className="relative">
                            <div className="h-24">
                              <h4 className="text-gray-900 dark:text-white text-lg mb-2">{t('synthesis.trying')}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {t('synthesis.tryingDescription')}
                              </p>
                            </div>
                            <div className="hidden md:block absolute left-1/2 top-32 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-4 h-4 rounded-full bg-teal-500 dark:bg-[#64ffda]"></div>
                            </div>
                            <div className="mt-8 md:mt-16">
                              <p className="text-sm text-teal-600 dark:text-[#64ffda] mb-2">{t('synthesis.thought')}:</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">"{t('synthesis.tryingThought')}"</p>
                              <p className="text-sm text-teal-600 dark:text-[#64ffda] mb-2">{t('synthesis.action')}:</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{t('synthesis.tryingAction')}</p>
                            </div>
                          </div>

                          {/* Struggling */}
                          <div className="relative">
                            <div className="h-24">
                              <h4 className="text-gray-900 dark:text-white text-lg mb-2">{t('synthesis.struggling')}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {t('synthesis.strugglingDescription')}
                              </p>
                            </div>
                            <div className="hidden md:block absolute left-1/2 top-32 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-4 h-4 rounded-full bg-teal-500 dark:bg-[#64ffda]"></div>
                            </div>
                            <div className="mt-8 md:mt-16">
                              <p className="text-sm text-teal-600 dark:text-[#64ffda] mb-2">{t('synthesis.thought')}:</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">"{t('synthesis.strugglingThought')}"</p>
                              <p className="text-sm text-teal-600 dark:text-[#64ffda] mb-2">{t('synthesis.action')}:</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{t('synthesis.strugglingAction')}</p>
                            </div>
                          </div>

                          {/* Seeking Solution */}
                          <div className="relative">
                            <div className="h-24">
                              <h4 className="text-gray-900 dark:text-white text-lg mb-2">{t('synthesis.seekingSolution')}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {t('synthesis.seekingSolutionDescription')}
                              </p>
                            </div>
                            <div className="hidden md:block absolute left-1/2 top-32 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-4 h-4 rounded-full bg-teal-500 dark:bg-[#64ffda]"></div>
                            </div>
                            <div className="mt-8 md:mt-16">
                              <p className="text-sm text-teal-600 dark:text-[#64ffda] mb-2">{t('synthesis.thought')}:</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">"{t('synthesis.solutionThought')}"</p>
                              <p className="text-sm text-teal-600 dark:text-[#64ffda] mb-2">{t('synthesis.action')}:</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{t('synthesis.solutionAction')}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ideation Section */}
              <div className="py-10">
                <div className="max-w-6xl mx-auto">
                  <div className="border-b border-gray-800">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      {t('ideation.title')}
                    </p>
                    <h1 className="text-xl text-gray-900 dark:text-white mb-3">{t('ideation.development')}</h1>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5 mb-10">
                    <span>{t('ideation.devPT1')}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('ideation.devPT2')}</span> {t('ideation.devPT3')} <span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('ideation.devPT4')}</span>{t('ideation.devPT5')}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('ideation.devPT6')}</span>{t('ideation.devPT7')}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('ideation.devPT8')}</span>{t('ideation.devPT9')}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('ideation.devPT10')}</span> {t('ideation.devPT11')} <span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('ideation.devPT12')}</span>{t('ideation.devPT13')}</span>
                    <br></br>
                    <br></br>
                    <span>{t('ideation.devPT14')}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('ideation.devPT15')}</span>{t('ideation.devPT16')} <span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('ideation.devPT17')}</span>{t('ideation.devPT18')}</span>
                  </p>

                  <div className="py-20">
                    <div className="max-w-6xl mx-auto">
                        <div className="border-b border-gray-200 dark:border-gray-800">
                          <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                            {t('ideation.title')}
                          </p>
                          <h1 className="text-xl text-gray-900 dark:text-white mb-3">{t('ideation.choosingLLM')}</h1>
                        </div>
                        <div className="mt-5 mb-10 hidden md:block">
                          <div className="relative h-96">
                            {llms.map((llm, index) => (
                              <div
                                key={llm.name}
                                className={`absolute inset-0 transition-opacity duration-500 ${
                                  index === currentLLM ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                }`}
                              >
                                <div className="bg-white dark:bg-[#112240] rounded-lg p-8 shadow-lg">
                                  <h3 className="text-2xl font-bold text-teal-600 dark:text-[#64ffda] mb-6">{llm.name}</h3>
                                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{llm.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6">
                            <div className="flex justify-center space-x-2">
                              {llms.map((_, index) => (
                                <div
                                  key={index}
                                  className="w-24 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                                >
                                  <div
                                    className={`h-full transition-all duration-500 ${
                                      index === currentLLM
                                        ? 'bg-teal-600 dark:bg-[#64ffda]'
                                        : completedBars.includes(index)
                                        ? 'bg-teal-600 dark:bg-[#64ffda]'
                                        : 'bg-gray-300 dark:bg-gray-600'
                                    }`}
                                    style={{ width: `${index === currentLLM ? progress : completedBars.includes(index) ? 100 : 0}%` }}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="border-b border-gray-200 dark:border-gray-800 pt-10">
                          <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                            {t('ideation.title')}  
                          </p>
                          <h1 className="text-xl text-gray-900 dark:text-white mb-3">{t('ideation.furtherExplorations')}</h1>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5 mb-10">
                          <span>{t('ideation.choosingLLMDescriptionPT1')}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('ideation.choosingLLMDescriptionPT2')}</span>{t('ideation.choosingLLMDescriptionPT3')}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('ideation.choosingLLMDescriptionPT4')}</span>{t('ideation.choosingLLMDescriptionPT5')}</span>
                        </p>
                    </div>
                  </div>

                  {/* Final Designs Section */}
                  <div className="py-20">
                    <div className="max-w-6xl mx-auto">
                      <div className="border-b border-gray-200 dark:border-gray-800">
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                            {t('finalDesigns.title')}
                        </p>
                        <h1 className="text-xl text-gray-900 dark:text-white mb-3">{t('finalDesigns.implementation')}</h1>
                      </div>
                      <div className="mt-10">
                        <div className="relative rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
                          <img
                            src="/images/podcast-screenshot.png"
                            alt="Podcast Visualizer Implementation"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-6 text-center text-sm">
                          {t("ideation.finalDescPT1")}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t("ideation.finalDescPT2")}</span> {t("ideation.finalDescPT3")}<span className="font-bold text-teal-600 dark:text-[#64ffda]">{t("ideation.finalDescPT4")}</span>{t("ideation.finalDescPT5")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Reflections Section */}
                  <div className="py-20">
                    <div className="max-w-6xl mx-auto">
                      <div className="border-b border-gray-200 dark:border-gray-800">
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                            {t('reflection.title')}
                        </p>
                        <h1 className="text-xl text-gray-900 dark:text-white mb-3">{t('reflection.userFeedback')}</h1>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5 mb-10">
                        <span><span className="font-bold text-teal-600 dark:text-[#64ffda]">{t('reflection.comingSoon')}</span></span>
                      </p>
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