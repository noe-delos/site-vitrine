import KsChat from '@/components/sections/ks-chat';
import { getDictionary } from '@/get-dictionary';

interface PageProps {
  params: {
    lang: string;
  };
}

export default async function Page({ params: { lang } }: PageProps) {
  const dictionary = await getDictionary(lang as any);

  return <KsChat dictionary={dictionary} />;
}
