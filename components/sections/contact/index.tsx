"use client";
import { WorldMap } from "@/components/acernity/world-map";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { memo, useState } from "react";
import { toast } from "sonner";

const Globe3D = dynamic(() => import("@/components/Globe3D"), { ssr: false });

// Memoized hero section to prevent re-renders
const Hero = memo(({ dictionary }: { dictionary: any }) => (
  <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
    <div className="block sm:hidden absolute inset-0">
      <Globe3D />
    </div>
    <div className="hidden sm:block absolute inset-0">
      <WorldMap
        dots={[
          {
            start: { lat: 64.2008, lng: -149.4937 },
            end: { lat: 34.0522, lng: -118.2437 },
          },
          {
            start: { lat: 64.2008, lng: -149.4937 },
            end: { lat: -15.7975, lng: -47.8919 },
          },
          {
            start: { lat: -15.7975, lng: -47.8919 },
            end: { lat: 38.7223, lng: -9.1393 },
          },
          {
            start: { lat: 51.5074, lng: -0.1278 },
            end: { lat: 28.6139, lng: 77.209 },
          },
          {
            start: { lat: 28.6139, lng: 77.209 },
            end: { lat: 43.1332, lng: 131.9113 },
          },
          {
            start: { lat: 28.6139, lng: 77.209 },
            end: { lat: -1.2921, lng: 36.8219 },
          },
        ]}
      />
    </div>

    <div className="relative z-10 text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 mb-6 flex flex-row items-center justify-center"
      >
        {dictionary.contactPage.hero.title1}
        <span className="font-extrabold font-sans bg-clip-text text-transparent bg-gradient-to-r from-[#7066CB] to-blue-500">
          {dictionary.contactPage.hero.title2}
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
      >
        {dictionary.contactPage.hero.subtitle}
      </motion.p>
    </div>

    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
  </section>
));

Hero.displayName = "Hero";

// Memoized contact info section
const ContactInfo = memo(({ dictionary }: { dictionary: any }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="space-y-8"
  >
    <div>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
        {dictionary.contactPage.info.title}
      </h2>
      <p className="text-gray-600">{dictionary.contactPage.info.description}</p>
    </div>

    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
      <div className="flex flex-col items-center sm:items-start">
        <span className="text-sm uppercase tracking-wider text-gray-400 mb-1">
          {dictionary.contactPage.info.email.label}
        </span>
        <span className="text-gray-700 font-medium">
          {dictionary.contactPage.info.email.value}
        </span>
      </div>

      <div className="w-px h-8 bg-gray-200 hidden sm:block" />

      <div className="flex flex-col items-center sm:items-start">
        <span className="text-sm uppercase tracking-wider text-gray-400 mb-1">
          {dictionary.contactPage.info.phone.label}
        </span>
        <span className="text-gray-700 font-medium">
          {dictionary.contactPage.info.phone.value}
        </span>
      </div>
    </div>
  </motion.div>
));

ContactInfo.displayName = "ContactInfo";

// Memoized Input Component
const FormInput = memo(
  ({
    id,
    label,
    value,
    onChange,
    type = "text",
    disabled,
    required = false,
  }: {
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    disabled?: boolean;
    required?: boolean;
  }) => (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        required={required}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#7066CB] focus:border-transparent outline-none transition"
      />
    </div>
  )
);

FormInput.displayName = "FormInput";

// Memoized Textarea Component
const FormTextarea = memo(
  ({
    value,
    onChange,
    disabled,
    label,
    required = false,
  }: {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    label: string;
    required?: boolean;
  }) => (
    <div>
      <label
        htmlFor="message"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <textarea
        id="message"
        rows={6}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        required={required}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#7066CB] focus:border-transparent outline-none transition"
      />
    </div>
  )
);

FormTextarea.displayName = "FormTextarea";

// Memoized Submit Button
const SubmitButton = memo(
  ({ loading, dictionary }: { loading: boolean; dictionary: any }) => (
    <motion.button
      whileHover={{ scale: loading ? 1 : 1.03 }}
      whileTap={{ scale: loading ? 1 : 0.98 }}
      className="relative w-full group"
      disabled={loading}
      type="submit"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#7066CB] to-blue-500 rounded-md opacity-100 transition-opacity duration-300" />
      <div className="relative bg-white rounded-[5px] m-[1px] py-3 transition-all duration-300 hover:bg-gray-50">
        <span className="text-gray-900 font-medium">
          {loading
            ? dictionary.contactPage.form.sending
            : dictionary.contactPage.form.submit}
        </span>
      </div>
      <div className="absolute inset-0 rounded-md overflow-hidden">
        <div className="absolute inset-0 translate-x-[-100%] animate-[shine_3s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform" />
      </div>
    </motion.button>
  )
);

SubmitButton.displayName = "SubmitButton";

// Contact Form with optimized inputs
const ContactForm = memo(({ dictionary }: { dictionary: any }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name,
      email,
      company,
      message,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success(dictionary.contactPage.form.success);

      // Reset form
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    } catch (error) {
      toast.error(dictionary.contactPage.form.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            id="name"
            label={dictionary.contactPage.form.fullName}
            value={name}
            onChange={setName}
            disabled={loading}
            required
          />
          <FormInput
            id="company"
            label={dictionary.contactPage.form.company}
            value={company}
            onChange={setCompany}
            disabled={loading}
          />
        </div>

        <FormInput
          id="email"
          type="email"
          label={dictionary.contactPage.form.email}
          value={email}
          onChange={setEmail}
          disabled={loading}
          required
        />

        <FormTextarea
          value={message}
          onChange={setMessage}
          disabled={loading}
          label={dictionary.contactPage.form.message}
          required
        />

        <SubmitButton loading={loading} dictionary={dictionary} />
      </form>
    </motion.div>
  );
});

ContactForm.displayName = "ContactForm";

const ContactPage = ({ dictionary }: { dictionary: any }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Hero dictionary={dictionary} />
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactInfo dictionary={dictionary} />
          <ContactForm dictionary={dictionary} />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
