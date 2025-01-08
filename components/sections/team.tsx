"use client";

import { Locale } from "@/i18n-config";
import { cn } from "@/utils/cn";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  education: string;
  expertise: string[];
  image: string;
  description: string;
  linkedin: string;
  schools: string[];
  companies: Array<{
    name: string;
    logo: string;
  }>;
}

const getTeamMembers = (lang: string): TeamMember[] => [
  {
    name: "Noé Campo",
    role: lang === "fr" ? "Ingénieur Full-Stack" : "Full-Stack Engineer",
    education: "Epitech",
    expertise: [
      "Full-Stack Dev",
      lang === "fr" ? "Intégration IA" : "AI Integration",
    ],
    image: "/fr/team/noe.webp",
    description:
      lang === "fr"
        ? "Développeur Full-Stack spécialisé dans l'intégration d'IA générative. Passionné par la conception et le développement de solutions techniques, avec une approche orientée vers l'innovation et la qualité."
        : "Full-Stack developer specialized in generative AI integration. Passionate about designing and developing technical solutions, with a focus on innovation and quality.",
    linkedin: "https://linkedin.com/in/noe-campo",
    schools: [
      "https://www.campusdessolidarites.eu/voy_content/uploads/Epitech.png",
      "/team/cau.webp",
    ],
    companies: [
      {
        name: "Delos Intelligence",
        logo: "/fr/team/delos1.webp",
      },
      {
        name: "Seiki",
        logo: "/fr/team/seiki.webp",
      },
    ],
  },
  {
    name: "Julien Bergerot",
    role: lang === "fr" ? "Ingénieur AI" : "AI Engineer",
    education: "École Polytechnique",
    expertise: [
      lang === "fr" ? "Ingénieurie IA" : "AI Engineering",
      "Backend dev",
    ],
    image: "/team/julien.webp",
    description:
      lang === "fr"
        ? "Ingénieur en Intelligence Artificielle avec une solide formation en Machine Learning et IA générative. Développe des solutions d'IA adaptées aux besoins spécifiques des projets, en mettant l'accent sur la performance et l'efficacité."
        : "Artificial Intelligence engineer with solid background in Machine Learning and generative AI. Develops AI solutions tailored to specific project needs, focusing on performance and efficiency.",
    linkedin: "https://www.linkedin.com/in/julien-bergerot-68945b194/",
    schools: ["/technologies/polytech.webp"],
    companies: [
      {
        name: "Delos Intelligence",
        logo: "/fr/team/delos1.webp",
      },
      {
        name: "Institut Pasteur",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScladJqKcQ8xp7FiZPqk6p-NfBd19ar1oY2g&s",
      },
    ],
  },
  {
    name: "Hugo Pradier",
    role: lang === "fr" ? "Ingénieur Cloud DevOps" : "Cloud DevOps Engineer",
    education: "IIT Madras",
    expertise: [
      "DevOps",
      "SRE",
      lang === "fr" ? "Architecture Cloud" : "Cloud Architecture",
    ],
    image: "/team/hugo.webp",
    description:
      lang === "fr"
        ? "Ingénieur DevOps avec une bonne maîtrise des infrastructures cloud et des architectures distribuées. Conçoit et met en place des solutions de déploiement efficaces, en assurant la fiabilité et la scalabilité des applications."
        : "DevOps engineer with strong understanding of cloud infrastructure and distributed architectures. Designs and implements efficient deployment solutions, ensuring application reliability and scalability.",
    linkedin: "https://linkedin.com/in/hugo-pradier",
    schools: [
      "https://www.campusdessolidarites.eu/voy_content/uploads/Epitech.png",
      "https://upload.wikimedia.org/wikipedia/fr/0/0d/Logo_OpenClassrooms.png",
      "https://media.licdn.com/dms/image/v2/D4E0BAQFvK1i51HdI3Q/company-logo_200_200/company-logo_200_200/0/1665753595055/dev_university_logo?e=2147483647&v=beta&t=Yo5EjU3GCovYAi5FbPyeioXElaWCMHtkCVzyejAPmf4",
    ],
    companies: [
      {
        name: "Orange",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtezznU_jVR9aLxxoGiGKPIuHKZhfGGuuqhg&s",
      },
      {
        name: "Exotec",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/2019-11-Logo-Exotec.svg",
      },
    ],
  },
  {
    name: "Nicolas Henaux",
    role: lang === "fr" ? "Commercial" : "Sales Representative",
    education: "Excelia Business School",
    expertise: [
      lang === "fr" ? "Business Strategy" : "Business Strategy",
      lang === "fr" ? "Relations Clients" : "Client Relations",
    ],
    image: "/en/team/nicolas.webp",
    description:
      lang === "fr"
        ? "Chargé du développement commercial, focalisé sur la création de partenariats stratégiques durables. S'attache à comprendre les besoins des clients pour proposer des solutions adaptées et construire des relations de confiance."
        : "Business development representative, focused on creating lasting strategic partnerships. Committed to understanding client needs to propose tailored solutions and build trust-based relationships.",
    linkedin: "https://www.linkedin.com/in/nicolas-henaux/",
    schools: [
      "https://keystoneacademic-res.cloudinary.com/image/upload/element/16/169621_LogoSKEMA-Couleur.webp",
      "https://brand.ncsu.edu/img/logo/2x2white.jpg",
    ],
    companies: [
      {
        name: "Aveine",
        logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFkptSHtm9f8A/company-logo_200_200/company-logo_200_200/0/1670487825342/aveine_logo?e=1743033600&v=beta&t=ZsYfimbkaAUkqag12Py7oLry7T3II4FDUvTyL6VpTRk",
      },
      {
        name: "Pomona Group",
        logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHzaBxN9P9XpQ/company-logo_200_200/company-logo_200_200/0/1714996462545/pomona_logo?e=1743033600&v=beta&t=epwPw-qMOiUFCivfGQX7YIFEmU2XiBRRlAQyBJA43UY",
      },
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
        ease: "easeOut",
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
        ease: "easeOut",
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
          className="text-6xl md:text-7xl font-extrabold mb-6 text-center"
        >
          {" "}
          <span className="text-xl md:text-sm font-normal text-gray-400 mt-3 block pb-5">
            {dictionary.team.subtitle},
          </span>
          <span>{dictionary.team.title.part1}</span>
          <span
            className={cn(
              "bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent",
              lang === "en" && "ml-3"
            )}
          >
            {dictionary.team.title.part2}
          </span>
        </motion.h1>

        <div className="flex flex-col w-full items-center mt-8">
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-6"
          >
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
              href: "https://www.polytechnique.edu/",
              src: "/technologies/polytech.webp",
              alt: "École Polytechnique",
              size: "size-12 md:size-16 lg:size-20",
            },
            {
              href: "https://www.essec.edu/fr/",
              src: "https://upload.wikimedia.org/wikipedia/commons/9/98/ESSEC_Logo.svg",
              alt: "ESSEC Business School",
              size: "size-10 md:size-14 lg:size-16",
            },
            {
              href: "https://www.epitech.eu/",
              src: "https://www.campusdessolidarites.eu/voy_content/uploads/Epitech.png",
              alt: "EPITECH",
              size: "size-10 md:size-14 lg:size-16",
            },
          ].map((school) => (
            <motion.div
              key={school.alt}
              variants={itemVariants}
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href={school.href}
                target="_blank"
                rel="noopener noreferrer"
              >
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

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-600 text-left"
        >
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
              src="/fr/team/noe.webp"
              alt="Noé Campo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 288px"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-6 text-white">
              <h3 className="text-xl font-bold">Noé Campo</h3>
              <p className="text-sm text-gray-300">Full-Stack Engineer</p>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="relative size-72 rounded-xl overflow-hidden"
          >
            <Image
              src="/team/julien.webp"
              alt="Julien Bergerot"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 288px"
              loading="eager"
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
              src="/team/hugo.webp"
              alt="Hugo Pradier"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 288px"
              loading="eager"
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
              src="/en/team/nicolas.webp"
              alt="Nicolas Henaux"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 288px"
              loading="eager"
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

const Card3D = ({ member, index }: { member: TeamMember; index: number }) => {
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
    setRotation({
      x: -((y - centerY) / centerY) * 5,
      y: ((x - centerX) / centerX) * 5,
    });
  };

  const handleMouseLeave = () => setRotation({ x: 0, y: 0 });

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
        transformStyle: "preserve-3d",
      }}
      className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className={cn("flex flex-col md:flex-row h-full")}>
        <div className="relative w-full md:w-56 md:h-auto h-[25rem] shrink-0">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className={cn(
              "object-cover object-center group-hover:scale-105 transition duration-300",
              member.name === "Noé Campo" && "scale-110",
              member.name === "Hugo Pradier" && "scale-100"
            )}
          />
        </div>

        <div
          className={"flex-1 p-4 sm:p-6"}
          style={{ transform: "translateZ(30px)" }}
        >
          <div
            className={cn(
              "space-y-1 md:space-y-3 ",
              index === 0 && member.name === "Noé Campo" && "pl-2 pt-4 md:pt-0"
            )}
          >
            <Link
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute md:top-3 top-7 right-3 bg-transparent p-2 rounded-md transition-colors duration-200"
            >
              <Icon
                icon="ri:linkedin-fill"
                className="size-5 text-black hover:text-zinc-800"
              />
            </Link>

            <div>
              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
              <p className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                {member.role}
              </p>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {member.description}
            </p>

            <div className="flex flex-wrap gap-1">
              {member.expertise.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="space-y-3 pt-3">
              <div className="border-b border-gray-100 pb-4">
                <p className="text-xs text-gray-500 mb-2">Education</p>
                <div className="flex items-center gap-3">
                  {member.schools.map((school, _index) => (
                    <img
                      key={school}
                      src={school}
                      alt="school"
                      className={cn(
                        "w-auto pr-3",
                        member.name === "Julien Bergerot" ? "h-10" : "h-7",
                        _index === 0 && member.name === "Nicolas Henaux"
                          ? "h-6"
                          : ""
                      )}
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-2 pt-0.5">
                  Professional Experience
                </p>
                <div className="flex gap-3 items-center">
                  {member.companies.map((company, _index) => (
                    <img
                      key={company.name}
                      src={company.logo}
                      alt={company.name}
                      className={cn(
                        "h-7 w-auto object-contain pr-3",
                        _index === 1 && member.name === "Noé Campo" && "h-5",
                        member.name === "Hugo Pradier" && _index === 0 && "h-9",
                        member.name === "Hugo Pradier" &&
                          _index === 1 &&
                          "h-11",
                        member.name === "Nicolas Henaux" && "h-9"
                      )}
                      title={company.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function OurTeam({
  dictionary,
  lang,
}: {
  dictionary: any;
  lang: Locale;
}) {
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
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              {dictionary.team.member}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              {dictionary.team.memberDescription}
            </p>
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
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  {dictionary.expertiseTeam.solutions.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  {dictionary.expertiseTeam.solutions.description}{" "}
                  <em className="font-medium">
                    {dictionary.expertiseTeam.solutions.emphasis}
                  </em>
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
                src="team/team.webp"
                alt={dictionary.team.imageAlt}
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
