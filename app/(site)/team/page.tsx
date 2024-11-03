'use client';

import scrollAnimation from '@/assets/lotties/scroll.json';
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

const teamMembers: TeamMember[] = [
  {
    name: 'Noé Campo',
    role: 'Développeur Full-Stack',
    education: 'Epitech',
    expertise: ['Full-Stack Dev', 'Intégration IA'],
    image: '/team/noe.jpg',
    description:
      "Architecte Full-Stack passionné par l'IA générative. Je transforme les concepts les plus ambitieux en solutions concrètes et innovantes.",
    linkedin: 'https://linkedin.com/in/noe-campo',
    schools: [
      'https://www.campusdessolidarites.eu/voy_content/uploads/Epitech.png',
      '/team/cau.png',
    ],
  },
  {
    name: 'Julien Bergerot',
    role: 'Ingénieur AI',
    education: 'École Polytechnique',
    expertise: ['Ingénieurie IA', 'Backend dev'],
    image: '/team/julien.jpg',
    description:
      "Avec mon expérience en Machine learning et Gen AI je rends l'intelligence artificielle accessible et performante.",
    linkedin: 'https://www.linkedin.com/in/julien-bergerot-68945b194/',
    schools: ['/technologies/polytech.png'],
  },
  {
    name: 'Hugo Pradier',
    role: 'Ingénieur DevOps',
    education: 'IIT Madras',
    expertise: ['DevOps', 'SRE', 'Archi Cloud'],
    image: '/team/hugo.jpg',
    description:
      "As du cloud et de l'infrastructure, je garantis des déploiements fluides et une scalabilité sans faille de nos solutions.",
    linkedin: 'https://linkedin.com/in/hugo-pradier',
    schools: [
      'https://www.campusdessolidarites.eu/voy_content/uploads/Epitech.png',
      '/team/madras.png',
    ],
  },
  {
    name: 'Maxime Cividini',
    role: 'Commercial',
    education: 'Excelia Business School',
    expertise: ['Business Strategy', 'Relations Clients'],
    image: '/team/maxime.jpg',
    description:
      'Stratège commercial passionné, je connecte les bonnes solutions aux bons clients. Je crée des partenariats durables et générateurs de valeur.',
    linkedin: 'https://www.linkedin.com/in/maxime-cividini/',
    schools: [
      'https://upload.wikimedia.org/wikipedia/commons/9/98/ESSEC_Logo.svg',
    ],
  },
];

const AnimatedHeroSection = () => {
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
    <div className="relative max-w-7xl mx-auto text-center px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col items-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span>Une équipe d'</span>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            experts
          </span>
          <motion.span
            variants={itemVariants}
            className="text-2xl lg:text-3xl font-medium text-gray-600 mt-4 block"
          >
            L'excellence à la française
          </motion.span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="h-px w-12 bg-gradient-to-r from-blue-600 to-transparent" />
          <span className="text-lg text-gray-500 italic">
            French Tech Innovation
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
          className="flex justify-center self-center items-center gap-20 mb-8 w-fit pr-5"
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
                className="size-[4rem] w-full cursor-pointer"
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
                className="size-[3rem] w-full cursor-pointer"
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
                className="size-[3rem] w-full cursor-pointer"
                unoptimized
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Jeunes, ambitieux et animés par l'excellence. Nous sommes une équipe
          d'innovateurs passionnés par la création de solutions SaaS de pointe
          qui transforment les entreprises.
        </motion.p>
      </motion.div>
    </div>
  );
};

interface Card3DProps {
  member: TeamMember;
}

const Card3D: React.FC<Card3DProps> = ({ member }) => {
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

      <div className="space-y-4 p-6" style={{ transform: 'translateZ(30px)' }}>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 tracking-wide">
              {member.name}
            </h3>
            <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
              {member.role}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-gray-600 text-sm">{member.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {member.expertise.map((skill: string) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex pt-10 flex-row gap-2 items-center justify-around">
          {member.schools.map((school: string) => (
            <img
              key={school}
              src={school}
              alt="school"
              className={cn(
                'w-fit',
                member.name === 'Julien Bergerot' ? 'h-[2.3rem]' : 'h-[1.6rem]',
              )}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function OurTeam() {
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
      {/* Hero Section with Parallax */}
      <motion.section
        ref={targetRef}
        style={{ opacity, scale, y }}
        className="relative h-screen flex items-start justify-center overflow-hidden pt-[10rem]"
      >
        {/* Background Gradient Image */}
        <div className="absolute inset-0 mb-20 ml-0">
          <img
            src="/team/gradient2.png"
            alt="Background Gradient"
            className="object-cover opacity-40"
          />
        </div>

        <AnimatedHeroSection />
        <ScrollIndicator />
      </motion.section>

      {/* Team Grid with 3D Cards */}
      <section className="py-10 px-6">
        {' '}
        {/* Réduit de py-20 à py-10 */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {' '}
          {/* Changé lg:grid-cols-3 à lg:grid-cols-4 et réduit les gaps */}
          {teamMembers.map((member) => (
            <Card3D key={member.name} member={member} />
          ))}
        </div>
      </section>

      {/* Values Section with 3D Cards */}
      <section className="mt-[12rem] py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Contenu texte à gauche */}
            <div className="flex-1 space-y-10">
              <div className="space-y-4">
                <span className="text-sm uppercase tracking-wider text-gray-500">
                  Notre expertise
                </span>
                <h2 className="text-4xl font-bold text-gray-900">
                  Solutions de développement sur mesure
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Découvrez nos forfaits adaptés à vos besoins en développement
                  et maintenance.{' '}
                  <em className="font-medium">
                    Notre équipe d'experts vous accompagne à chaque étape de
                    votre projet digital.
                  </em>
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Expertise technique
                    </h3>
                    <span className="text-sm text-gray-500 block mb-2">
                      Full-stack Development
                    </span>
                    <p className="text-gray-600">
                      Une équipe maîtrisant les dernières technologies pour
                      concrétiser vos projets avec excellence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Agilité & Flexibilité
                    </h3>
                    <span className="text-sm text-gray-500 block mb-2">
                      Méthode Agile
                    </span>
                    <p className="text-gray-600">
                      Une méthodologie éprouvée pour s'adapter à vos besoins et
                      garantir des livraisons efficientes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Support continu
                    </h3>
                    <span className="text-sm text-gray-500 block mb-2">
                      Maintenance & Support
                    </span>
                    <p className="text-gray-600">
                      Un accompagnement personnalisé et un support technique
                      garantissant la pérennité de vos solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image à droite */}
            <div className="flex-1">
              <img
                src="team/team.jpg"
                alt="Équipe de développement"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Nos solutions
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Découvrez comment nous transformons les défis technologiques en
            solutions innovantes. Notre portfolio témoigne de notre savoir-faire
            en développement, infrastructure et conseil IT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative inline-flex items-center"
            >
              {/* Gradient border container */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#7066CB] to-blue-500 rounded-md opacity-100 transition-opacity duration-300 group-hover:opacity-90" />

              {/* Colored background for first button */}
              <div className="relative bg-gradient-to-r from-[#7066CB] to-blue-500 rounded-[5px] m-[1px] px-6 py-2 transition-all duration-300">
                <a
                  href="/contact-us"
                  className="text-white font-medium whitespace-nowrap"
                >
                  Portfolio
                </a>
              </div>

              {/* Shine effect */}
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
