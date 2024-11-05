import ContactPage from '@/components/sections/contact';
import { getDictionary } from '@/get-dictionary';

export default async function Page({ params }: any) {
  const dictionary = await getDictionary(params.lang);

  return <ContactPage dictionary={dictionary} />;
}
