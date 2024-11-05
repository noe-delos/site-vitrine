// src/app/page.tsx
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
import { Locale } from '@/i18n-config';

export default async function HomePage({ params: { lang } }: { params: { lang: Locale } }) {
    const dictionary = await getDictionary(lang);

  return (
    <>
      <Hero dictionary={dictionary} />
      <Description dictionary={dictionary}/>
      <Expertise />
      <div className="md:hidden">
        <MobileTechnologies />
      </div>
      <div className="hidden md:block lg:hidden">
        <TabletTechnologies />
      </div>
      <div className="hidden lg:block">
        <Technologies />
      </div>
      <ContactUs />
    </>
  );
}
