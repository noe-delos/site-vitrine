// app/portfolio/page.tsx
'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Types
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
  github?: string;
  client: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Plateforme E-commerce IA',
    description:
      "Une plateforme e-commerce intelligente utilisant l'IA pour personnaliser l'expérience utilisateur et optimiser les ventes.",
    image:
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center', // Placez vos images dans public/projects/
    category: 'E-commerce',
    technologies: ['Next.js', 'Node.js', 'TensorFlow', 'AWS'],
    client: 'MegaShop France',
  },
  {
    id: 2,
    title: 'Application de Gestion RH',
    description:
      'Solution complète de gestion des ressources humaines avec tableaux de bord analytiques et automatisation des processus.',
    image:
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
    category: 'SaaS',
    technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
    client: 'Tech Industries',
  },
  {
    id: 3,
    title: 'Application de Gestion RH',
    description:
      'Solution complète de gestion des ressources humaines avec tableaux de bord analytiques et automatisation des processus.',
    image:
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
    category: 'SaaS',
    technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
    client: 'Tech Industries',
  },
  {
    id: 4,
    title: 'Application de Gestion RH',
    description:
      'Solution complète de gestion des ressources humaines avec tableaux de bord analytiques et automatisation des processus.',
    image:
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
    category: 'SaaS',
    technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
    client: 'Tech Industries',
  },
  {
    id: 5,
    title: 'Application de Gestion RH',
    description:
      'Solution complète de gestion des ressources humaines avec tableaux de bord analytiques et automatisation des processus.',
    image:
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
    category: 'SaaS',
    technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
    client: 'Tech Industries',
  },
  {
    id: 6,
    title: 'Application de Gestion RH',
    description:
      'Solution complète de gestion des ressources humaines avec tableaux de bord analytiques et automatisation des processus.',
    image:
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
    category: 'SaaS',
    technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
    client: 'Tech Industries',
  },
  {
    id: 7,
    title: 'Application de Gestion RH',
    description:
      'Solution complète de gestion des ressources humaines avec tableaux de bord analytiques et automatisation des processus.',
    image:
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
    category: 'SaaS',
    technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
    client: 'Tech Industries',
  },
  {
    id: 8,
    title: 'Application de Gestion RH',
    description:
      'Solution complète de gestion des ressources humaines avec tableaux de bord analytiques et automatisation des processus.',
    image:
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
    category: 'SaaS',
    technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
    client: 'Tech Industries',
  },
  {
    id: 9,
    title: 'Application de Gestion RH',
    description:
      'Solution complète de gestion des ressources humaines avec tableaux de bord analytiques et automatisation des processus.',
    image:
      'https://cdn.dribbble.com/userupload/16162208/file/original-abc4f790faa8fa9ee5226593b437a95c.png?resize=752x2938&vertical=center',
    category: 'SaaS',
    technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
    client: 'Tech Industries',
  },
  // Ajoutez plus de projets selon vos besoins
];

const categories = ['Tous', 'E-commerce', 'SaaS', 'IA', 'Mobile'];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-50 pt-24">
      {/* Hero Section */}
      <section className="max-w-[100rem] mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Nos Réalisations
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Découvrez comment nous transformons les idées innovantes en
            solutions digitales performantes pour nos clients du monde entier.
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#7066CB] to-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grille de Projets */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group relative w-[30rem] pb-5 aspect-square rounded-xl overflow-hidden"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Gradient Overlay - Extended higher */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent from-0% via-35% to-65%" />
              </div>

              {/* Content Container */}
              <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-2 transition-all duration-300 ease-out group-hover:-translate-y-2">
                {/* Project Title and Description */}
                <h3 className="text-xl font-bold text-white mb-2 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                  {project.title}
                </h3>

                <p className="text-gray-200 text-sm mb-3 opacity-90 line-clamp-2 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-3 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-medium rounded-full 
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

                {/* Links */}
                <div className="flex items-center space-x-3 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  )}

                  {project.link && (
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section Statistiques */}
      <section className="bg-white py-20 flex items-center justify-center">
        <div className="w-fit flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-44"
          >
            {[
              { number: '50+', label: 'Projets Réalisés' },
              { number: '20+', label: 'Clients Satisfaits' },
              { number: '100%', label: 'Satisfaction Client' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#7066CB] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#7066CB] to-blue-500 rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Prêt à Concrétiser Votre Projet ?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Discutons ensemble de vos idées et transformons-les en réalité.
            </p>
            <motion.button
              onClick={() => router.push('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-[#7066CB] px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
            >
              Contactez-nous
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
