'use client';

import { TypingAnimation } from '@/components/acernity/magic-type-effect';
import { WordFadeIn } from '@/components/acernity/word-fade-in';
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

function PerformanceAnalyticsCard() {
  const features = {
    column1: [
      {
        title: 'Chargement instantané',
        description: 'Performance optimisée avec temps de chargement < 0.5s',
      },
    ],
    column2: [
      {
        title: 'Analytics temps réel',
        description: 'Suivi en direct des métriques clés de performance',
      },
    ],
    column3: [
      {
        title: 'Monitoring avancé',
        description:
          'Tableaux de bord personnalisables avec alertes intelligentes',
      },
    ],
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200/50">
      <h3 className="text-2xl font-extrabold flex items-center gap-3 mb-6">
        <Shield className="w-7 h-7 text-gray-700" />
        <span className="bg-gradient-to-b from-gray-300 to-black bg-clip-text text-transparent tracking-wide">
          Performance & Analytics
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

const Technologies = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  const content: ContentItem[] = [
    {
      title: (
        <p className="text-4xl font-bold">
          Données et{' '}
          <span className="bg-gradient-to-r from-black to-green-500 inline-block text-transparent bg-clip-text">
            sécurité.
          </span>
        </p>
      ),
      titleImg: '/technologies/scaleway1.png',
      subtitle:
        "Une infrastructure robuste et sécurisée pour vos données d'entreprise, avec des performances optimales et une fiabilité à toute épreuve.",
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
            src="/technologies/postgres.png"
            className="size-32 rounded-xl absolute z-40 -top-10 -right-10 shadow-lg shadow-white/20"
          />{' '}
          <img
            src="/technologies/supabase.png"
            className="size-20 rounded-xl absolute z-40 -bottom-8 -left-8"
          />
        </div>
      ),
      description: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                <Database className="w-5 h-5 text-green-600" />
                Infrastructure PostgreSQL
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-green-500 transition-transform group-hover:translate-x-1" />
                  <span>Portabilité 100% garantie</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-green-500 transition-transform group-hover:translate-x-1" />
                  <span>Authentification intégrée RLS</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-green-500 transition-transform group-hover:translate-x-1" />
                  <span>Extensions faciles à intégrer</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-green-100">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-green-600" />
                Sécurité entreprise
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-green-500 transition-transform group-hover:translate-x-1" />
                  <span>Authentification multi-facteurs</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-green-500 transition-transform group-hover:translate-x-1" />
                  <span>Chiffrement bout en bout</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-green-500 transition-transform group-hover:translate-x-1" />
                  <span>Conformité RGPD</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-800 overflow-hidden">
            {/* Dark overlay + gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#131313] to-[#424242]" />

            {/* Background image */}
            <div className="absolute inset-0 overflow-hidden -top-12">
              <img
                src="/technologies/scaleway5.png"
                alt="Background"
                className="size-96 opacity-15 object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-gray-100 flex items-center gap-2 mb-4">
                <Workflow className="w-5 h-5 text-green-400" />
                Fonctionnalités temps réel
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 group">
                    <ArrowRight className="w-4 h-4 text-green-400 transition-transform group-hover:translate-x-1" />
                    <span className="text-gray-300">
                      Synchronisation multi-utilisateurs
                    </span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <ArrowRight className="w-4 h-4 text-green-400 transition-transform group-hover:translate-x-1" />
                    <span className="text-gray-300">
                      API REST et GraphQL auto-générées
                    </span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 group">
                    <ArrowRight className="w-4 h-4 text-green-400 transition-transform group-hover:translate-x-1" />
                    <span className="text-gray-300">
                      Webhooks personnalisables
                    </span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <ArrowRight className="w-4 h-4 text-green-400 transition-transform group-hover:translate-x-1" />
                    <span className="text-gray-300">Monitoring temps réel</span>
                  </li>
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
          className="text-4xl font-bold text-black "
          duration={100}
          text="IA générative."
        />
      ),
      titleImg: '/technologies/scaleway2.png',
      subtitle:
        "Des solutions d'IA adaptées à vos besoins, intégrant les dernières avancées en matière de traitement du langage naturel et d'apprentissage automatique.",
      rightContent: (
        <div className="relative w-full h-full rounded-lg">
          <iframe
            src="https://player.vimeo.com/video/1015752276?h=2a0d0242ef&autoplay=1&loop=1&autopause=0&controls=false"
            style={{ width: '100%', height: '100%', borderRadius: 10 }}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className="rounded-xl"
          />
          <img
            src="/technologies/openAI.png"
            className="size-20 rounded-xl absolute z-40 top-14 -right-7 shadow-lg shadow-white/20"
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
                Solutions IA intégrées
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 group">
                    <ArrowRight className="w-4 h-4 text-purple-500 transition-transform group-hover:translate-x-1" />
                    <span>Analyse documents</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <ArrowRight className="w-4 h-4 text-purple-500 transition-transform group-hover:translate-x-1" />
                    <span>Génération contenu</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 group">
                    <ArrowRight className="w-4 h-4 text-purple-500 transition-transform group-hover:translate-x-1" />
                    <span>Chatbots IA</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <ArrowRight className="w-4 h-4 text-purple-500 transition-transform group-hover:translate-x-1" />
                    <span>Extraction données</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 group">
                    <ArrowRight className="w-4 h-4 text-purple-500 transition-transform group-hover:translate-x-1" />
                    <span>Classification auto</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <ArrowRight className="w-4 h-4 text-purple-500 transition-transform group-hover:translate-x-1" />
                    <span>Analyse sentiment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-purple-600" />
                Infrastructure IA
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-purple-500 transition-transform group-hover:translate-x-1" />
                  <span>Scaling automatique</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-purple-500 transition-transform group-hover:translate-x-1" />
                  <span>OpenAI & HuggingFace</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-purple-500 transition-transform group-hover:translate-x-1" />
                  <span>API REST unifiée</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                <Server className="w-5 h-5 text-purple-600" />
                Performances
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-purple-500 transition-transform group-hover:translate-x-1" />
                  <span>Traitement parallèle</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-purple-500 transition-transform group-hover:translate-x-1" />
                  <span>Cache intelligent</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-purple-500 transition-transform group-hover:translate-x-1" />
                  <span>Monitoring avancé</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: <WordFadeIn words="Sites ultra rapides et optimisés" />,
      titleImg: '/technologies/scaleway4.png',
      subtitle:
        'Des applications web ultrarapides et optimisées pour offrir la meilleure expérience utilisateur possible sur toutes les plateformes.',
      rightContent: (
        <div className="relative w-full h-full">
          <img
            src="/technologies/nextjs.png"
            alt="Next.js Benefits"
            className="w-full h-full object-contain rounded-xl"
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
                Technologies Next.js
              </h3>
              <ul className="space-y-3 relative">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-gray-400 transition-transform group-hover:translate-x-1" />
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    Génération statique optimisée
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-gray-400 transition-transform group-hover:translate-x-1" />
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    Rendu côté serveur performant
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-gray-400 transition-transform group-hover:translate-x-1" />
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    Mise en cache intelligente
                  </span>
                </li>
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
                Optimisation
              </h3>
              <ul className="space-y-3 relative">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-gray-400 transition-transform group-hover:translate-x-1" />
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    Images et assets optimisés
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-gray-400 transition-transform group-hover:translate-x-1" />
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    SEO automatique
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-gray-400 transition-transform group-hover:translate-x-1" />
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    Core Web Vitals optimisés
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <PerformanceAnalyticsCard />
        </div>
      ),
    },
    {
      title: (
        <h1 className="text-4xl m-0 p-0 font-bold">
          Des sites{' '}
          <span className="bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
            déployés
          </span>{' '}
          en <span className="border-b-2 border-blue-500 -mb-2">une</span>{' '}
          journée
        </h1>
      ),
      titleImg: '/technologies/scaleway3.png',
      subtitle:
        'Une infrastructure cloud moderne hébergée en France, associant la puissance de Vercel et la conformité de Scaleway pour des déploiements rapides et sécurisés.',
      rightContent: (
        <div className="relative w-full h-full">
          <img
            src="https://www.chainguard.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fl47ir7rfykkn%2F4xY10Dyf6Lb5H8OHHp4sRK%2F38c5437fd5a396cef65225c1a41beaf2%2FDockerhub_1.png&w=3840&q=75"
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
                className="size-[17rem]  z-50 opacity-15 object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
              <Cloud className="w-5 h-5 text-white" />
              Infrastructure Cloud
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                  <span className="text-white">Vercel Edge Network</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                  <span className="text-white">Scaleway Cloud</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                  <span className="text-white">CDN mondial</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                  <span className="text-white">SSL automatique</span>
                </li>
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
                Sécurité & Conformité
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-gray-500 transition-transform group-hover:translate-x-1" />
                  <span>Hébergement français</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-gray-500 transition-transform group-hover:translate-x-1" />
                  <span>Conformité RGPD</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-gray-500 transition-transform group-hover:translate-x-1" />
                  <span>Backups quotidiens</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-gray-600" />
                CI/CD
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-gray-500 transition-transform group-hover:translate-x-1" />
                  <span>Déploiement continu</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-gray-500 transition-transform group-hover:translate-x-1" />
                  <span>Preview deployments</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-gray-500 transition-transform group-hover:translate-x-1" />
                  <span>Rollback instantané</span>
                </li>
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
      className="bg-gradient-to-br from-gray-50 to-white w-full relative min-h-screen py-[20rem]"
      ref={containerRef}
    >
      <div className="max-w-[100rem] mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Technologies de Pointe à Votre Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous utilisons les dernières technologies pour vous offrir des
            solutions innovantes et performantes, adaptées à vos besoins
            spécifiques.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-8">
          {/* Progress Indicator */}
          <div className="col-span-1 sticky top-24 h-screen flex items-center">
            <div className="space-y-8">
              {content.map((_, index) => (
                <div
                  key={index}
                  className={`size-2 rounded-full transition-all duration-300 cursor-pointer ${
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
                className="min-h-[70vh] flex items-center" // Removed pb-20 from here
              >
                {/* Added a wrapper div for better spacing control */}
                <div className="w-full py-32">
                  {/* Add substantial padding top/bottom */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-row gap-2 items-center">
                        <img
                          src={item.titleImg}
                          alt="title"
                          className="size-20"
                        />
                        <h2 className="text-4xl font-bold text-gray-900">
                          {item.title}
                        </h2>
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
