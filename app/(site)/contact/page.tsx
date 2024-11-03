// app/contact/page.tsx
'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { toast } from 'sonner';
// Import dynamique du globe pour éviter les erreurs SSR
const Globe3D = dynamic(() => import('@/components/Globe3D'), { ssr: false });

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success('Message bien reçu ! Nous vous répondrons au plus vite.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    } catch (error) {
      toast.error('Une erreur est survenue, veuillez réessayer plus tard.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section avec Globe */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Globe3D />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Connectons-nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            De Paris au reste du monde, nous créons des solutions innovantes
            pour n'importe qui.
          </motion.p>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* Contact Form Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Parlons de votre projet
              </h2>
              <p className="text-gray-600">
                Que vous soyez une startup ambitieuse ou une entreprise établie,
                nous sommes là pour transformer vos idées en réalité.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-sm uppercase tracking-wider text-gray-400 mb-1">
                  Email
                </span>
                <span className="text-gray-700 font-medium">
                  contact@ks-entreprise.com
                </span>
              </div>

              <div className="w-px h-8 bg-gray-200 hidden sm:block" />

              <div className="flex flex-col items-center sm:items-start">
                <span className="text-sm uppercase tracking-wider text-gray-400 mb-1">
                  Téléphone
                </span>
                <span className="text-gray-700 font-medium">
                  07 68 56 68 36
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#7066CB] focus:border-transparent outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#7066CB] focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#7066CB] focus:border-transparent outline-none transition"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#7066CB] focus:border-transparent outline-none transition"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: loading ? 1 : 1.03 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="relative w-full group"
                disabled={loading}
              >
                {/* Gradient border container */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#7066CB] to-blue-500 rounded-md opacity-100 transition-opacity duration-300" />

                {/* White background and content */}
                <div className="relative bg-white rounded-[5px] m-[1px] py-3 transition-all duration-300 hover:bg-gray-50">
                  <span className="text-gray-900 font-medium">
                    {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                  </span>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-md overflow-hidden">
                  <div className="absolute inset-0 translate-x-[-100%] animate-[shine_3s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform" />
                </div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
