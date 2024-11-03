'use client';

import { TypingAnimation } from '@/components/acernity/magic-type-effect';
import { WordFadeIn } from '@/components/acernity/word-fade-in';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/shadcn/card';
import {
  ArrowRight,
  Bot,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Database,
  Server,
  Shield,
  Workflow,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

const TabletFeatureList = ({ items }: any) => (
  <div className="space-y-3">
    {items.map((item: any, index: any) => (
      <div key={index} className="space-y-2">
        <div className="flex items-center gap-3">
          <ArrowRight className="w-5 h-5 text-gray-500 flex-shrink-0" />
          <span className="font-bold text-base bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-clip-text text-transparent">
            {item.title}
          </span>
        </div>
        <p className="text-gray-600 text-base pl-8">{item.description}</p>
      </div>
    ))}
  </div>
);

function TabletPerformanceAnalyticsCard() {
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
    <Card className="bg-gradient-to-br from-gray-100 via-white to-gray-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Shield className="w-7 h-7 text-gray-700" />
          <span className="bg-gradient-to-b from-gray-300 to-black bg-clip-text text-transparent">
            Performance & Analytics
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-5 rounded-lg bg-gradient-to-br from-gray-50 to-white">
            <TabletFeatureList items={features.column1} />
          </div>
          <div className="p-5 rounded-lg bg-gradient-to-br from-gray-50 to-white">
            <TabletFeatureList items={features.column2} />
          </div>
          <div className="p-5 rounded-lg bg-gradient-to-br from-gray-50 to-white md:col-span-2 lg:col-span-1">
            <TabletFeatureList items={features.column3} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const TabletTechnologies = () => {
  const [activeSection, setActiveSection] = useState(0);

  const content = [
    {
      title: (
        <p className="text-2xl md:text-3xl font-bold">
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
        <div className="relative w-full h-full">
          <video
            src="/technologies/supabase.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-xl"
          />
          <img
            src="/technologies/postgres.png"
            className="size-24 rounded-xl absolute z-10 -top-6 -right-6 shadow-lg shadow-white/20"
          />
          <img
            src="/technologies/supabase.png"
            className="size-16 rounded-xl absolute z-10 -bottom-6 -left-6"
          />
        </div>
      ),
      description: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-green-600" />
                Infrastructure PostgreSQL
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-green-500" />
                  <span className="text-base">Portabilité 100% garantie</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-green-500" />
                  <span className="text-base">
                    Authentification intégrée RLS
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-green-500" />
                  <span className="text-base">
                    Extensions faciles à intégrer
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-green-100">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-green-600" />
                Sécurité entreprise
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-green-500" />
                  <span className="text-base">
                    Authentification multi-facteurs
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-green-500" />
                  <span className="text-base">Chiffrement bout en bout</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-green-500" />
                  <span className="text-base">Conformité RGPD</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 rounded-xl shadow-lg border border-gray-800 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-transparent pointer-events-none" />
            <h3 className="text-xl font-semibold flex items-center gap-3 mb-4 relative z-10">
              <Workflow className="w-6 h-6 text-green-400" />
              Fonctionnalités temps réel
            </h3>
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-green-400" />
                  <span className="text-base">
                    Synchronisation multi-utilisateurs
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-green-400" />
                  <span className="text-base">
                    API REST et GraphQL auto-générées
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-green-400" />
                  <span className="text-base">Webhooks personnalisables</span>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-green-400" />
                  <span className="text-base">Monitoring temps réel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: (
        <TypingAnimation
          className="text-2xl md:text-3xl font-bold text-black"
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
        </div>
      ),
      description: (
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-purple-900 to-purple-500 text-white rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-transparent pointer-events-none" />
            <h3 className="text-xl font-semibold flex items-center gap-3 mb-4 relative z-10">
              <Bot className="w-6 h-6 text-purple-300" />
              Solutions IA intégrées
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-purple-300" />
                  <span className="text-base">Analyse documents</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-purple-300" />
                  <span className="text-base">Génération contenu</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-purple-300" />
                  <span className="text-base">Chatbots IA</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-purple-300" />
                  <span className="text-base">Extraction données</span>
                </li>
              </ul>
              <ul className="space-y-3 md:col-span-2 lg:col-span-1">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-purple-300" />
                  <span className="text-base">Classification auto</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-purple-300" />
                  <span className="text-base">Analyse sentiment</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-lg border border-purple-100">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
                Infrastructure IA
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-purple-500" />
                  <span className="text-base">Scaling automatique</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-purple-500" />
                  <span className="text-base">OpenAI & HuggingFace</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-purple-500" />
                  <span className="text-base">API REST unifiée</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-purple-100">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3 mb-4">
                <Server className="w-6 h-6 text-purple-600" />
                Performances
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-purple-500" />
                  <span className="text-base">Traitement parallèle</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-purple-500" />
                  <span className="text-base">Cache intelligent</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-purple-500" />
                  <span className="text-base">Monitoring avancé</span>
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
        <div className="w-full aspect-video rounded-xl overflow-hidden">
          <img
            src="https://cdn.dribbble.com/userupload/12246160/file/original-21ce109ee20be8d23fe7400e46a449a4.jpg?resize=1024x768"
            alt="Next.js Benefits"
            className="w-full h-full object-cover"
          />
        </div>
      ),
      description: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-black via-gray-800 to-gray-900 rounded-xl text-white">
              <h3 className="text-xl font-semibold flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-gray-300" />
                Technologies Next.js
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                  <span className="text-base">
                    Génération statique optimisée
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                  <span className="text-base">
                    Rendu côté serveur performant
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                  <span className="text-base">Mise en cache intelligente</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-black via-gray-800 to-gray-900 rounded-xl text-white">
              <h3 className="text-xl font-semibold flex items-center gap-3 mb-4">
                <Workflow className="w-6 h-6 text-gray-300" />
                Optimisation
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                  <span className="text-base">Images et assets optimisés</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                  <span className="text-base">SEO automatique</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                  <span className="text-base">Core Web Vitals optimisés</span>
                </li>
              </ul>
            </div>
          </div>
          <TabletPerformanceAnalyticsCard />
        </div>
      ),
    },
    {
      title: (
        <h1 className="text-2xl md:text-3xl font-bold">
          Des sites{' '}
          <span className="bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
            déployés
          </span>{' '}
          en <span className="border-b-2 border-blue-500">une</span> journée
        </h1>
      ),
      titleImg: '/technologies/scaleway3.png',
      subtitle:
        'Une infrastructure cloud moderne hébergée en France, associant la puissance de Vercel et la conformité de Scaleway pour des déploiements rapides et sécurisés.',
      rightContent: (
        <div className="w-full aspect-video rounded-xl overflow-hidden">
          <img
            src="https://cdn.dribbble.com/userupload/17341175/file/original-a6085175e674b05fe0bd4fe59f2a553d.png?resize=1024x615"
            alt="Scaleway Cloud"
            className="w-full h-full object-cover"
          />
        </div>
      ),
      description: (
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-blue-800 to-blue-400 text-white rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-transparent pointer-events-none" />
            <h3 className="text-xl font-semibold flex items-center gap-3 mb-4 relative z-10">
              <Cloud className="w-6 h-6 text-white" />
              Infrastructure Cloud
            </h3>
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-white" />
                  <span className="text-base">Vercel Edge Network</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-white" />
                  <span className="text-base">Scaleway Cloud</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-white" />
                  <span className="text-base">CDN mondial</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-white" />
                  <span className="text-base">SSL automatique</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-gray-600" />
                Sécurité & Conformité
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                  <span className="text-base">Hébergement français</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                  <span className="text-base">Conformité RGPD</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                  <span className="text-base">Backups quotidiens</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-gray-600" />
                CI/CD
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                  <span className="text-base">Déploiement continu</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                  <span className="text-base">Preview deployments</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                  <span className="text-base">Rollback instantané</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    setActiveSection((prev) => (prev + 1) % content.length);
  };

  const handlePrev = () => {
    setActiveSection((prev) => (prev - 1 + content.length) % content.length);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white w-full min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Technologies de Pointe à Votre Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous utilisons les dernières technologies pour vous offrir des
            solutions innovantes et performantes, adaptées à vos besoins
            spécifiques.
          </p>
        </div>

        <div className="relative">
          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mb-12">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(index)}
                className={`size-3 rounded-full transition-all ${
                  activeSection === index ? 'bg-black scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Content slider */}
          <div className="relative px-6 md:px-12">
            {/* Navigation arrows */}
            <button
              onClick={handlePrev}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={handleNext}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Main content */}
            {content.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-300 ${
                  activeSection === index
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8 pointer-events-none absolute inset-0'
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
                  {/* Left content */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.titleImg}
                        alt="title"
                        className="size-20 md:size-24"
                      />
                      <div>{item.title}</div>
                    </div>
                    <p className="text-lg md:text-xl text-gray-600">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Right content (media) */}
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                    {item.rightContent}
                  </div>
                </div>

                {/* Description content */}
                <div className="mt-12">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletTechnologies;
