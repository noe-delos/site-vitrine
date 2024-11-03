// app/services/page.tsx
'use client';
import { motion } from 'framer-motion';
import {
	Cloud,
	Code,
	Brain,
	Shield,
	CreditCard,
	BarChart,
	Paintbrush,
	Check,
	ArrowRight,
	MonitorCheck,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ServicesPage = () => {
	const router = useRouter()
	const fadeInUpVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	};

	const services = [
		{
			icon: Code,
			title: 'Développement SAAS',
			description:
				'Transformez vos idées en solutions SAAS évolutives et performantes.',
			features: [
				'Architecture moderne et scalable',
				'Intégration API RESTful',
				'Développement Front-end & Back-end',
				'Base de données optimisée',
			],
		},
		{
			icon: Brain,
			title: 'Solutions Gen-AI',
			description:
				"Intégrez l'intelligence artificielle pour automatiser et optimiser vos processus.",
			features: [
				'Traitement du langage naturel',
				'Vision par ordinateur',
				"Modèles d'IA personnalisés",
				'Chatbots intelligents',
			],
		},
		{
			icon: Cloud,
			title: 'Cloud & Infrastructure',
			description:
				'Déployez et gérez vos applications sur les meilleures plateformes cloud.',
			features: [
				'AWS, Google Cloud, Azure',
				'Architecture serverless',
				'Optimisation des coûts',
				'Haute disponibilité',
			],
		},
		{
			icon: Shield,
			title: 'DevOps & Sécurité',
			description:
				'Automatisez vos déploiements et sécurisez vos applications.',
			features: [
				'CI/CD Pipeline',
				'Monitoring continu',
				'Tests automatisés',
				'Sécurité renforcée',
			],
		},
		{
			icon: CreditCard,
			title: 'Gestion des Paiements',
			description: 'Intégrez des solutions de paiement sécurisées et fiables.',
			features: [
				'Paiements récurrents',
				'Multi-devises',
				'Gestion des abonnements',
				'Facturation automatisée',
			],
		},
		{
			icon: MonitorCheck,
			title: 'Monitoring & Support',
			description: 'Surveillez et maintenez vos applications 24/7.',
			features: [
				'Monitoring en temps réel',
				'Support technique dédié',
				'Maintenance préventive',
				'Rapports de performance',
			],
		},
	];

	const testimonials = [
		{
			name: 'Sophie Martin',
			role: 'CTO, TechStart',
			image: '/testimonials/sophie.jpg',
			quote:
				"L'expertise de l'équipe en matière de SAAS et d'IA nous a permis de transformer notre vision en réalité.",
		},
		{
			name: 'Marc Dubois',
			role: 'CEO, InnovCorp',
			image: '/testimonials/marc.jpg',
			quote:
				'Un partenaire technique fiable qui a su comprendre et répondre à nos besoins complexes.',
		},
	];

	return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Solutions Digitales Innovantes
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Transformez votre entreprise avec nos solutions SAAS, Gen-AI et
            Cloud. Notre expertise technique au service de votre réussite.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#7066CB] to-blue-500 rounded-md opacity-100 transition-opacity duration-300" />
            <div className="relative bg-white rounded-[5px] m-[1px] px-8 py-3 transition-all duration-300 hover:bg-gray-50">
              <span className="text-gray-900 font-medium whitespace-nowrap">
                Commencer un projet
              </span>
            </div>
          </motion.button>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                    },
                  },
                }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#7066CB]/10 to-blue-500/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-[#7066CB]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-[#7066CB] mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Notre Processus
            </h2>
            <p className="text-gray-600">
              Une approche méthodique pour transformer vos idées en solutions
              performantes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Analyse approfondie de vos besoins et objectifs.',
              },
              {
                step: '02',
                title: 'Design',
                description: "Conception d'une solution adaptée et évolutive.",
              },
              {
                step: '03',
                title: 'Développement',
                description: 'Implémentation agile avec des points réguliers.',
              },
              {
                step: '04',
                title: 'Déploiement',
                description: 'Mise en production et support continu.',
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                    },
                  },
                }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#7066CB] mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-600">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ce que nos clients disent
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="bg-gradient-to-r from-[#7066CB] to-blue-500 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-6">
              Prêt à Digitaliser Votre Business ?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Discutons de votre projet et trouvons ensemble la meilleure
              solution.
            </p>
            <motion.button
              onClick={() => router.push('/contact')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-[#7066CB] px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
            >
              Contactez-nous
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
