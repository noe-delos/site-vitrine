'use client';
import { CarouselParallax } from '@/components/sections/portfolio/carousel';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Types
interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  category: string;
  technologies: string[];
  link?: string;
  github?: string;
  client: string;
}

// Projects array
const projects: Project[] = [
  {
    id: 1,
    title: 'Plateforme E-commerce IA',
    description:
      "Une plateforme e-commerce intelligente utilisant l'IA pour personnaliser l'expérience utilisateur et optimiser les ventes.",
    images: [
      'https://cdn.dribbble.com/userupload/15936352/file/original-6735a5397fc20689b40ee862aedc00f7.png?resize=1024x768',
      'https://cdn.dribbble.com/userupload/15936354/file/original-cd4985cc181ed97fddc18586e0837d5b.png?resize=752x564&vertical=center',
      'https://cdn.dribbble.com/userupload/15936355/file/original-d8e4714ccc4cb22cca7af92d4ab8072f.png?resize=752x564&vertical=center',
      'https://cdn.dribbble.com/userupload/15936356/file/original-dbc7937a669133756a070da5a9140588.png?resize=752x564&vertical=center',
      'https://cdn.dribbble.com/userupload/15936357/file/original-843125335eaacde7674cb2fdf58b399b.png?resize=752x564&vertical=center',
    ],
    category: 'E-commerce',
    technologies: ['Next.js', 'Node.js', 'TensorFlow', 'AWS'],
    client: 'MegaShop France',
  },
  {
    id: 2,
    title: 'Application de Gestion RH',
    description:
      'Solution complète de gestion des ressources humaines avec tableaux de bord analytiques et automatisation des processus.',
    images: [
      'https://cdn.dribbble.com/userupload/16456639/file/original-c546487ca7c0db644eb31e232b622a65.png?resize=1024x768&vertical=center',
      'https://cdn.dribbble.com/userupload/16456635/file/original-ee40a6583461952672dfd077af313b1b.png?resize=1024x768&vertical=center',
      'https://cdn.dribbble.com/userupload/16456636/file/original-e15009c26e41002ac75798c569af4f84.png?resize=1024x768&vertical=center',
      'https://cdn.dribbble.com/userupload/16456638/file/original-b0b76f923424cb609e90d749352c9178.png?resize=1024x768&vertical=center',
    ],
    category: 'SaaS',
    technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
    client: 'Tech Industries',
  },
  {
    id: 3,
    title: 'Application de Gestion RH',
    description:
      'Solution complète de gestion des ressources humaines avec tableaux de bord analytiques et automatisation des processus.',
    images: [
      '/en/portfolio/img1.png',
      '/en/portfolio/img2.png',
      'https://cdn.dribbble.com/userupload/15496723/file/original-fdc21ff55fa19b2761bd752d66b0bb58.png?resize=1024x768',
      'https://cdn.dribbble.com/userupload/15496724/file/original-73db664eaedb9c9c76f78c7300aa6657.png?resize=1024x768&vertical=center',
      '/en/portfolio/img3.png',
    ],
    category: 'SaaS',
    technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
    client: 'Tech Industries',
  },
  {
    id: 4,
    title: 'Application de Gestion RH',
    description:
      'Solution complète de gestion des ressources humaines avec tableaux de bord analytiques et automatisation des processus.',
    images: [
      '/en/portfolio/img4.png',
      '/en/portfolio/img5.png',
      '/en/portfolio/img6.png',
      '/en/portfolio/img7.png',
    ],
    category: 'SaaS',
    technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
    client: 'Tech Industries',
  },
  {
    id: 5,
    title: 'Application de Gestion RH',
    description:
      'Solution complète de gestion des ressources humaines avec tableaux de bord analytiques et automatisation des processus.',
    images: [
      '/en/portfolio/img11.png',
      '/en/portfolio/img8.png',
      '/en/portfolio/img9.png',
      '/en/portfolio/img10.png',
    ],
    category: 'SaaS',
    technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
    client: 'Tech Industries',
  },
  {
    id: 6,
    title: 'Application de Gestion RH',
    description:
      'Solution complète de gestion des ressources humaines avec tableaux de bord analytiques et automatisation des processus.',
    images: [
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
    ],
    category: 'SaaS',
    technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
    client: 'Tech Industries',
  },
  {
    id: 7,
    title: 'Application de Gestion RH',
    description:
      'Solution complète de gestion des ressources humaines avec tableaux de bord analytiques et automatisation des processus.',
    images: [
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
    ],
    category: 'SaaS',
    technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
    client: 'Tech Industries',
  },
  {
    id: 8,
    title: 'Application de Gestion RH',
    description:
      'Solution complète de gestion des ressources humaines avec tableaux de bord analytiques et automatisation des processus.',
    images: [
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
    ],
    category: 'SaaS',
    technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
    client: 'Tech Industries',
  },
  {
    id: 9,
    title: 'Application de Gestion RH',
    description:
      'Solution complète de gestion des ressources humaines avec tableaux de bord analytiques et automatisation des processus.',
    images: [
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
    ],
    category: 'SaaS',
    technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
    client: 'Tech Industries',
  },
];

const categories = ['Tous', 'E-commerce', 'SaaS', 'IA', 'Mobile'];

const StatItem = ({ number, label }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    className="flex flex-col space-y-1"
  >
    <div className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-b from-zinc-900 to-zinc-400é bg-clip-text text-transparent">
      {number}
    </div>
    <div className="text-sm text-gray-500">{label}</div>
  </motion.div>
);

const PortfolioHero = ({ dictionary }: any) => {
  const t = dictionary.portfolioHero;

  return (
    <div className="size-full">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-1">
        <div className="flex flex-col space-y-16">
          {/* Top Section - Main Content */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-center max-w-3xl mx-auto"
          >
            <div className="space-y-2 pb-5">
              <div className="flex items-center justify-center space-x-2 text-gray-500">
                <Icon icon="ic:baseline-web-stories" className="size-3 text-gray-400" />
                <span className="text-xs">{t.categoryDetail}</span>
              </div>

              <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                {t.title}
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-14"
            >
              <p className="text-lg max-w-2xl mx-auto">
                <span className="text-gray-900">{t.description.highlight}</span>{' '}
                <span className="text-gray-400">{t.description.secondary}</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom Section - Stats and Quote */}
          <div className="flex flex-col md:flex-row items-center max-w-7xl gap-20 md:gap-32 self-center space-y-8 md:space-y-0 lg:ml-20">
            {/* Stats Container */}
            <div className="w-full md:w-auto">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-gray-600 text-xs text-center max-w-[250px] mx-auto mb-6"
              >
                {t.stats.context}
              </motion.p>
              <div className="flex flex-col items-center text-center md:flex-row space-y-8 md:space-y-0 md:space-x-12">
                <StatItem number={t.stats.projects.number} label={t.stats.projects.label} />
                <StatItem number={t.stats.satisfaction.number} label={t.stats.satisfaction.label} />
              </div>
            </div>

            {/* Quote Container */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-start"
            >
              <div className="px-6 md:w-[400px] border-l-[3px] border-gray-200">
                <blockquote className="text-md text-black">“{t.testimonial.quote}”</blockquote>
                <div className="mt-4 flex flex-row items-center gap-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Logo_FDJ.svg/2560px-Logo_FDJ.svg.png"
                    alt="FDJ"
                    className="w-[6rem] h-fit object-contain"
                  />
                  <div className="flex flex-col items-start">
                    <p className="text-gray-900 font-medium">{t.testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{t.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PortfolioPageProps {
  dictionary: {
    solutions: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      description: string;
      cta: string;
    };
  };
}

const PortfolioPage = ({ dictionary }: PortfolioPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const router = useRouter();

  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'Tous' || project.category === selectedCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-50 pt-16 md:pt-24">
      {/* Hero Section */}
      <section className="max-w-[100rem] mx-auto px-4 py-6 md:py-10">
        <PortfolioHero dictionary={dictionary} />

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid mt-20 lg:mt-[10rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 px-4 md:px-6"
        >
          {filteredProjects.map((project) => {
            const [isHoveringParallax, setIsHovering] = useState(false);

            return (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="absolute inset-0">
                  <CarouselParallax
                    isHoveringParallax={isHoveringParallax}
                    data={project.images.map((img: string, index: number) => ({
                      id: `project-${index + 1}`,
                      title: `Project ${index + 1}`,
                      coverUrl: img,
                      description: `Description for Project ${index + 1}`,
                    }))}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent from-0% via-35% to-65%" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 transform translate-y-2 transition-all duration-300 ease-out group-hover:-translate-y-2 ">
                  <div className="absolute right-5 bottom-5">
                    <img
                      alt="sign"
                      src="/en/portfolio/sign.png"
                      className="object-contain w-fit h-9 opacity-70"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                    {project.title}
                  </h3>

                  <p className="text-gray-200 text-xs md:text-sm mb-3 opacity-90 line-clamp-2 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] md:text-[11px] font-medium rounded-full 
                        bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                        text-white backdrop-blur-sm 
                        border border-white/10
                        transition-all duration-300 ease-out
                        group-hover:bg-gradient-to-r group-hover:from-purple-500/30 group-hover:to-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-3 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white/70 hover:text-white transition-colors duration-200"
                      >
                        <Github className="w-4 h-4 md:w-5 md:h-5" />
                      </motion.a>
                    )}

                    {project.link && (
                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white/70 hover:text-white transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#7066CB] to-blue-500 rounded-xl md:rounded-2xl p-6 md:p-12 text-white relative overflow-hidden"
          >
            <img
              className="absolute -right-2 -top-4 md:right-5 md:-top-3 w-[16rem] md:w-[18rem] h-auto z-10 opacity-5"
              src="/en/logo/brand-logo-white.png"
              alt="KSlogo"
            />
            <div className="relative z-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                {dictionary.contact.title}
              </h2>
              <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90">
                {dictionary.contact.description}
              </p>
              <motion.button
                onClick={() => router.push('/contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-[#7066CB] px-6 md:px-8 py-2.5 md:py-3 rounded-md font-medium hover:bg-opacity-90 transition-all text-sm md:text-base"
              >
                {dictionary.contact.cta}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
