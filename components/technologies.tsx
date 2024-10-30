'use client';

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
  title: string;
  subtitle: string;
  description: ReactNode;
  rightContent: ReactNode;
}

const Technologies = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  const content: ContentItem[] = [
    {
      title: 'Bases de données et sécurité',
      subtitle:
        "Une infrastructure robuste et sécurisée pour vos données d'entreprise, avec des performances optimales et une fiabilité à toute épreuve.",
      rightContent: (
        <div className="relative w-full h-full">
          <video
            src="/technologies/supabase.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="w-16 h-16 rounded-xl absolute z-10 bg-red-500 top-4 right-4" />
          <div className="w-16 h-16 rounded-xl absolute z-10 bg-blue-500 bottom-4 left-4" />
        </div>
      ),
      description: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                <Database className="w-5 h-5 text-blue-600" />
                Infrastructure PostgreSQL
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>Portabilité 100% garantie</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>Authentification intégrée RLS</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>Extensions faciles à intégrer</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-blue-600" />
                Sécurité entreprise
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>Authentification multi-facteurs</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>Chiffrement bout en bout</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>Conformité RGPD</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <Workflow className="w-5 h-5 text-blue-600" />
              Fonctionnalités temps réel
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>Synchronisation multi-utilisateurs</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>API REST et GraphQL auto-générées</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>Webhooks personnalisables</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-blue-500 transition-transform group-hover:translate-x-1" />
                  <span>Monitoring temps réel</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: 'Intelligence Artificielle Avancée',
      subtitle:
        "Des solutions d'IA adaptées à vos besoins, intégrant les dernières avancées en matière de traitement du langage naturel et d'apprentissage automatique.",
      rightContent: (
        <div className="relative w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/1015752276?h=2a0d0242ef&autoplay=1&loop=1&autopause=0&controls=false"
            style={{ width: '100%', height: '100%' }}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className="rounded-xl"
          />
          <div className="w-16 h-16 rounded-xl absolute z-10 bg-yellow-100 top-4 right-4" />
          <div className="w-16 h-16 rounded-xl absolute z-10 bg-blue-200 bottom-4 left-4" />
        </div>
      ),
      description: (
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <Bot className="w-5 h-5 text-purple-600" />
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
      title: 'Performance Web Optimale',
      subtitle:
        'Des applications web ultrarapides et optimisées pour offrir la meilleure expérience utilisateur possible sur toutes les plateformes.',
      rightContent: (
        <div className="relative w-full h-full">
          <img
            src="https://naturaily.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F172506%2F1292x552%2F7cc19cf257%2Fnextjs-benefits-cover-image.webp&w=3840&q=75"
            alt="Next.js Benefits"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="w-16 h-16 rounded-xl absolute z-10 bg-purple-500 top-4 right-4" />
          <div className="w-16 h-16 rounded-xl absolute z-10 bg-black bottom-4 left-4" />
        </div>
      ),
      description: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-emerald-100">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-emerald-600" />
                Technologies Next.js
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-emerald-500 transition-transform group-hover:translate-x-1" />
                  <span>Génération statique optimisée</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-emerald-500 transition-transform group-hover:translate-x-1" />
                  <span>Rendu côté serveur performant</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-emerald-500 transition-transform group-hover:translate-x-1" />
                  <span>Mise en cache intelligente</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-emerald-100">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                <Workflow className="w-5 h-5 text-emerald-600" />
                Optimisation
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-emerald-500 transition-transform group-hover:translate-x-1" />
                  <span>Images et assets optimisés</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-emerald-500 transition-transform group-hover:translate-x-1" />
                  <span>SEO automatique</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-emerald-500 transition-transform group-hover:translate-x-1" />
                  <span>Core Web Vitals optimisés</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-emerald-100">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-emerald-600" />
              Performance & Analytics
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-emerald-500 transition-transform group-hover:translate-x-1" />
                  <span>Chargement instantané</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-emerald-500 transition-transform group-hover:translate-x-1" />
                  <span>Analytics temps réel</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-emerald-500 transition-transform group-hover:translate-x-1" />
                  <span>UX fluide</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-emerald-500 transition-transform group-hover:translate-x-1" />
                  <span>Monitoring avancé</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-emerald-500 transition-transform group-hover:translate-x-1" />
                  <span>Performance tracking</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-emerald-500 transition-transform group-hover:translate-x-1" />
                  <span>Rapports détaillés</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Des sites déployés en une journée',
      subtitle:
        'Une infrastructure cloud moderne hébergée en France, associant la puissance de Vercel et la conformité de Scaleway pour des déploiements rapides et sécurisés.',
      rightContent: (
        <div className="relative w-full h-full">
          <img
            src="https://www-uploads.scaleway.com/Generic_Card_2c5c50410e.webp"
            alt="Scaleway Cloud"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="w-16 h-16 rounded-xl absolute z-10 bg-emerald-500 top-4 right-4" />
          <div className="w-16 h-16 rounded-xl absolute z-10 bg-blue-500 bottom-4 left-4" />
        </div>
      ),
      description: (
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <Cloud className="w-5 h-5 text-gray-600" />
              Infrastructure Cloud
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-gray-500 transition-transform group-hover:translate-x-1" />
                  <span>Vercel Edge Network</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-gray-500 transition-transform group-hover:translate-x-1" />
                  <span>Scaleway Cloud</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-gray-500 transition-transform group-hover:translate-x-1" />
                  <span>CDN mondial</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-gray-500 transition-transform group-hover:translate-x-1" />
                  <span>SSL automatique</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-gray-500 transition-transform group-hover:translate-x-1" />
                  <span>Serverless</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-gray-500 transition-transform group-hover:translate-x-1" />
                  <span>Auto-scaling</span>
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
      className="bg-gradient-to-br from-gray-50 to-slate-100 w-full relative min-h-screen py-[20rem]"
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSection === index
                      ? 'bg-blue-600 scale-125'
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
                      <h2 className="text-4xl font-bold text-gray-900">
                        {item.title}
                      </h2>
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
          <div className="col-span-6 sticky top-52 h-[calc(100vh-24rem)] ml-14">
            <div className="w-full h-full rounded-xl overflow-hidden mt-24 relative">
              {content.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
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
