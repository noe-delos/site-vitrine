'use client';

import scrollAnimation from '@/assets/lotties/scroll.json';
import { Locale } from '@/i18n-config';
import { cn } from '@/utils/cn';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lottie from 'lottie-react';
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

const ScrollIndicator = () => {
  const lottieRef = useRef<any>(null);

  return (
    <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-50 size-8">
      <Lottie
        lottieRef={lottieRef}
        animationData={scrollAnimation}
        autoplay
        loop
      />
    </div>
  );
};

const getTeamMembers = (lang: string): TeamMember[] => [
  {
    name: 'Noé Campo',
    role: lang === 'fr' ? 'Développeur Full-Stack' : 'Full-Stack Developer',
    education: 'Epitech',
    expertise: [
      'Full-Stack Dev',
      lang === 'fr' ? 'Intégration IA' : 'AI Integration',
    ],
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
    expertise: [
      lang === 'fr' ? 'Ingénieurie IA' : 'AI Engineering',
      'Backend dev',
    ],
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
    expertise: [
      'DevOps',
      'SRE',
      lang === 'fr' ? 'Archi Cloud' : 'Cloud Architecture',
    ],
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
    name: 'Maxime Cividini',
    role: lang === 'fr' ? 'Commercial' : 'Sales Representative',
    education: 'Excelia Business School',
    expertise: [
      lang === 'fr' ? 'Business Strategy' : 'Business Strategy',
      lang === 'fr' ? 'Relations Clients' : 'Client Relations',
    ],
    image: '/team/maxime.jpg',
    description:
      lang === 'fr'
        ? 'Stratège commercial passionné, je connecte les bonnes solutions aux bons clients. Je crée des partenariats durables et générateurs de valeur.'
        : 'Passionate business strategist, I connect the right solutions to the right clients. I create lasting partnerships that generate value.',
    linkedin: 'https://www.linkedin.com/in/maxime-cividini/',
    schools: [
      'https://upload.wikimedia.org/wikipedia/commons/9/98/ESSEC_Logo.svg',
    ],
  },
];

const AnimatedHeroSection = ({
  dictionary,
  lang,
}: {
  dictionary: any;
  lang: string;
}) => {
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

  return (
    <div className="relative max-w-7xl mx-auto text-center px-4 md:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col items-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span>{dictionary.team.title.part1}</span>
          <span
            className={cn(
              'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent',
              lang === 'en' && 'ml-4',
            )}
          >
            {dictionary.team.title.part2}
          </span>
          <motion.span
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 mt-4 block"
          >
            {dictionary.team.subtitle}
          </motion.span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="h-px w-12 bg-gradient-to-r from-blue-600 to-transparent" />
          <span className="text-base md:text-lg text-gray-500 italic">
            {dictionary.team.frenchTech}
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-blue-600 to-transparent" />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center gap-[1px] mb-8"
        >
          <div className="w-6 h-4 bg-gradient-to-b from-blue-500/40 to-blue-500/60 rounded-l-sm shadow-sm" />
          <div className="w-6 h-4 bg-gradient-to-b from-gray-100 to-white shadow-sm" />
          <div className="w-6 h-4 bg-gradient-to-b from-red-500/40 to-red-500/60 rounded-r-sm shadow-sm" />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center self-center items-center gap-8 md:gap-12 lg:gap-20 mb-8 w-fit px-4 md:px-0"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="https://www.polytechnique.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/technologies/polytech.png"
                alt="École Polytechnique"
                width={64}
                height={64}
                className="size-12 object-contain md:size-16 lg:size-[8rem] w-full cursor-pointer"
                unoptimized
              />
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="https://www.essec.edu/fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/9/98/ESSEC_Logo.svg"
                alt="ESSEC Business School"
                width={48}
                height={48}
                className="size-10 object-contain md:size-12 lg:size-[7rem] w-full cursor-pointer"
                unoptimized
              />
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="https://www.epitech.eu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://www.campusdessolidarites.eu/voy_content/uploads/Epitech.png"
                alt="EPITECH"
                width={48}
                height={48}
                className="size-10 object-contain md:size-12 lg:size-[8rem] w-full cursor-pointer"
                unoptimized
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 md:px-8"
        >
          {dictionary.team.description}
        </motion.p>
      </motion.div>
    </div>
  );
};

interface Card3DProps {
  member: TeamMember;
  dictionary: any;
}

const Card3D: React.FC<Card3DProps> = ({ member, dictionary }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

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
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div
        className="relative aspect-square mb-6 overflow-hidden rounded-xl transform-gpu rounded-b-none"
        style={{ transform: 'translateZ(20px)' }}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover rounded-b-none object-center group-hover:scale-105 transition duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div
        className="space-y-4 p-4 md:p-6"
        style={{ transform: 'translateZ(30px)' }}
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 tracking-wide">
              {member.name}
            </h3>
            <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
              {member.role}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-gray-600 text-sm md:text-base">
            {member.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {member.expertise.map((skill: string) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs md:text-sm bg-gray-100 text-gray-700 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex pt-6 md:pt-10 flex-row gap-2 items-center justify-around">
          {member.schools.map((school: string) => (
            <img
              key={school}
              src={school}
              alt="school"
              className={cn(
                'w-fit',
                member.name === 'Julien Bergerot'
                  ? 'h-[2rem] md:h-[2.3rem]'
                  : 'h-[1.4rem] md:h-[1.6rem]',
              )}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default async function OurTeam({
  dictionary,
  lang,
}: {
  dictionary: any;
  lang: Locale;
}) {
  const teamMembers = getTeamMembers(lang);
  console.log('fzerjfizeo', teamMembers);

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <motion.section
        ref={targetRef}
        style={{ opacity, scale, y }}
        className="relative h-screen flex items-start justify-center overflow-hidden pt-24 md:pt-32 lg:pt-[10rem]"
      >
        <div className="absolute inset-0 mb-20 ml-0">
          <img
            src="/team/gradient2.png"
            alt="Background Gradient"
            className="object-cover opacity-40"
          />
        </div>

        <AnimatedHeroSection dictionary={dictionary} lang={lang} />
        <ScrollIndicator />
      </motion.section>

      <section className="py-8 md:py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <Card3D key={member.name} member={member} dictionary={dictionary} />
          ))}
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
                  <em className="font-medium">
                    {dictionary.expertiseTeam.solutions.emphasis}
                  </em>
                </p>
              </div>

              <div className="space-y-6 md:space-y-8">
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