'use client';

import { Locale } from '@/i18n-config';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  education: string;
  expertise: string[];
  image: string;
  description: string;
  linkedin: string;
  schools: string[];
}

const getTeamMembers = (lang: string): TeamMember[] => [
  {
    name: 'Noé Campo',
    role: lang === 'fr' ? 'Développeur Full-Stack' : 'Full-Stack Developer',
    education: 'Epitech',
    expertise: ['Full-Stack Dev', lang === 'fr' ? 'Intégration IA' : 'AI Integration'],
    image: '/team/noe.jpg',
    description:
      lang === 'fr'
        ? "Architecte Full-Stack passionné par l'IA générative. Je transforme les concepts les plus ambitieux en solutions concrètes et innovantes."
        : 'Full-Stack architect passionate about generative AI. I transform ambitious concepts into concrete and innovative solutions.',
    linkedin: 'https://linkedin.com/in/noe-campo',
    schools: [
      'https://www.campusdessolidarites.eu/voy_content/uploads/Epitech.png',
      '/team/cau.png',
    ],
  },
  {
    name: 'Julien Bergerot',
    role: lang === 'fr' ? 'Ingénieur AI' : 'AI Engineer',
    education: 'École Polytechnique',
    expertise: [lang === 'fr' ? 'Ingénieurie IA' : 'AI Engineering', 'Backend dev'],
    image: '/team/julien.jpg',
    description:
      lang === 'fr'
        ? "Avec mon expérience en Machine learning et Gen AI je rends l'intelligence artificielle accessible et performante."
        : 'With my experience in Machine Learning and Gen AI, I make artificial intelligence accessible and performant.',
    linkedin: 'https://www.linkedin.com/in/julien-bergerot-68945b194/',
    schools: ['/technologies/polytech.png'],
  },
  {
    name: 'Hugo Pradier',
    role: lang === 'fr' ? 'Ingénieur DevOps' : 'DevOps Engineer',
    education: 'IIT Madras',
    expertise: ['DevOps', 'SRE', lang === 'fr' ? 'Archi Cloud' : 'Cloud Architecture'],
    image: '/team/hugo.jpg',
    description:
      lang === 'fr'
        ? "As du cloud et de l'infrastructure, je garantis des déploiements fluides et une scalabilité sans faille de nos solutions."
        : 'Cloud and infrastructure ace, I ensure smooth deployments and flawless scalability of our solutions.',
    linkedin: 'https://linkedin.com/in/hugo-pradier',
    schools: [
      'https://www.campusdessolidarites.eu/voy_content/uploads/Epitech.png',
      '/team/madras.png',
    ],
  },
  {
    name: 'Nicolas Henaux',
    role: lang === 'fr' ? 'Commercial' : 'Sales Representative',
    education: 'Excelia Business School',
    expertise: [
      lang === 'fr' ? 'Business Strategy' : 'Business Strategy',
      lang === 'fr' ? 'Relations Clients' : 'Client Relations',
    ],
    image: '/en/team/nicolas.png',
    description:
      lang === 'fr'
        ? 'Stratège commercial passionné, je connecte les bonnes solutions aux bons clients. Je crée des partenariats durables et générateurs de valeur.'
        : 'Passionate business strategist, I connect the right solutions to the right clients. I create lasting partnerships that generate value.',
    linkedin: 'https://www.linkedin.com/in/maxime-cividini/',
    schools: ['https://upload.wikimedia.org/wikipedia/commons/9/98/ESSEC_Logo.svg'],
  },
];

const AnimatedHeroSection = ({ dictionary, lang }: { dictionary: any; lang: string }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const squareVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="relative max-w-[90rem] px-4 md:px-8 flex flex-col md:flex-row items-start justify-between">
      {/* Left Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col items-start w-full max-w-3xl mx-auto px-4"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-7xl font-bold mb-6 text-center"
        >
          {' '}
          <span className="text-lg md:text-sm font-normal text-gray-400 mt-3 block pb-5">
            {dictionary.team.subtitle},
          </span>
          <span>{dictionary.team.title.part1}</span>
          <span
            className={cn(
              'bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent',
              lang === 'en' && 'ml-3'
            )}
          >
            {dictionary.team.title.part2}
          </span>
        </motion.h1>

        <div className="flex flex-col w-full items-center mt-8">
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <div className="h-px w-10 bg-gradient-to-r from-blue-600 to-transparent" />
            <span className="text-base md:text-lg text-gray-500 italic">
              {dictionary.team.frenchTech}
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-blue-600 to-transparent" />
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-[1px] mb-8">
            <div className="w-5 h-4 bg-gradient-to-b from-blue-500/40 to-blue-500/60 rounded-l-sm" />
            <div className="w-5 h-4 bg-gradient-to-b from-gray-100 to-white" />
            <div className="w-5 h-4 bg-gradient-to-b from-red-500/40 to-red-500/60 rounded-r-sm" />
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 md:gap-16 w-full mb-8"
        >
          {[
            {
              href: 'https://www.polytechnique.edu/',
              src: '/technologies/polytech.png',
              alt: 'École Polytechnique',
              size: 'size-12 md:size-16 lg:size-20',
            },
            {
              href: 'https://www.essec.edu/fr/',
              src: 'https://upload.wikimedia.org/wikipedia/commons/9/98/ESSEC_Logo.svg',
              alt: 'ESSEC Business School',
              size: 'size-10 md:size-14 lg:size-16',
            },
            {
              href: 'https://www.epitech.eu/',
              src: 'https://www.campusdessolidarites.eu/voy_content/uploads/Epitech.png',
              alt: 'EPITECH',
              size: 'size-10 md:size-14 lg:size-16',
            },
          ].map((school) => (
            <motion.div
              key={school.alt}
              variants={itemVariants}
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <Link href={school.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={school.src}
                  alt={school.alt}
                  width={80}
                  height={80}
                  className={`${school.size} object-contain w-full cursor-pointer`}
                  unoptimized
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-600 text-left">
          {dictionary.team.description}
        </motion.p>
      </motion.div>

      {/* Right Content - Animated Squares */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="hidden md:flex lg:ml-[10rem] xl:ml-[10rem] flex-col gap-8 md:w-1/2 mt-8 md:mt-0"
      >
        <div className="flex gap-8">
          <motion.div
            variants={itemVariants}
            className="relative size-72 rounded-xl overflow-hidden"
          >
            <Image
              src="/team/noe.jpg"
              alt="Noé Campo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 288px"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-6 text-white">
              <h3 className="text-xl font-bold">Noé Campo</h3>
              <p className="text-sm text-gray-300">Full-Stack Developer</p>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="relative size-72 rounded-xl overflow-hidden"
          >
            <Image
              src="/team/julien.jpg"
              alt="Julien Bergerot"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 288px"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-6 text-white">
              <h3 className="text-xl font-bold">Julien Bergerot</h3>
              <p className="text-sm text-gray-300">AI Engineer</p>
            </div>
          </motion.div>
        </div>
        <div className="flex gap-8 ml-16">
          <motion.div
            variants={itemVariants}
            className="relative size-72 rounded-xl overflow-hidden"
          >
            <Image
              src="/team/hugo.jpg"
              alt="Hugo Pradier"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 288px"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-6 text-white">
              <h3 className="text-xl font-bold">Hugo Pradier</h3>
              <p className="text-sm text-gray-300">DevOps Engineer</p>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="relative size-72 rounded-xl overflow-hidden"
          >
            <Image
              src="/en/team/nicolas.png"
              alt="Nicolas Henaux"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 288px"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-6 text-white">
              <h3 className="text-xl font-bold">Nicolas Henaux</h3>
              <p className="text-sm text-gray-300">Sales Representative</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
interface Card3DProps {
  member: TeamMember;
  dictionary: any;
}

const Card3D = ({ member, index }: any) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e: any) => {
    if (!cardRef.current) return;

    const card: any = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
      className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row h-full">
        <div className="relative w-full md:w-56 h-52 md:h-auto shrink-0">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className={cn(
              'object-cover object-center group-hover:scale-105 transition duration-300',
              member.name === 'Noé Campo' && 'scale-110'
            )}
          />
        </div>

        <div className="flex-1 p-6 md:p-8" style={{ transform: 'translateZ(30px)' }}>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 tracking-wide">{member.name}</h3>
              <p className="text-base bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium mt-0.5">
                {member.role}
              </p>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {member.expertise.map((skill: any) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-1">
              {member.schools.map((school: any) => (
                <img
                  key={school}
                  src={school}
                  alt="school"
                  className={cn(
                    'w-auto',
                    member.name === 'Julien Bergerot' ? 'h-7 md:h-8' : 'h-6 md:h-7'
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function OurTeam({ dictionary, lang }: { dictionary: any; lang: Locale }) {
  const teamMembers = getTeamMembers(lang);
  const targetRef = useRef<HTMLDivElement>(null);

  const leftColumnMembers = teamMembers.filter((_, index) => index % 2 === 0);
  const rightColumnMembers = teamMembers.filter((_, index) => index % 2 === 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section
        ref={targetRef}
        className="relative min-h-screen flex items-start justify-center pt-24 md:pt-32 lg:pt-[6rem]"
      >
        <AnimatedHeroSection dictionary={dictionary} lang={lang} />
      </section>
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-[90rem] mx-auto">
          {/* Title and Description Section */}
          <div className="w-full flex flex-col items-end text-end mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{dictionary.team.member}</h2>
            <p className="text-lg text-gray-600 max-w-2xl">{dictionary.team.memberDescription}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {leftColumnMembers.map((member, index) => (
                <Card3D key={member.name} member={member} index={index} />
              ))}
            </div>

            {/* Right Column - with top margin */}
            <div className="space-y-8 lg:mt-24">
              {rightColumnMembers.map((member, index) => (
                <Card3D key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 md:mt-24 lg:mt-[12rem] py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-8 md:space-y-10">
              <div className="space-y-4">
                <span className="text-sm uppercase tracking-wider text-gray-500">
                  {dictionary.expertiseTeam.title}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {dictionary.expertiseTeam.solutions.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  {dictionary.expertiseTeam.solutions.description}{' '}
                  <em className="font-medium">{dictionary.expertiseTeam.solutions.emphasis}</em>
                </p>
              </div>

              <div className="space-y-6 md:space-y-8 pr-[10rem]">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                      {dictionary.expertiseTeam.technical.title}
                    </h3>
                    <span className="text-sm md:text-base text-gray-500 block mb-2">
                      {dictionary.expertiseTeam.technical.subtitle}
                    </span>
                    <p className="text-gray-600 text-sm md:text-base">
                      {dictionary.expertiseTeam.technical.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                      {dictionary.expertiseTeam.agility.title}
                    </h3>
                    <span className="text-sm md:text-base text-gray-500 block mb-2">
                      {dictionary.expertiseTeam.agility.subtitle}
                    </span>
                    <p className="text-gray-600 text-sm md:text-base">
                      {dictionary.expertiseTeam.agility.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                      {dictionary.expertiseTeam.support.title}
                    </h3>
                    <span className="text-sm md:text-base text-gray-500 block mb-2">
                      {dictionary.expertiseTeam.support.subtitle}
                    </span>
                    <p className="text-gray-600 text-sm md:text-base">
                      {dictionary.expertiseTeam.support.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 mt-8 md:mt-0">
              <img
                src="team/team.jpg"
                alt={dictionary.team.imageAlt}
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">
            {dictionary.solutions.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            {dictionary.solutions.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative inline-flex items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#7066CB] to-blue-500 rounded-md opacity-100 transition-opacity duration-300 group-hover:opacity-90" />
              <div className="relative bg-gradient-to-r from-[#7066CB] to-blue-500 rounded-[5px] m-[1px] px-4 md:px-6 py-2 transition-all duration-300">
                <a
                  href="/contact-us"
                  className="text-white font-medium whitespace-nowrap text-sm md:text-base"
                >
                  {dictionary.portfolio.cta}
                </a>
              </div>
              <div className="absolute inset-0 rounded-md overflow-hidden">
                <div className="absolute inset-0 translate-x-[-100%] animate-[shine_3s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform" />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
