'use client';
import { RainbowButton } from '@/components/acernity/gradient-btn';
import { useRouter } from 'next/navigation';

export default function ContactUs({ dictionary }: { dictionary: any }) {
  const router = useRouter();
  return (
    <section className="w-full py-16 px-4 pb-[15rem] bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          {dictionary.contact.title}
        </h2>

        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          {dictionary.contact.description}
        </p>

        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-sm uppercase tracking-wider text-gray-400 mb-1">
                {dictionary.contact.contact_info.email.label}
              </span>
              <span className="text-gray-700 font-medium">
                {dictionary.contact.contact_info.email.value}
              </span>
            </div>

            <div className="w-px h-8 bg-gray-200 hidden sm:block" />

            <div className="flex flex-col items-center sm:items-start">
              <span className="text-sm uppercase tracking-wider text-gray-400 mb-1">
                {dictionary.contact.contact_info.phone.label}
              </span>
              <span className="text-gray-700 font-medium">
                {dictionary.contact.contact_info.phone.value}
              </span>
            </div>
          </div>

          <RainbowButton
            onClick={() => {
              router.push('/contact');
            }}
          >
            {dictionary.contact.cta}
          </RainbowButton>
        </div>
      </div>
    </section>
  );
}
