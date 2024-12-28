import ServicesPage from '@/components/sections/services';
import { getDictionary } from '@/get-dictionary';

export default async function Page({ params }: any) {
  const dictionary = await getDictionary(params.lang);

  return <ServicesPage dictionary={dictionary} />;
}
