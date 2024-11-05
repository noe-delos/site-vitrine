import OurTeam from '@/components/sections/team';
import { getDictionary } from '@/get-dictionary';

export default async function Page({ params }: any) {
  const dictionary = await getDictionary(params.lang);

  return <OurTeam dictionary={dictionary} lang={params.lang} />;
}
