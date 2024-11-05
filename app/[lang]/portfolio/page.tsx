import PortfolioPage from '@/components/sections/portfolio';
import { getDictionary } from '@/get-dictionary';

export default async function Page({ params }: any) {
  const dictionary = await getDictionary(params.lang);

  return <PortfolioPage dictionary={dictionary} />;
}
