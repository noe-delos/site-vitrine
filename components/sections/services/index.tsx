'use client';

import { getFAQData, getServiceData, getStepData } from '@/components/sections/services/dalat';
import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface ServicesSectionProps {
  imageOnLeft?: boolean;
  label: string;
  title: string;
  description: string;
  description2?: React.ReactNode;
  features: Array<{
    icon: string;
    color?: string;
    text: string;
    link?: string;
  }>;
  imageSrc: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const HeroSection = ({ dictionary }: { dictionary: any }) => {
  const [expandedSection, setExpandedSection] = React.useState<'grapho' | 'vectra' | null>(
    'grapho'
  );

  return (
    <div className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="absolute right-0 top-0 w-[40rem] h-[40rem] bg-indigo-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute left-0 bottom-0 w-[30rem] h-[30rem] bg-blue-100 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
            >
              <Icon icon="mdi:magic" className="text-indigo-600" />
              <span className="text-sm font-medium text-gray-600">
                {dictionary.services.hero.tagline}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold leading-tight"
            >
              {dictionary.services.hero.title.part1}{' '}
              <div className="flex flex-row gap-2 mt-1">
                <span className="bg-clip-text pr-2 text-transparent pb-2 bg-gradient-to-r from-[#7066CB] to-blue-500">
                  {dictionary.services.hero.title.part2}
                </span>
                {dictionary.services.hero.title.part3}
                <img
                  src="/fr/hero/aiStar.png"
                  alt=""
                  className="size-4 mb-4 self-end bottom-0 object-contain"
                />
              </div>
            </motion.h1>

            <div className="h-[10rem] mt-4">
              <motion.div
                className="cursor-pointer"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  onClick={() => setExpandedSection('grapho')}
                  className={`relative pl-4 border-b border-gray-200 pb-4`}
                >
                  <div
                    className={`absolute left-0 top-0 h-full w-0.5 transition-colors duration-300 ${
                      expandedSection === 'grapho' ? 'bg-indigo-600' : 'bg-gray-200'
                    }`}
                  />
                  <h2 className="text-xl font-medium">
                    {dictionary.services.hero.sections.saas.title}
                  </h2>
                  <AnimatePresence>
                    {expandedSection === 'grapho' && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-gray-400 text-sm mt-2"
                      >
                        {dictionary.services.hero.sections.saas.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              <motion.div
                className="cursor-pointer"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div
                  onClick={() => setExpandedSection('vectra')}
                  className="relative pl-4 pb-4 pt-4"
                >
                  <div
                    className={`absolute left-0 top-0 h-full w-0.5 transition-colors duration-300 ${
                      expandedSection === 'vectra' ? 'bg-indigo-600' : 'bg-gray-200'
                    }`}
                  />
                  <h2 className="text-2xl font-medium">
                    {dictionary.services.hero.sections.custom.title}
                  </h2>
                  <AnimatePresence>
                    {expandedSection === 'vectra' && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-gray-400 text-sm mt-2"
                      >
                        {dictionary.services.hero.sections.custom.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="relative flex items-center justify-between max-w-xl px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {dictionary.services.hero.stats.map((stat: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative lg:ml-12"
          >
            <div className="relative w-[90%] aspect-square">
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl transform rotate-3 opacity-10" />
              <img
                src="/fr/ceciestuntest.png"
                alt="AI Solutions"
                className="relative w-full h-full z-10 object-contain rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FAQSection = ({ dictionary }: { dictionary: any }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqData: FAQItem[] = getFAQData(dictionary);

  return (
    <div className="relative w-full py-[9rem] pb-5 overflow-hidden">
      <img
        src="/en/blob.png"
        alt="hero"
        className="absolute top-10 left-[10%] w-fit h-[40rem] object-cover opacity-10 rotate-180"
      />

      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <div className="">
              <div className="flex items-center gap-2 text-indigo-600 text-sm font-medium mb-4">
                <Icon icon="material-symbols:quiz" className="text-base" />
                <span>FAQ</span>
              </div>
              <h2 className="text-[2.5rem] leading-[1.1] font-semibold">
                Questions
                <br />
                fréquentes
              </h2>
            </div>
          </div>

          <div className="col-span-9">
            <div className="space-y-10">
              {faqData.map((faq, index) => (
                <div className="bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1),0_8px_24px_-4px_rgba(0,0,0,0.06)] transition-shadow duration-200 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left"
                  >
                    <span className="font-normal text-gray-900">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon icon="material-symbols:expand-more" className="w-6 h-6 text-gray-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-4 text-gray-400 text-sm">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgressSection = ({ dictionary }: { dictionary: any }) => {
  const steps = getStepData(dictionary);

  const [activeStep, setActiveStep] = React.useState(0);
  const [key, setKey] = React.useState(0);

  const resetProgress = React.useCallback(() => {
    setKey((k) => k + 1);
    setActiveStep(0);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev === 4) {
          setKey((k) => k + 1);
          return 0;
        }
        return prev + 1;
      });
    }, 3000);

    const handleFocus = () => {
      resetProgress();
    };

    window.addEventListener('focus', handleFocus);

    return () => {
      clearInterval(timer);
      window.removeEventListener('focus', handleFocus);
    };
  }, [resetProgress]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 bg-indigo-50 px-3 py-1 rounded-full">
          <Icon icon="material-symbols:magic-button" className="text-indigo-600" />
          <span className="text-sm font-medium text-indigo-600">{dictionary.bento.approach}</span>
        </div>
        <h2 className="text-4xl font-bold mt-4 mb-2">
          {dictionary.bento.title.part1} {dictionary.bento.title.part2}
        </h2>
        <p className="text-lg text-gray-600">{dictionary.bento.description}</p>
      </div>

      <div key={key} className="grid grid-cols-5 gap-6 h-[10rem]">
        {steps.map((step: any, index: any) => (
          <div key={index} className="flex flex-col space-y-4">
            <div className="h-1 bg-gray-100 rounded-full overflow-hidden relative">
              {activeStep === index && (
                <motion.div
                  className="h-full bg-indigo-600 absolute top-0 left-0"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{
                    duration: 2,
                    ease: 'easeInOut',
                  }}
                  style={{
                    boxShadow: '0 0 10px rgba(79, 70, 229, 0.5)',
                  }}
                />
              )}
            </div>
            <div className="text-left">
              <div className="text-lg font-medium text-gray-400 mb-2">{step.number}</div>
              <h3 className="font-semibold mb-1">{step.title}</h3>
              <AnimatePresence mode="wait">
                {activeStep === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm text-gray-600 overflow-hidden"
                  >
                    {step.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ServicesSection: React.FC<ServicesSectionProps> = ({
  imageOnLeft = true,
  label,
  title,
  description,
  description2,
  features,
  imageSrc,
}) => {
  const contentOrder = imageOnLeft ? 'lg:order-2' : 'lg:order-1';
  const imageOrder = imageOnLeft ? 'lg:order-1' : 'lg:order-2';

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className={`w-full lg:w-1/2 ${contentOrder}`}>
          <div className="space-y-10">
            <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              {label}
            </span>

            <h2 className="text-4xl tracking-wide font-bold text-gray-900">{title}</h2>

            <p className="text-lg text-gray-500">{description}</p>

            {description2 && description2}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 ${feature.link ? 'cursor-pointer' : ''}`}
                  onClick={() => {
                    if (feature.link) window.location.href = feature.link;
                  }}
                >
                  <Icon
                    icon={feature.icon}
                    className={'size-5 text-indigo-600 flex-shrink-0 ' + feature.color}
                  />
                  <span className="text-gray-600 tracking-wide">{feature.text}</span>
                </div>
              ))}
            </div>

            <br className="pb-5" />
            {!imageOnLeft && (
              <div className="flex items-center justify-center gap-5">
                <div className="w-12 h-12 rounded-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] flex items-center justify-center">
                  <img
                    src="https://seeklogo.com/images/M/mistral-ai-icon-logo-B3319DCA6B-seeklogo.com.png"
                    alt="Circle 1"
                    className="size-6 opacity-45 object-contain"
                  />
                </div>
                <div className="w-16 h-16 rounded-full bg-white shadow-[0_0_20px_rgba(0,0,0,0.12)] flex items-center justify-center">
                  <img
                    src="/fr/services/meta.png"
                    alt="Circle 2"
                    className="w-fit h-6 opacity-85 object-contain"
                  />
                </div>
                <div className="w-20 h-20 rounded-full bg-white shadow-[0_0_25px_rgba(0,0,0,0.15)] flex items-center justify-center">
                  <img
                    src="/fr/services/chatgpt.png"
                    alt="Circle 3"
                    className="size-10 object-contain"
                  />
                </div>
                <div className="w-16 h-16 rounded-full bg-white shadow-[0_0_20px_rgba(0,0,0,0.12)] flex items-center justify-center">
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png"
                    alt="Circle 4"
                    className="size-8 opacity-85 object-contain"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] flex items-center justify-center">
                  <img
                    src="/fr/services/claude.png"
                    alt="Circle 5"
                    className="size-6 opacity-60 object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={`w-full lg:w-1/2 ${imageOrder}`}>
          <div className="p-2 bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)]">
            <img src={imageSrc} alt="Service illustration" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ServicesPage({ dictionary }: { dictionary: any }) {
  const [serviceData1, serviceData2] = getServiceData(dictionary);

  return (
    <div className="min-h-screen bg-white space-y-20 pb-[20rem]">
      <HeroSection dictionary={dictionary} />
      <ServicesSection imageOnLeft={true} {...serviceData1} />
      <ServicesSection imageOnLeft={false} {...serviceData2} />
      <ProgressSection dictionary={dictionary} />
      <FAQSection dictionary={dictionary} />
    </div>
  );
}
