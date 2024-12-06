import KsChat from '@/components/sections/ks-chat';
import { getDictionary } from '@/get-dictionary';

export default async function Page({ params }: any) {
  const dictionary = await getDictionary(params.lang);

  return <KsChat dictionary={dictionary} />;
}
