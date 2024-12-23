"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface CookieConsentProps {
  privacyPolicyUrl?: string;
  dictionary: {
    cookie: {
      title: string;
      description: string;
      acceptButton: string;
      declineButton: string;
      privacyPolicy: string;
    };
  };
}

const CookieConsent: React.FC<CookieConsentProps> = ({
  privacyPolicyUrl = "/",
  dictionary,
}) => {
  const [showConsent, setShowConsent] = useState<boolean>(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookieConsent");

    const timer = setTimeout(() => {
      if (!consentGiven) {
        setShowConsent(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -50, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: -50, y: 20 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.4,
        }}
        className="fixed bottom-4 left-4 z-50 max-w-md bg-white rounded-lg shadow-lg py-4 px-5 border border-gray-100"
      >
        <div className="space-y-3">
          <div className="space-y-1.5">
            <h3 className="text-base font-medium text-gray-900">
              {dictionary.cookie.title}
            </h3>
            <p className="text-xs text-gray-600">
              {dictionary.cookie.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleAccept}
              className="w-full sm:w-auto px-4 py-1.5 bg-black hover:bg-gray-800 text-white font-medium rounded-md text-xs transition-colors"
            >
              {dictionary.cookie.acceptButton}
            </button>
            <button
              onClick={handleDecline}
              className="w-full sm:w-auto px-4 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-md text-xs transition-colors border border-gray-200"
            >
              {dictionary.cookie.declineButton}
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
