import ContactUs from '@/components/contact-us';
import Description from '@/components/description';
import Expertise from '@/components/expertise';
import Hero from '@/components/hero';
import Technologies from '@/components/technologies';
import {
  default as MobileTechnologies,
  default as TabletTechnologies,
} from '@/components/technologies-mobile';
import { getDictionary } from '@/get-dictionary';

export default async function HomePage({ params }: any) {
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <Hero dictionary={dictionary} />
      <Description dictionary={dictionary} />
      <Expertise dictionary={dictionary} />
      <div className="md:hidden">
        <MobileTechnologies dictionary={dictionary} />
      </div>
      <div className="hidden md:block lg:hidden">
        <TabletTechnologies dictionary={dictionary} />
      </div>
      <div className="hidden lg:block">
        <Technologies dictionary={dictionary} />
      </div>
      <ContactUs dictionary={dictionary} />
    </>
  );
}