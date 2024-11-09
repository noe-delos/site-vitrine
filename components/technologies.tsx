'use client';

import { FlipWords } from '@/components/acernity/flip-words';
import { TypingAnimation } from '@/components/acernity/magic-type-effect';
import { WordFadeIn } from '@/components/acernity/word-fade-in';
import { Icon } from '@iconify/react';
import {
  ArrowRight,
  Bot,
  Cloud,
  Database,
  Server,
  Shield,
  Workflow,
  Zap,
} from 'lucide-react';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface ContentItem {
  title: ReactNode;
  titleImg: string;
  subtitle: string;
  description: ReactNode;
  rightContent: ReactNode;
}

const FeatureList = ({ items }: any) => (
  <div className="space-y-4">
    {items.map((item: any, index: any) => (
      <div key={index} className="space-y-1">
        <div className="flex items-center gap-2">
          <ArrowRight className="w-4 h-4 text-gray-500" />
          <span className="font-bold bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-clip-text text-transparent">
            {item.title}
          </span>
        </div>
        <p className="text-gray-600 text-sm pl-6">{item.description}</p>
      </div>
    ))}
  </div>
);

function PerformanceAnalyticsCard({ dictionary }: { dictionary: any }) {
  const features = {
    column1: [
      {
        title: dictionary.technologies.performance.instant_loading.title,
        description:
          dictionary.technologies.performance.instant_loading.description,
      },
    ],
    column2: [
      {
        title: dictionary.technologies.performance.realtime_analytics.title,
        description:
          dictionary.technologies.performance.realtime_analytics.description,
      },
    ],
    column3: [
      {
        title: dictionary.technologies.performance.advanced_monitoring.title,
        description:
          dictionary.technologies.performance.advanced_monitoring.description,
      },
    ],
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200/50">
      <h3 className="text-2xl font-extrabold flex items-center gap-3 mb-6">
        <Shield className="w-7 h-7 text-gray-700" />
        <span className="bg-gradient-to-b from-gray-300 to-black bg-clip-text text-transparent tracking-wide">
          {dictionary.technologies.performance.title}
        </span>
      </h3>

      <div className="grid grid-cols-3 gap-6">
        <div className="p-4 rounded-lg bg-gradient-to-br from-gray-50 to-white">
          <FeatureList items={features.column1} />
        </div>
        <div className="p-4 rounded-lg bg-gradient-to-br from-gray-50 to-white">
          <FeatureList items={features.column2} />
        </div>
        <div className="p-4 rounded-lg bg-gradient-to-br from-gray-50 to-white">
          <FeatureList items={features.column3} />
        </div>
      </div>
    </div>
  );
}

const Technologies = ({ dictionary }: { dictionary: any }) => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  const content: ContentItem[] = [
    {
      title: (
        <p className="text-4xl font-bold">
          {dictionary.technologies.data.title.part1}{' '}
          <span className="bg-gradient-to-r from-black to-green-500 inline-block text-transparent bg-clip-text">
            {dictionary.technologies.data.title.part2}
          </span>
        </p>
      ),
      titleImg: '/technologies/scaleway1.png',
      subtitle: dictionary.technologies.data.subtitle,
      rightContent: (
        <div className="isolate relative w-full h-full">
          <video
            src="/technologies/supabase.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-xl z-30"
          />
          <img
            src="/technologies/supabase.png"
            className="size-20 rounded-xl absolute z-40 -top-10 -right-10"
          />
        </div>
      ),
      description: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                <Database className="w-5 h-5 text-green-600" />
                {dictionary.technologies.data.infrastructure.title}
              </h3>
              <ul className="space-y-3">
                {dictionary.technologies.data.infrastructure.features.map(
                  (feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 group">
                      <ArrowRight className="w-4 h-4 text-green-500 transition-transform group-hover:translate-x-1" />
                      <span>{feature}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-green-100">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-green-600" />
                {dictionary.technologies.data.security.title}
              </h3>
              <ul className="space-y-3">
                {dictionary.technologies.data.security.features.map(
                  (feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 group">
                      <ArrowRight className="w-4 h-4 text-green-500 transition-transform group-hover:translate-x-1" />
                      <span>{feature}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
          <div className="relative p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-800 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#131313] to-[#424242]" />

            <div className="absolute inset-0 overflow-hidden -top-12">
              <img
                src="/technologies/scaleway5.png"
                alt="Background"
                className="size-96 opacity-15 object-cover"
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-gray-100 flex items-center gap-2 mb-4">
                <Workflow className="w-5 h-5 text-green-400" />
                {dictionary.technologies.data.realtime.title}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <ul className="space-y-3">
                  {dictionary.technologies.data.realtime.features
                    .slice(0, 2)
                    .map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-3 group">
                        <ArrowRight className="w-4 h-4 text-green-400 transition-transform group-hover:translate-x-1" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                </ul>
                <ul className="space-y-3">
                  {dictionary.technologies.data.realtime.features
                    .slice(2)
                    .map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-3 group">
                        <ArrowRight className="w-4 h-4 text-green-400 transition-transform group-hover:translate-x-1" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: (
        <TypingAnimation
          className="text-4xl font-bold text-black"
          duration={100}
          text={dictionary.technologies.ai.title}
        />
      ),
      titleImg: '/technologies/scaleway2.png',
      subtitle: dictionary.technologies.ai.subtitle,
      rightContent: (
        <div className="relative w-full h-full rounded-lg">
          <iframe
            src="https://player.vimeo.com/video/1015752276?h=2a0d0242ef&autoplay=1&loop=1&autopause=0&controls=false"
            style={{ width: '100%', height: '100%', borderRadius: 10 }}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className="rounded-xl"
          />
        </div>
      ),
      description: (
        <div className="space-y-6">
          <div className="relative p-6 bg-gradient-to-br from-purple-900 to-purple-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden left-60 -top-14">
              <img
                src="/technologies/scaleway5.webp"
                alt="Background"
                className="w-96 h-96 opacity-15 object-cover"
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                <Bot className="w-5 h-5 text-purple-500" />
                {dictionary.technologies.ai.solutions.title}
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <ul className="space-y-3">
                  {dictionary.technologies.ai.solutions.features
                    .slice(0, 2)
                    .map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-3 group">
                        <ArrowRight className="w-4 h-4 text-purple-500 transition-transform group-hover:translate-x-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                </ul>
                <ul className="space-y-3">
                  {dictionary.technologies.ai.solutions.features
                    .slice(2, 4)
                    .map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-3 group">
                        <ArrowRight className="w-4 h-4 text-purple-500 transition-transform group-hover:translate-x-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                </ul>
                <ul className="space-y-3">
                  {dictionary.technologies.ai.solutions.features
                    .slice(4)
                    .map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-3 group">
                        <ArrowRight className="w-4 h-4 text-purple-500 transition-transform group-hover:translate-x-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-purple-600" />
                {dictionary.technologies.ai.infrastructure.title}
              </h3>
              <ul className="space-y-3">
                {dictionary.technologies.ai.infrastructure.features.map(
                  (feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 group">
                      <ArrowRight className="w-4 h-4 text-purple-500 transition-transform group-hover:translate-x-1" />
                      <span>{feature}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                <Server className="w-5 h-5 text-purple-600" />
                {dictionary.technologies.ai.performance.title}
              </h3>
              <ul className="space-y-3">
                {dictionary.technologies.ai.performance.features.map(
                  (feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 group">
                      <ArrowRight className="w-4 h-4 text-purple-500 transition-transform group-hover:translate-x-1" />
                      <span>{feature}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: <WordFadeIn words={dictionary.technologies.sites.title} />,
      titleImg: '/technologies/scaleway4.png',
      subtitle: dictionary.technologies.sites.subtitle,
      rightContent: (
        <div className="relative w-full h-full rounded-lg">
          <img
            src="https://cdn.dribbble.com/userupload/12246160/file/original-21ce109ee20be8d23fe7400e46a449a4.jpg?resize=1024x768"
            alt="Next.js Benefits"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      ),
      description: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 overflow-hidden bg-gradient-to-br from-black via-[#393939] to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-600/50 hover:border-gray-500 relative backdrop-blur-sm">
              <div className="absolute inset-0 overflow-hidden -top-5 left-5">
                <img
                  src="/technologies/next1.png"
                  alt="Background"
                  className="size-60 opacity-15 object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 to-gray-900/20 pointer-events-none" />
              <h3 className="text-lg font-semibold text-gray-100 flex items-center gap-2 mb-4 relative">
                <Zap className="w-5 h-5 text-gray-300" />
                {dictionary.technologies.sites.nextjs.title}
              </h3>
              <ul className="space-y-3 relative">
                {dictionary.technologies.sites.nextjs.features.map(
                  (feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 group">
                      <ArrowRight className="w-4 h-4 text-gray-400 transition-transform group-hover:translate-x-1" />
                      <span className="text-gray-300 group-hover:text-gray-200 transition-colors">
                        {feature}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-black via-[#393939] to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-600/50 hover:border-gray-500 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 overflow-hidden top-0 left-10">
                <img
                  src="/technologies/next2.png"
                  alt="Background"
                  className="size-48 opacity-20 object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 to-gray-900/20 pointer-events-none" />
              <h3 className="text-lg font-semibold text-gray-100 flex items-center gap-2 mb-4 relative">
                <Workflow className="w-5 h-5 text-gray-300" />
                {dictionary.technologies.sites.optimization.title}
              </h3>
              <ul className="space-y-3 relative">
                {dictionary.technologies.sites.optimization.features.map(
                  (feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 group">
                      <ArrowRight className="w-4 h-4 text-gray-400 transition-transform group-hover:translate-x-1" />
                      <span className="text-gray-300 group-hover:text-gray-200 transition-colors">
                        {feature}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
          <PerformanceAnalyticsCard dictionary={dictionary} />
        </div>
      ),
    },
    {
      title: (
        <h1 className="text-4xl m-0 p-0 font-bold">
          {dictionary.technologies.deployment.title.part1}{' '}
          <span className="bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
            {dictionary.technologies.deployment.title.part2}
          </span>{' '}
          {dictionary.technologies.deployment.title.part3}{' '}
          <span className="border-b-2 border-blue-500 -mb-2">
            {dictionary.technologies.deployment.title.part4}
          </span>{' '}
          {dictionary.technologies.deployment.title.part5}
        </h1>
      ),
      titleImg: '/technologies/scaleway3.png',
      subtitle: dictionary.technologies.deployment.subtitle,
      rightContent: (
        <div className="relative w-full h-full">
          <img
            src="https://cdn.dribbble.com/userupload/17341175/file/original-a6085175e674b05fe0bd4fe59f2a553d.png?resize=1024x615"
            alt="Scaleway Cloud"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      ),
      description: (
        <div className="space-y-6">
          <div className="relative p-6 bg-gradient-to-br from-blue-800 to-blue-400 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden z-50 -top-5 left-96">
              <img
                src="/technologies/scaleway6.png"
                alt="Background"
                className="size-[17rem] z-50 opacity-15 object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
              <Cloud className="w-5 h-5 text-white" />
              {dictionary.technologies.deployment.cloud.title}
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <ul className="space-y-3">
                {dictionary.technologies.deployment.cloud.features
                  .slice(0, 2)
                  .map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 group">
                      <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
              </ul>
              <ul className="space-y-3">
                {dictionary.technologies.deployment.cloud.features
                  .slice(2)
                  .map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 group">
                      <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                  <span className="text-white">Serverless</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                  <span className="text-white">Auto-scaling</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-gray-600" />
                {dictionary.technologies.deployment.security.title}
              </h3>
              <ul className="space-y-3">
                {dictionary.technologies.deployment.security.features.map(
                  (feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 group">
                      <ArrowRight className="w-4 h-4 text-gray-500 transition-transform group-hover:translate-x-1" />
                      <span>{feature}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-gray-600" />
                {dictionary.technologies.deployment.cicd.title}
              </h3>
              <ul className="space-y-3">
                {dictionary.technologies.deployment.cicd.features.map(
                  (feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 group">
                      <ArrowRight className="w-4 h-4 text-gray-500 transition-transform group-hover:translate-x-1" />
                      <span>{feature}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const element = ref;
        const { top, bottom } = element.getBoundingClientRect();
        const elementPosition = window.scrollY + top;

        if (
          scrollPosition >= elementPosition &&
          scrollPosition <= window.scrollY + bottom
        ) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="bg-gradient-to-br from-gray-50 to-white w-full relative min-h-screen py-[13rem]"
      ref={containerRef}
    >
      <div className="max-w-[100rem] mx-auto">
        <div className="flex flex-col items-center justify-center mb-[12rem] w-full px-4">
          <div className="w-full max-w-4xl">
            <div className="flex flex-row gap-2 items-center">
              <Icon
                icon="heroicons:squares-plus-16-solid"
                className="size-4 text-black"
              />
              <p>{dictionary.technologies.secret}</p>
            </div>
            <div className="flex flex-row gap-1 items-center mb-5 p-4 pl-0">
              <h1 className="text-5xl font-bold text-gray-900">
                {dictionary.technologies.main_title_2}
              </h1>
              <FlipWords
                words={[
                  dictionary.technologies.word1,
                  dictionary.technologies.word2,
                  dictionary.technologies.word3,
                ]}
                className="text-5xl font-bold text-gray-900"
              />
            </div>
            <p className="text-xl text-gray-600">
              {dictionary.technologies.main_description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8">
          {/* Progress Indicator */}
          <div className="col-span-1 sticky top-24 h-screen flex items-center">
            <div className="space-y-8">
              {content.map((_, index) => (
                <div
                  key={index}
                  className={`size-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSection === index
                      ? 'bg-black scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => {
                    const element = sectionRefs.current[index];
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                />
              ))}
            </div>
          </div>

          <div className="col-span-5 py-24">
            {content.map((item, index) => (
              <div
                key={index}
                ref={(el: HTMLDivElement | null) => {
                  if (el) sectionRefs.current[index] = el;
                }}
                className="min-h-[70vh] flex items-center"
              >
                <div className="w-full py-32">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-row gap-2 items-center">
                        <img
                          src={item.titleImg}
                          alt="title"
                          className="size-20"
                        />
                        {item.title}
                      </div>

                      <p className="text-lg text-gray-600 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="text-gray-600">{item.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Right Content */}
          <div className="col-span-6 sticky top-52 h-[calc(100vh-24rem)] ml-14 z-10">
            <div className="w-full h-full rounded-xl mt-24 z-10">
              {content.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 z-10 ${
                    activeSection === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {item.rightContent}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
