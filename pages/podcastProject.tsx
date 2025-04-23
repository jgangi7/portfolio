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
      name: 'BART', 
      description: 'A powerful sequence-to-sequence model pre-trained on large text corpora, making it effective for text summarization tasks like extracting main points from transcripts. However, it is not able to understand the context of a complex and specific conversation. Additionally, it requires significant computational resources to run locally, has a maximum input length constraint of 1024 tokens, which was a major issue for this project.' 
    },
    { 
      name: 'Llama 2', 
      description: 'Meta\'s open-source large language model that offers impressive performance while being deployable locally through tools like Ollama. Its strengths include powerful reasoning capabilities suitable for extracting nuanced insights from conversational text, the ability to run completely offline with no API costs, and availability in various sizes to match your hardware capabilities (from 7B to 70B parameters). Downsides were significant hardware requirements, slower inference speeds compared to cloud APIs, and occasionally less consistent formatting in outputs compared to other models.' 
    },
    { 
      name: 'Mistral-7B', 
      description: 'Google\'s instruction-tuned version of the T5 architecture, specifically designed to follow instructions in natural language. However, it has notable drawbacks: the XXL variant can be slow through the free API tier with potential queue times, may struggle with highly domain-specific content without custom fine-tuning, and can occasionally produce overly concise summaries that miss nuanced points in complex discussions.' 
    },
    { 
      name: 'Grok-Beta', 
      description: 'A newer conversational AI model developed by xAI, designed to compete with models like GPT-4 and Claude. Its primary strengths include excellent understanding of conversational context making it well-suited for podcast transcript analysis, strong instruction-following capabilities allowing for precise extraction of main points and related topics. This was the model I used for this project and it worked the best in my opinion.' 
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
                Podcast Visualizer
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 text-center max-w-3xl">
                Transform audio/video content into a short and easy to digest synopsis and a visual map of the podcast.
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
              <div className="border-b border-gray-200 dark:border-gray-800">
                <p className="text-sm uppercase tracking-wider text-gray-900 dark:text-white mb-2">
                  PROCESS HIGHLIGHTS
                </p>
                <h1 className="text-3xl text-gray-900 dark:text-white mb-3">
                  Part One - Exploration
                </h1>
              </div>

              {/* Project Overview Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 my-10">
                {/* Timeline */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Timeline</h2>
                  <p className="text-gray-600 dark:text-gray-400">March - April 2025</p>
                </div>

                {/* Disciplines */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Disciplines</h2>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>JavaScript Logic</li>
                    <li>Python Development</li>
                    <li>User Experience Design</li>
                    <li>Data Visualization</li>
                  </ul>
                </div>

                {/* Responsibilities */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Responsibilities</h2>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>UX Research</li>
                    <li>Data Processing</li>
                    <li>Prototyping</li>
                    <li>Fullstack Development</li>
                  </ul>
                </div>

                {/* Tools */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tools</h2>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <FaPython className="text-lg text-gray-700 dark:text-white" />
                      Python
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <FaBrain className="text-lg text-gray-700 dark:text-white" />
                      LLM
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <SiJavascript className="text-lg text-gray-700 dark:text-white" />
                      JavaScript
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm flex items-center gap-2">
                      <a
                        href="https://github.com/jgangi7/podcast-visualizer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-[#64ffda] transition-colors inline-flex items-center gap-2"
                      >
                        <FaGithub className="text-xl" />
                        <span>View on GitHub</span>
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
                        Podcasts are increasingly popular, and rightfully so. They are a great way to consume information and learn new and complex topics. However, they take a large amount of time to listen to, and it can be hard to remember what you learned.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl text-gray-900 dark:text-white mb-6">Solution</h2>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Create an summarization and visualization tool that turns podcast audio/video into a short and easy to digest synopsis and a visual map of the podcast.
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
                    <span className="font-bold text-teal-600 dark:text-[#64ffda]">The goal</span> of this project was to help solve an issue I thought others might have. As well as <span className="font-bold text-teal-600 dark:text-[#64ffda]">challenge myself</span> to work with a large language model api. For this I chose to use <span className="font-bold text-teal-600 dark:text-[#64ffda]">Grok-Beta</span> because of its proven ability to understand large amounts of conversational text and its ability to understand complex topics. AI is the future, everyone knows this, and I wanted show and prove to myself that I am able to work with it and understand how to <span className="font-bold text-teal-600 dark:text-[#64ffda]">integrate it and add value</span>.
                  </p>
                </div>
              </div>

              {/* Process Section */}
              <div className="py-20">
                <div className="max-w-6xl mx-auto">
                  <div className="border-b border-gray-200 dark:border-gray-800">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">THE PROCESS</p>
                    <h1 className="text-xl text-gray-900 dark:text-white mb-3">Development Timeline</h1>
                  </div>
                  <div className="mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                      {/* Phase 1 - Research */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <span className="bg-teal-500 dark:bg-[#64ffda] text-white dark:text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                          <h3 className="text-gray-900 dark:text-white text-lg">Research</h3>
                        </div>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                          <li>Identifying Problems</li>
                          <li>Competitor Analysis</li>
                        </ul>
                      </div>

                      {/* Phase 2 - Synthesis */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <span className="bg-teal-500 dark:bg-[#64ffda] text-white dark:text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                          <h3 className="text-gray-900 dark:text-white text-lg">Synthesis</h3>
                        </div>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                          <li>User Persona</li>
                          <li>User Journey</li>
                        </ul>
                      </div>

                      {/* Phase 3 - Ideation */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <span className="bg-teal-500 dark:bg-[#64ffda] text-white dark:text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                          <h3 className="text-gray-900 dark:text-white text-lg">Ideation</h3>
                        </div>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                          <li>Developing a Solution</li>
                          <li>Choosing an LLM</li>
                          <li>Further Explorations</li>
                        </ul>
                      </div>

                      {/* Phase 4 - Final Designs */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <span className="bg-teal-500 dark:bg-[#64ffda] text-white dark:text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                          <h3 className="text-gray-900 dark:text-white text-lg">Final Designs</h3>
                        </div>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                          <li>Implementation</li>
                        </ul>
                      </div>

                      {/* Phase 5 - Reflection */}
                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <span className="bg-teal-500 dark:bg-[#64ffda] text-white dark:text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">5</span>
                          <h3 className="text-gray-900 dark:text-white text-lg">Reflection</h3>
                        </div>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                          <li>User Feedback</li>
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
                      RESEARCH
                    </p>
                    <h1 className="text-xl text-gray-900 dark:text-white mb-3">Identifying Problems</h1>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5">
                    <span className="font-bold text-teal-600 dark:text-[#64ffda]">Podcasts</span> are my favorite way to consume information. I love the opitons of audio and video and the <span className="font-bold text-teal-600 dark:text-[#64ffda]">ability to learn</span> new and complex topics that I am interested in or have never heard of before. I cant tell you the <span className="font-bold text-teal-600 dark:text-[#64ffda]">amount of change </span>I have taken from podcasts and brought into my own life. Whether that be a new way of thinking about a international issue, a new hobby, or any other small piece of information that I can take with me. However, they take a large amount of time to listen to, and it can be hard to remember what you learned. <span className="font-bold text-teal-600 dark:text-[#64ffda]">So I wanted to create a tool that would help me and others like me to get the most out of podcasts and retain </span>what they learned.
                    <br></br>
                    <br></br>
                    <span>With this webapp users can <span className="font-bold text-teal-600 dark:text-[#64ffda]">easily get am idea of the larger topics</span> being discussed as well as the <span className="font-bold text-teal-600 dark:text-[#64ffda]">related topics</span> touched on. Helping reduce the amount of time it would take to understand the conversation. I also provided a full transcript so if there is a particular quote or word that a user is looking for you can easily <span className="font-bold text-teal-600 dark:text-[#64ffda]">pin point when in the conversation it was spoken.</span> Lastly, because we are obtaining the transcript directly from the youtube api we can <span className="font-bold text-teal-600 dark:text-[#64ffda]">skip over any ads</span> that may be interjected into the pod. </span>
                  </p>
                </div>
              </div>

              <div className="py-10">
                <div className="max-w-6xl mx-auto">
                  <div className="border-b border-gray-200 dark:border-gray-800">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">RESEARCH</p>
                    <h1 className="text-xl text-gray-900 dark:text-white mb-3">Competitor Analysis</h1>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5">
                    <span>I wanted to see what other tools were out there that could <span className="font-bold text-teal-600 dark:text-[#64ffda]">help me and others like me to get the most out of podcasts and retain what they learned.</span> I found a few tools that I thought were interesting and worth looking into. But ultimately I wanted to create my own tool that would be <span className="font-bold text-teal-600 dark:text-[#64ffda]">tailored to my needs</span> and <span className="font-bold text-teal-600 dark:text-[#64ffda]">solve the identified problem.</span></span>
                  </p>

                  {/* Competitor Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    <div className="bg-white dark:bg-[#112240] rounded-lg p-6 shadow-lg">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                          <span className="text-2xl"><img src="/images/podsqueeze.png" alt="Podsqueeze" className="w-12 h-12" /></span>
                        </div>
                        <h3 className="text-xl text-gray-900 dark:text-white">Podsqueeze</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                        Podsqueeze uses AI to streamline podcast content creation, generating visualizers, transcripts, and timestamps to save time and enhance listener engagement.
                      </p>
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center gap-2 text-teal-600 dark:text-[#64ffda] mb-2">
                            <span className="text-lg">+</span>
                            <span className="text-sm uppercase tracking-wider">Pros</span>
                          </div>
                          <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                            <li>- AI cuts podcast post-production time, easing creators' time commitment</li>
                            <li>- Timestamps, show notes improve episode searchability for listeners</li>
                            <li>- Visual content boosts engagement, reducing reliance on ads</li>
                          </ul>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 text-red-500 dark:text-red-400 mb-2">
                            <span className="text-lg">−</span>
                            <span className="text-sm uppercase tracking-wider">Cons</span>
                          </div>
                          <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                            <li>- Over-reliance on visuals may skew content to short snippets</li>
                            <li>- Customizing visualizers, clips can still be time-intensive</li>
                            <li>- AI struggles with non-standard podcasts, limiting searchability</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-[#112240] rounded-lg p-6 shadow-lg">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                          <span className="text-2xl"><img src="/images/audiograms.png" alt="Audiograms" className="w-12 h-12" /></span>
                        </div>
                        <h3 className="text-xl text-gray-900 dark:text-white">Audiograms</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                        AI-powered tools simplify audiogram and video clip creation, improving podcast accessibility and promotion with customizable, shareable content.
                      </p>
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center gap-2 text-teal-600 dark:text-[#64ffda] mb-2">
                            <span className="text-lg">+</span>
                            <span className="text-sm uppercase tracking-wider">Pros</span>
                          </div>
                          <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                            <li>- AI audiogram maker reduces clip creation time for podcasters</li>
                            <li>- Auto-generated captions, timestamps enhance episode searchability on social media</li>
                            <li>- Customizable templates boost engagement, lessening ad reliance for promotion</li>
                          </ul>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 text-red-500 dark:text-red-400 mb-2">
                            <span className="text-lg">−</span>
                            <span className="text-sm uppercase tracking-wider">Cons</span>
                          </div>
                          <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                            <li>- Over-focus on short clips may prioritize virality over episode depth</li>
                            <li>- Customizing audiograms can be time-consuming for unique branding needs</li>
                            <li>- AI may struggle with complex audio, limiting searchability accuracy</li>
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
                      SYNTHESIS
                    </p>
                    <h1 className="text-xl text-gray-900 dark:text-white mb-3">User Persona</h1>
                  </div>  
                  <p className="text-gray-400 leading-relaxed mt-5 mb-10">
                    <span>I developed a user persona to identify the ideal user who would gain the most value this tool. I wanted to create a user persona that would be a <span className="font-bold text-teal-600 dark:text-[#64ffda]">typical podcast listener</span> who would be stetched for time and looking for a way to <span className="font-bold text-teal-600 dark:text-[#64ffda]">get the most out of their podcasts</span>. This process allowed me to focus on the goals, needs, and frustrations of the ideal beneficiary. </span>
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
                          <h2 className="text-xl text-gray-900 dark:text-white mb-1">Alex Turner | he/him | 28</h2>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Tech Professional & Continuous Learner</p>
                          
                          <div className="space-y-4 w-full">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 flex items-center justify-center">
                                  <span className="text-teal-600 dark:text-[#64ffda]">📍</span>
                                </div>
                                <span className="text-gray-500 text-sm uppercase">LOCATION</span>
                              </div>
                              <p className="text-gray-900 dark:text-white ml-8">San Francisco, CA</p>
                            </div>

                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 flex items-center justify-center">
                                  <span className="text-teal-600 dark:text-[#64ffda]">🎓</span>
                                </div>
                                <span className="text-gray-500 text-sm uppercase">OCCUPATION</span>
                              </div>
                              <p className="text-gray-900 dark:text-white ml-8">Software Engineer</p>
                            </div>

                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 flex items-center justify-center">
                                  <span className="text-teal-600 dark:text-[#64ffda]">⭐</span>
                                </div>
                                <span className="text-gray-500 text-sm uppercase">EXPERIENCE</span>
                              </div>
                              <p className="text-gray-900 dark:text-white ml-8">4+ Years</p>
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
                              <li>• Stay updated with tech trends and industry knowledge</li>
                              <li>• Maximize learning from educational podcasts while not giving up large amounts of time</li>
                              <li>• Balance continuous learning with busy work schedule</li>
                            </ul>
                          </div>

                          {/* Needs Card */}
                          <div className="bg-white dark:bg-[#1a2f55] rounded-lg p-6">
                            <div className="flex items-center gap-2 mb-4">
                              <span className="text-teal-600 dark:text-[#64ffda] text-xl">❓</span>
                              <h3 className="text-gray-900 dark:text-white text-lg">Needs</h3>
                            </div>
                            <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                              <li>• Quick access to key insights from long-form content produced by experts</li>
                              <li>• Easy way to review and retain important information and refernce it later</li>
                              <li>• Tool that integrates with existing podcast platforms that large content creators use</li>
                            </ul>
                          </div>

                          {/* Pain Points Card */}
                          <div className="bg-white dark:bg-[#1a2f55] rounded-lg p-6">
                            <div className="flex items-center gap-2 mb-4">
                              <span className="text-teal-600 dark:text-[#64ffda] text-xl">⚠️</span>
                              <h3 className="text-gray-900 dark:text-white text-lg">Pain Points</h3>
                            </div>
                            <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                              <li>• Limited time to listen to full podcast episodes</li>
                              <li>• Difficulty remembering key points from episodes</li>
                              <li>• Frustration with finding specific topics in long episodes</li>
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
                        <span>Next is the user journey, which focuses on Alex's current experience as a software engineer collaborating remotely/in person, and being strained for time to discover new idea and keep up with trends. He knows that in the ever changing field that is tech he has to keep up but <span className="font-bold text-teal-600 dark:text-[#64ffda]">struggles to find the time to commit to a long form conversation</span> that isn't a meeting in a professional setting. </span>
                      </p>
                      <h3 className="text-gray-600 dark:text-gray-400 mb-12"><span className="font-bold text-teal-600 dark:text-[#64ffda]">Scenario:</span> Alex is stressed for time and looking for a way to get the most out of his podcasts during his commute on the train to the office. He only has 15 minutes to listen to a podcast and wants to make the most of it.</h3>

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
                                Alex discovers an interesting tech podcast creator and wants to stay updated with industry trends.
                              </p>
                            </div>
                            <div className="hidden md:block absolute left-1/2 top-32 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-4 h-4 rounded-full bg-teal-500 dark:bg-[#64ffda]"></div>
                            </div>
                            <div className="mt-8 md:mt-16">
                              <p className="text-sm text-teal-600 dark:text-[#64ffda] mb-2">Thought:</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">"This could be a great way to learn while commuting!"</p>
                              <p className="text-sm text-teal-600 dark:text-[#64ffda] mb-2">Action:</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Subscribes to several tech podcasts and starts downloading episodes.</p>
                            </div>
                          </div>

                          {/* Trying */}
                          <div className="relative">
                            <div className="h-24">
                              <h4 className="text-gray-900 dark:text-white text-lg mb-2">Trying</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Attempts to incorporate podcast listening into daily routine but struggles to watch the newest episodes each day.
                              </p>
                            </div>
                            <div className="hidden md:block absolute left-1/2 top-32 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-4 h-4 rounded-full bg-teal-500 dark:bg-[#64ffda]"></div>
                            </div>
                            <div className="mt-8 md:mt-16">
                              <p className="text-sm text-teal-600 dark:text-[#64ffda] mb-2">Thought:</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">"These episodes are longer than my commute time."</p>
                              <p className="text-sm text-teal-600 dark:text-[#64ffda] mb-2">Action:</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Tries listening at increased speed and taking notes.</p>
                            </div>
                          </div>

                          {/* Struggling */}
                          <div className="relative">
                            <div className="h-24">
                              <h4 className="text-gray-900 dark:text-white text-lg mb-2">Struggling</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Finds it difficult to retain information and manage time effectively. As a result, he is frustrated and feeling uninformed.
                              </p>
                            </div>
                            <div className="hidden md:block absolute left-1/2 top-32 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-4 h-4 rounded-full bg-teal-500 dark:bg-[#64ffda]"></div>
                            </div>
                            <div className="mt-8 md:mt-16">
                            <p className="text-sm text-teal-600 dark:text-[#64ffda] mb-2">Thought:</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">"I'm missing key points and can't remember everything."</p>
                              <p className="text-sm text-teal-600 dark:text-[#64ffda] mb-2">Action:</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Searches for tools to help with podcast consumption.</p>
                            </div>
                          </div>

                          {/* Seeking Solution */}
                          <div className="relative">
                            <div className="h-24">
                              <h4 className="text-gray-900 dark:text-white text-lg mb-2">Seeking Solution</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Looking for tools to optimize podcast learning experience. As current tools are not meeting his needs.
                              </p>
                            </div>
                            <div className="hidden md:block absolute left-1/2 top-32 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-4 h-4 rounded-full bg-teal-500 dark:bg-[#64ffda]"></div>
                            </div>
                            <div className="mt-8 md:mt-16">
                              <p className="text-sm text-teal-600 dark:text-[#64ffda] mb-2">Thought:</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">"There must be a better way to consume this content."</p>
                              <p className="text-sm text-teal-600 dark:text-[#64ffda] mb-2">Action:</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Ready to try a solution that addresses his specific needs.</p>
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
                      IDEATION
                    </p>
                    <h1 className="text-xl text-gray-900 dark:text-white mb-3">Developing the Solution</h1>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5 mb-10">
                    <span>My approach to developing the solution was to <span className="font-bold text-teal-600 dark:text-[#64ffda]">break down the problem</span> and <span className="font-bold text-teal-600 dark:text-[#64ffda]">identify the core needs</span> of the user. I then <span className="font-bold text-teal-600 dark:text-[#64ffda]">explored various ways</span> to address these needs and <span className="font-bold text-teal-600 dark:text-[#64ffda]">evaluate potential solutions</span>. I landed on a <span className="font-bold text-teal-600 dark:text-[#64ffda]">web app</span> that would allow the user to <span className="font-bold text-teal-600 dark:text-[#64ffda]">quickly get an overview of the podcast</span> and <span className="font-bold text-teal-600 dark:text-[#64ffda]">search for specific topics</span> within the podcast.</span>
                    <br></br>
                    <br></br>
                    <span>I then <span className="font-bold text-teal-600 dark:text-[#64ffda]">decided that utalizing a LLM would be the best way</span> to help me build a user's experience and <span className="font-bold text-teal-600 dark:text-[#64ffda]">show what someone might want out of the tool</span> such as a summary of the podcast, a list of topics discussed, a visualization chart, and a transcript of the podcast.</span>
                  </p>

                  <div className="py-20">
                    <div className="max-w-6xl mx-auto">
                        <div className="border-b border-gray-200 dark:border-gray-800">
                          <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                            IDEATION
                          </p>
                          <h1 className="text-xl text-gray-900 dark:text-white mb-3">Choosing an LLM</h1>
                        </div>
                        <div className="mt-5 mb-10">
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
                            IDEATION
                          </p>
                          <h1 className="text-xl text-gray-900 dark:text-white mb-3">Further Explorations</h1>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5 mb-10">
                          <span>Although I am very happy with the approach and results of this project, I would like to explore a few more ideas in the future. Including a way to <span className="font-bold text-teal-600 dark:text-[#64ffda]">add chapters to a podcast</span> that might not have them. As adding chapters is a feature that most creators do not currently provide. I would also like to explore other ways to <span className="font-bold text-teal-600 dark:text-[#64ffda]">visualize the data</span> that is generated from the podcast. Currently Graphviz accomplishes this to an extent but I would like to see if there are better ways to visualize the data. Lastly, I would want to rethink how I have designed the UI to make it more user friendly and accessible.</span>
                        </p>
                    </div>
                  </div>

                  {/* Final Designs Section */}
                  <div className="py-20">
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
                            src="/images/podcast-screenshot.png"
                            alt="Podcast Visualizer Implementation"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-6 text-center text-sm">
                          The final implementation <span className="font-bold text-teal-600 dark:text-[#64ffda]"> empty state</span> of the podcast visualizer. To see usage please see the <span className="font-bold text-teal-600 dark:text-[#64ffda]">demo</span> section at the top of the page.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Reflections Section */}
                  <div className="py-20">
                    <div className="max-w-6xl mx-auto">
                      <div className="border-b border-gray-200 dark:border-gray-800">
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                            REFLECTIONS
                        </p>
                        <h1 className="text-xl text-gray-900 dark:text-white mb-3">User Feedback</h1>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-5 mb-10">
                        <span><span className="font-bold text-teal-600 dark:text-[#64ffda]">Coming soon!</span></span>
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