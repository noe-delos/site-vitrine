"use client";
import { useRouter } from "next/navigation";

export default function ContactUs({ dictionary }: { dictionary: any }) {
  const router = useRouter();
  return (
    <section className="w-full py-16 px-4 pb-[15rem] bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
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

          <button
            onClick={() => {
              router.push("/contact");
            }}
            className="inline-flex items-center justify-center px-8 py-2 
            text-sm font-medium rounded-lg text-white
            bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
            hover:from-gray-800 hover:via-gray-700 hover:to-gray-800
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 
            transition-all duration-300 ease-in-out 
            shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
            border border-gray-700 hover:border-gray-600"
          >
            {dictionary.contact.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
