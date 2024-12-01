export function getServiceData(dictionnary: any) {
  const serviceData1 = {
    label: 'Mobile App',
    title: 'Powerful Features for Your Mobile Experience',
    description:
      'Access your courses anytime, anywhere with our feature-rich mobile application. Learn at your own pace with offline access and interactive content.',
    features: [
      { icon: 'material-symbols:offline-pin', text: 'Offline Access' },
      { icon: 'material-symbols:quiz', text: 'Interactive Quizzes' },
      { icon: 'material-symbols:download', text: 'Course Downloads' },
      { icon: 'material-symbols:notifications', text: 'Push Notifications' },
      { icon: 'material-symbols:track-changes', text: 'Progress Tracking' },
      { icon: 'material-symbols:message', text: 'In-App Messaging' },
    ],
    imageSrc: '/fr/aisaas.png',
  };

  const serviceData2 = {
    label: 'Learning Platform',
    title: 'Enhanced Learning Experience',
    description:
      'Dive into an immersive learning environment with our comprehensive platform. Engage with interactive content and track your progress effortlessly.',
    features: [
      { icon: 'material-symbols:school', text: 'Expert-Led Courses' },
      { icon: 'material-symbols:grade', text: 'Certificate Programs' },
      { icon: 'material-symbols:group', text: 'Community Learning' },
      { icon: 'material-symbols:schedule', text: 'Flexible Schedule' },
      { icon: 'material-symbols:analytics', text: 'Detailed Analytics' },
      { icon: 'material-symbols:support', text: '24/7 Support' },
    ],
    imageSrc: '/fr/aisystems.png',
  };

  return [serviceData1, serviceData2];
}

export function getStepData(dictionnary: any) {
  const steps = [
    {
      number: '01.',
      title: 'Analyse initiale',
      description:
        'Compréhension de vos processus métiers actuels et identification des vrais points de douleur',
    },
    {
      number: '02.',
      title: 'Co-construction',
      description: 'Élaboration collaborative des solutions',
    },
    {
      number: '03.',
      title: 'Conception sur mesure',
      description: 'Développement personnalisé selon vos besoins',
    },
    {
      number: '04.',
      title: 'Déploiement',
      description: 'Mise en production et support continu.',
    },
    {
      number: '05.',
      title: 'Accompagnement',
      description: 'Support continu et optimisation',
    },
  ];

  return steps;
}

export function getFAQData(dictionnary: any) {
  const faqData = [
    {
      question: "Qu'est ce qui différencie Stema Partners de ses concurrents ?",
      answer:
        "Notre approche unique combinent expertise métier et intelligence artificielle nous permet d'offrir des solutions sur mesure avec un ROI garanti.",
    },
    {
      question: 'Quels sont les outils IA que vous déployez chez vos clients ?',
      answer:
        "Nous utilisons une variété d'outils d'IA adaptés aux besoins spécifiques de chaque client, incluant des solutions de traitement du langage naturel, d'analyse prédictive et d'automatisation intelligente.",
    },
    {
      question: "L'IA présente t'elle des risques pour les entreprises ?",
      answer:
        "Comme toute technologie, l'IA présente des risques qui doivent être gérés. Nous accompagnons nos clients dans l'identification et la mitigation de ces risques tout en maximisant les bénéfices.",
    },
    {
      question: 'Comment garantissons-nous un ROI avec la méthode STEMA ?',
      answer:
        "Notre méthodologie de co-construction comprenant une phase d'analyse approfondie et de mesure continue des résultats, permettant d'ajuster notre approche pour garantir un retour sur investissement optimal.",
    },
    {
      question: 'Comment adaptons-nous nos solutions aux spécificités de chaque entreprise ?',
      answer:
        'Nous réalisons une analyse détaillée des processus et besoins spécifiques de chaque entreprise pour proposer des solutions personnalisées et parfaitement adaptées.',
    },
  ];

  return faqData;
}
