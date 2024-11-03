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

export default function HomePage() {
  return (
    <>
      <Hero />
      <Description />
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
