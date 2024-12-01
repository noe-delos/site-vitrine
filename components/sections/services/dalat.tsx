import { LinkPreview } from '@/components/acernity/link-preview';

export function getServiceData(dictionary: any) {
  const serviceData1 = {
    label: dictionary.services.sections.saas.label,
    title: dictionary.services.sections.saas.title,
    description: dictionary.services.sections.saas.description,
    description2: (
      <p className="text-lg text-gray-500">{dictionary.services.sections.saas.subtitle}</p>
    ),
    features: [
      {
        icon: 'simple-icons:stripe',
        text: dictionary.services.sections.saas.features[0].text,
        link: 'https://stripe.com/',
      },
      {
        icon: 'material-symbols:lock',
        color: 'text-[#000000]',
        text: dictionary.services.sections.saas.features[1].text,
      },
      {
        icon: 'mdi:twitter',
        text: dictionary.services.sections.saas.features[2].text,
        color: 'text-[#00B6FF]',
      },
      {
        icon: 'duo-icons:dashboard',
        color: 'text-[#E68E00]',
        text: dictionary.services.sections.saas.features[3].text,
      },
      {
        icon: 'fluent-color:people-team-24',
        text: dictionary.services.sections.saas.features[4].text,
      },
      {
        icon: 'oui:stats',
        color: 'text-[#000000]',
        text: dictionary.services.sections.saas.features[5].text,
      },
    ],
    imageSrc: '/fr/aisaas.png',
  };

  const serviceData2 = {
    label: dictionary.services.sections.ai.label,
    title: dictionary.services.sections.ai.title,
    description: dictionary.services.sections.ai.description,
    description2: (
      <p className="text-lg text-gray-500">
        {dictionary.services.sections.ai.subtitle}{' '}
        <LinkPreview url="https://openai.com/index/gpt-4/" className="font-bold text-black">
          GPT
        </LinkPreview>{' '}
        ,{' '}
        <LinkPreview
          url="https://www.anthropic.com/news/claude-3-5-sonnet"
          className="font-bold text-black"
        >
          Claude
        </LinkPreview>{' '}
        {' and '}{' '}
        <LinkPreview
          url="https://blog.google/technology/ai/google-gemini-ai/"
          className="font-bold text-black"
        >
          Gemini
        </LinkPreview>
      </p>
    ),
    features: dictionary.services.sections.ai.features.map((feature: any, index: number) => ({
      icon: [
        'material-symbols:document-scanner',
        'material-symbols:record-voice-over',
        'material-symbols:mic',
        'material-symbols:description',
        'material-symbols:language',
        'material-symbols:file-copy',
        'material-symbols:edit-document',
      ][index],
      text: feature.text,
      color: 'text-[#424242]',
    })),
    imageSrc: '/fr/aisystems.png',
  };

  return [serviceData1, serviceData2];
}

export function getStepData(dictionary: any) {
  return dictionary.services.progress.steps.map((step: any, index: number) => ({
    number: `0${index + 1}.`,
    title: step.title,
    description: step.description,
  }));
}

export function getFAQData(dictionary: any) {
  return dictionary.services.faq.items;
}
