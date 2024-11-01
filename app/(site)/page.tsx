// src/app/page.tsx
import ContactUs from '@/components/contact-us';
import Description from '@/components/description';
import Expertise from '@/components/expertise';
import Hero from '@/components/hero';
import Technologies from '@/components/technologies';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Description />
      <Expertise />
      <Technologies />
      <ContactUs />
    </>
  );
}
