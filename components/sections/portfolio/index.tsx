'use client';
import { CarouselParallax } from '@/components/sections/portfolio/carousel';
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
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
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
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
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
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
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
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
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
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
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
    (project) =>
      selectedCategory === 'Tous' || project.category === selectedCategory,
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto px-4 md:px-0"
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            {dictionary.solutions.title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12">
            {dictionary.solutions.description}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 mb-8 md:mb-16 pb-4 md:pb-0 px-4 md:px-0"
        >
          <div className="flex gap-3 md:flex-wrap md:justify-center min-w-fit">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-4 md:px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#7066CB] to-blue-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-6"
        >
          {filteredProjects.map((project) => {
            const [isHoveringParallax, setIsHovering] = useState(false);

            return (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className="group relative w-full aspect-[4/3] md:aspect-square rounded-xl overflow-hidden"
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

                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 transform translate-y-2 transition-all duration-300 ease-out group-hover:-translate-y-2">
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

      {/* Stats Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="w-full px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-44 max-w-4xl mx-auto"
          >
            {[
              { number: '50+', label: 'Projets Réalisés' },
              { number: '20+', label: 'Clients Satisfaits' },
              { number: '100%', label: 'Satisfaction Client' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#7066CB] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#7066CB] to-blue-500 rounded-xl md:rounded-2xl p-6 md:p-12 text-white"
          >
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
