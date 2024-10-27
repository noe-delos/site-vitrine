// bento-section.tsx
import { BentoCard, BentoGrid } from '@/components/acernity/bento-grid';
import { BrainIcon, CodeIcon, RocketIcon, SearchIcon } from 'lucide-react';

const features = [
  {
    Icon: SearchIcon,
    name: 'Immersion',
    description:
      'Avant de toucher une ligne de code, nous plongeons dans votre monde. Cette première étape consiste à comprendre en profondeur votre vision, votre marché et vos objectifs.',
    href: '#immersion',
    cta: 'En savoir plus',
    className: 'col-span-2 lg:col-span-1',
    background: (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />
      </div>
    ),
  },
  {
    Icon: BrainIcon,
    name: 'Conception',
    description:
      "Avec une compréhension claire de votre projet, nous passons à la phase de conception. Nous définissons l'architecture de votre SaaS et élaborons les fonctionnalités clés.",
    href: '#conception',
    cta: 'En savoir plus',
    className: 'col-span-3 lg:col-span-3',
    background: (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />
      </div>
    ),
  },
  {
    Icon: CodeIcon,
    name: 'Développement',
    description:
      'Notre équipe de développement, guidée par les principes agiles, construit votre produit. Nous travaillons en sprints courts, permettant des ajustements rapides et une transparence totale.',
    href: '#developpement',
    cta: 'En savoir plus',
    className: 'col-span-3 lg:col-span-2 border-none',
    background: (
      <div className="absolute inset-0 border-none">
        <div className="absolute inset-0 bg-white" />
      </div>
    ),
  },
  {
    Icon: RocketIcon,
    name: 'Lancement',
    description:
      'Le grand jour arrive : le lancement de votre SaaS. Nous surveillons les performances, recueillons les retours utilisateurs et optimisons continuellement le produit.',
    href: '#lancement',
    cta: 'En savoir plus',
    className: 'col-span-3 lg:col-span-1 border-none',
    background: (
      <div className="absolute inset-0 border-none">
        <div className="absolute inset-0 bg-white" />
      </div>
    ),
  },
  {
    Icon: RocketIcon,
    name: 'Lancement',
    description:
      'Le grand jour arrive : le lancement de votre SaaS. Nous surveillons les performances, recueillons les retours utilisateurs et optimisons continuellement le produit.',
    href: '#lancement',
    cta: 'En savoir plus',
    className: 'col-span-3 lg:col-span-1 border-none',
    background: (
      <div className="absolute inset-0 border-none">
        <div className="absolute inset-0 bg-white" />
      </div>
    ),
  },
];

export default function BentoGridSection() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-wider text-gray-500">
              Notre approche
            </p>
            <h2 className="text-4xl font-bold">
              La technologie au service de votre{' '}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                croissance
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Notre expertise technique s'aligne précisément avec vos objectifs
              business. Nous développons des solutions SaaS performantes et
              évolutives, guidées par vos besoins spécifiques et les exigences
              du marché.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <BentoGrid className="mb-4">
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </div>
  );
}
