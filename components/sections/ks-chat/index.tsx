"use client";

import { ShinyButton } from "@/components/acernity/shiny-button";
import { TypewriterEffect } from "@/components/acernity/typewriter-effect";
import { cn } from "@/utils/cn";
import { Icon } from "@iconify/react";
import { useChat } from "ai/react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Copy, Loader2, RefreshCw, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

interface ImageMapping {
  [messageId: string]: string[];
}

interface SimulatorForm {
  sector: string;
  activity: string;
  serviceType: string;
  useDocuments: boolean;
  documentTypes: string[];
  useCase: string;
  problemDescription: string;
}

const MAX_IMAGES = 5;

const SECTORS = [
  "Finance & Banking",
  "Healthcare",
  "Retail & E-commerce",
  "Manufacturing",
  "Education",
  "Legal",
  "Real Estate",
  "Technology",
  "Transportation & Logistics",
  "Energy & Utilities",
];

const SERVICE_TYPES = [
  "Customer Service",
  "Data Analysis",
  "Document Processing",
  "Quality Control",
  "Resource Management",
  "Sales & Marketing",
  "Supply Chain",
  "Administrative Tasks",
  "Research & Development",
  "Training & Education",
];

const DOCUMENT_TYPES = [
  "Text Documents",
  "Spreadsheets",
  "PDFs",
  "Images",
  "Audio Files",
  "Video Files",
  "Presentations",
  "Forms",
  "Contracts",
  "Technical Documentation",
];

const SECTEURS_ACTIVITE = [
  "Finance et Banque",
  "Santé",
  "Commerce et E-commerce",
  "Industrie",
  "Éducation",
  "Juridique",
  "Immobilier",
  "Technologie",
  "Transport et Logistique",
  "Énergie et Services Publics",
];

const TYPES_SERVICES = [
  "Service Client",
  "Analyse de Données",
  "Traitement de Documents",
  "Contrôle Qualité",
  "Gestion des Ressources",
  "Ventes et Marketing",
  "Chaîne d'Approvisionnement",
  "Tâches Administratives",
  "Recherche et Développement",
  "Formation et Éducation",
];

const TYPES_DOCUMENTS = [
  "Documents Texte",
  "Tableurs",
  "PDFs",
  "Images",
  "Fichiers Audio",
  "Fichiers Vidéo",
  "Présentations",
  "Formulaires",
  "Contrats",
  "Documentation Technique",
];

const getDomainFromUrl = (url: string) => {
  try {
    const domain = new URL(url).hostname.replace("www.", "");
    return domain;
  } catch {
    return url;
  }
};

const CustomSelect = ({
  value,
  onChange,
  options,
  placeholder,
  hasError,
  isMulti = false,
}: {
  value: string | string[];
  onChange: (value: string | string[]) => void;
  options: string[];
  placeholder: string;
  hasError?: boolean;
  isMulti?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (option: string) => {
    if (isMulti) {
      const currentValues = Array.isArray(value) ? value : [];
      const newValues = currentValues.includes(option)
        ? currentValues.filter((v) => v !== option)
        : [...currentValues, option];
      onChange(newValues);
    } else {
      onChange(option);
      setIsOpen(false);
    }
  };

  const displayValue = isMulti
    ? (Array.isArray(value) ? value : []).slice(0, 2).join(", ") +
      (Array.isArray(value) && value.length > 2
        ? ` (+${value.length - 2} more)`
        : "")
    : value;

  return (
    <div className="relative" ref={selectRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full px-4 py-2 text-left rounded-lg bg-white hover:bg-gray-50 focus:outline-none transition-all flex items-center justify-between",
          hasError
            ? "border-red-500 border-[0.5px] ring-red-500"
            : "border-none"
        )}
      >
        {displayValue || placeholder}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleOptionClick(option)}
              className={cn(
                "w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center justify-between",
                isMulti
                  ? Array.isArray(value) && value.includes(option)
                    ? "bg-blue-50 text-blue-600"
                    : ""
                  : value === option
                    ? "bg-blue-50 text-blue-600"
                    : ""
              )}
            >
              {option}
              {isMulti && Array.isArray(value) && value.includes(option) && (
                <Check className="w-4 h-4 text-blue-600" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function KsChat({
  dictionary,
  lang,
}: {
  dictionary: any;
  lang: string;
}) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [imageMapping, setImageMapping] = useState<ImageMapping>({});
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const [selectedPrompt, setSelectedPrompt] = useState<null | { text: string }>(
    null
  );
  const [isTyping, setIsTyping] = useState(false);
  const [showSimulator, setShowSimulator] = useState(false);
  const [simulatorForm, setSimulatorForm] = useState<SimulatorForm>({
    sector: "",
    activity: "",
    serviceType: "",
    useDocuments: false,
    documentTypes: [],
    useCase: "",
    problemDescription: "",
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    reload,
    append,
  } = useChat({
    api: "/api/chat",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToBottom = () => {
    if (chatContainerRef.current && shouldAutoScroll) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, shouldAutoScroll]);

  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        chatContainerRef.current;
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 50;
      setShouldAutoScroll(isAtBottom);
    }
  };

  const convertFileToDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    setIsUploading(true);
    try {
      const remainingSlots = MAX_IMAGES - imageUrls.length;
      const filesToProcess = files.slice(0, remainingSlots);
      const newDataUrls = await Promise.all(
        filesToProcess.map(convertFileToDataURL)
      );
      setImageUrls((prev) => [...prev, ...newDataUrls].slice(0, MAX_IMAGES));
    } catch (error) {
      console.error("Error uploading images:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleImagePaste = async (e: React.ClipboardEvent) => {
    const items = Array.from(e.clipboardData?.items || []);
    const imageItems = items.filter((item) => item.type.startsWith("image/"));

    if (imageItems.length === 0) return;

    setIsUploading(true);
    try {
      const remainingSlots = MAX_IMAGES - imageUrls.length;
      const itemsToProcess = imageItems.slice(0, remainingSlots);
      const newDataUrls = await Promise.all(
        itemsToProcess.map((item) => {
          const file = item.getAsFile();
          return file ? convertFileToDataURL(file) : Promise.reject();
        })
      );
      setImageUrls((prev) => [...prev, ...newDataUrls].slice(0, MAX_IMAGES));
    } catch (error) {
      console.error("Error processing pasted images:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const removeImage = (index: number) => {
    setImageUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShouldAutoScroll(true);

    if (!input && imageUrls.length === 0) return;

    const currentImageUrls = [...imageUrls];

    if (currentImageUrls.length > 0) {
      const tempId = Date.now().toString();
      setImageMapping((prev) => ({
        ...prev,
        [tempId]: currentImageUrls,
      }));
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setImageUrls([]);

    try {
      handleSubmit(e, {
        data: currentImageUrls.length
          ? { imageUrls: currentImageUrls }
          : undefined,
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleSimulatorSubmit = () => {
    const promptText = `As a business owner, I would like to receive an AI solution proposal. Here are the details:

**Sector**: ${simulatorForm.sector}
**Activity**: ${simulatorForm.activity}
**Service Type**: ${simulatorForm.serviceType}
**Documents Used**: ${simulatorForm.documentTypes.length > 0 ? simulatorForm.documentTypes.join(", ") : "None"}
${simulatorForm.useCase ? `**Use Case Example**: ${simulatorForm.useCase}` : ""}
**Problem Description**: ${simulatorForm.problemDescription}

Please provide suggestions on how generative AI could improve my business operations without being too technical.`;

    append(
      { role: "user", content: promptText },
      { data: { text: promptText } }
    );
    setShowSimulator(false);
  };

  const copyToClipboard = async (text: string, messageId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMessageId(messageId);
      setTimeout(() => {
        setCopiedMessageId(null);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  const handlePromptClick = (prompt: any) => {
    setSelectedPrompt({ text: prompt });
    setIsTyping(true);
  };

  const handleTypewriterComplete = () => {
    if (selectedPrompt?.text) {
      append(
        { role: "user", content: selectedPrompt.text },
        { data: { text: selectedPrompt.text } }
      );
      setIsTyping(false);
      setSelectedPrompt(null);
    }
  };

  const [formErrors, setFormErrors] = useState({
    sector: false,
    activity: false,
    serviceType: false,
    problemDescription: false,
  });

  useEffect(() => {
    if (!showSimulator) {
      setFormErrors({
        sector: false,
        activity: false,
        serviceType: false,
        problemDescription: false,
      });
    }
  }, [showSimulator]);

  const renderSimulatorForm = () => {
    const validateForm = () => {
      const newErrors = {
        sector: !simulatorForm.sector,
        activity: !simulatorForm.activity,
        serviceType: !simulatorForm.serviceType,
        problemDescription: !simulatorForm.problemDescription,
      };

      setFormErrors(newErrors);
      return !Object.values(newErrors).some((error) => error);
    };

    const handleSubmit = (e?: React.FormEvent) => {
      e?.preventDefault();

      if (validateForm()) {
        handleSimulatorSubmit();
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full p-4 md:p-6 rounded-xl bg-gray-100 shadow-sm space-y-4 mt-3"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-2 mb-3"
          >
            <p className="text-gray-600 text-sm md:text-base">
              {dictionary.simulator.title}
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-2.5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col md:flex-row md:items-center gap-2"
            >
              <span className="text-gray-600 text-sm md:text-base">
                {dictionary.simulator.company_operates}
              </span>
              <div className="w-full md:w-48">
                <CustomSelect
                  value={simulatorForm.sector}
                  onChange={(value) => {
                    setSimulatorForm({
                      ...simulatorForm,
                      sector: value as string,
                    });
                    setFormErrors({ ...formErrors, sector: false });
                  }}
                  options={lang === "fr" ? SECTEURS_ACTIVITE : SECTORS}
                  placeholder={dictionary.simulator.select_sector}
                  hasError={formErrors.sector}
                />
              </div>
              <span className="text-gray-600 text-sm md:text-base">
                {dictionary.simulator.main_focus}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col md:flex-row md:items-center gap-2"
            >
              <span className="text-gray-600 text-sm md:text-base">
                {dictionary.simulator.focusing_on}
              </span>
              <div className="w-full md:w-48">
                <CustomSelect
                  value={simulatorForm.serviceType}
                  onChange={(value) => {
                    setSimulatorForm({
                      ...simulatorForm,
                      serviceType: value as string,
                    });
                    setFormErrors({ ...formErrors, serviceType: false });
                  }}
                  options={lang === "fr" ? TYPES_SERVICES : SERVICE_TYPES}
                  placeholder={dictionary.simulator.select_service}
                  hasError={formErrors.serviceType}
                />
              </div>
              <span className="text-gray-600 text-sm md:text-base whitespace-nowrap">
                {dictionary.simulator.core_activities}
              </span>
              <input
                type="text"
                placeholder={dictionary.simulator.main_activity_placeholder}
                value={simulatorForm.activity}
                onChange={(e) => {
                  setSimulatorForm({
                    ...simulatorForm,
                    activity: e.target.value,
                  });
                  setFormErrors({ ...formErrors, activity: false });
                }}
                onKeyDown={handleKeyDown}
                className={cn(
                  "w-full flex-1 px-3 py-2 rounded-lg bg-white focus:outline-none text-sm md:text-base",
                  formErrors.activity
                    ? "border-[0.5px] border-red-500 ring-red-500"
                    : "border-none"
                )}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="space-y-2"
            >
              <label className="block text-gray-700 text-sm md:text-base mb-2">
                {dictionary.simulator.document_formats_label}
              </label>
              <CustomSelect
                value={simulatorForm.documentTypes}
                onChange={(value) => {
                  setSimulatorForm({
                    ...simulatorForm,
                    documentTypes: value as string[],
                  });
                }}
                options={lang === "fr" ? TYPES_DOCUMENTS : DOCUMENT_TYPES}
                placeholder={dictionary.simulator.select_document_types}
                isMulti={true}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="space-y-2"
            >
              <label className="block font-medium text-gray-700 text-sm md:text-base">
                {dictionary.simulator.challenges_label}
              </label>
              <textarea
                placeholder={dictionary.simulator.challenge_placeholder}
                value={simulatorForm.problemDescription}
                onChange={(e) => {
                  setSimulatorForm({
                    ...simulatorForm,
                    problemDescription: e.target.value,
                  });
                  setFormErrors({ ...formErrors, problemDescription: false });
                }}
                onKeyDown={handleKeyDown}
                className={cn(
                  "w-full px-4 py-2 resize-none rounded-lg bg-white focus:outline-none text-sm md:text-base",
                  formErrors.problemDescription
                    ? "border-[0.5px] border-red-500 ring-red-500"
                    : "border-none"
                )}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex justify-end space-x-2 pt-1"
            >
              <button
                type="button"
                onClick={() => setShowSimulator(false)}
                className="px-3 md:px-4 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors text-sm md:text-base"
              >
                {dictionary.simulator.cancel_button}
              </button>
              <button
                type="submit"
                className="px-3 md:px-4 py-2 md:py-3 rounded-lg bg-gradient-to-b from-zinc-600 to-zinc-950 text-white hover:opacity-90 transition-opacity"
              >
                <Icon
                  icon="formkit:submit"
                  className="text-white size-4 md:size-5"
                />
              </button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    );
  };

  const renderMessage = (message: any) => {
    if (
      message.content.includes(
        "As a business owner, I would like to receive an AI solution proposal"
      )
    ) {
      return null;
    }

    const isSimulatorResponse =
      messages.findIndex(
        (msg: any) =>
          msg.id !== message.id &&
          msg.content.includes(
            "As a business owner, I would like to receive an AI solution proposal"
          )
      ) !== -1 && message.role === "assistant";

    const associatedImages =
      Object.entries(imageMapping).find(([tempId]) => {
        return (
          Math.abs(parseInt(tempId) - new Date(message.createdAt).getTime()) <
          1000
        );
      })?.[1] || [];

    return (
      <motion.div
        key={message.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`flex no-scrollbar ${message.role === "user" ? "justify-end" : "justify-start"} mb-4`}
      >
        {message.role === "assistant" && (
          <div className="w-8 h-8 rounded-full mt-9 bg-black flex items-center justify-center mr-2 flex-shrink-0">
            <img
              src="/fr/logo/brand-logo-white.png"
              alt="AI Avatar"
              className="w-5 h-5"
            />
          </div>
        )}
        <div
          className={`flex flex-col max-w-[70%] ${message.role === "user" ? "" : "w-full"} pb-3 no-scrollbar`}
        >
          {message.role === "user" && associatedImages.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mb-2">
              {associatedImages.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Uploaded content ${index + 1}`}
                  className="w-32 h-32 rounded-lg object-cover"
                  onLoad={scrollToBottom}
                />
              ))}
            </div>
          )}
          <div
            className={`rounded-2xl px-4 py-2 ${message.role === "user" ? "bg-gray-100" : "bg-white"}`}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="text-2xl font-bold mb-4 mt-6" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-xl font-bold mb-3 mt-5" {...props} />
                ),
                img: ({ node, src, alt, ...props }) => {
                  const isModelLogo =
                    src?.includes("logo") || src?.includes("Logo");
                  return (
                    <img
                      src={src}
                      alt={alt}
                      className={cn(
                        "rounded-md",
                        isModelLogo
                          ? "h-20 w-auto object-contain"
                          : "w-fit h-36 object-contain"
                      )}
                      {...props}
                    />
                  );
                },
                h3: ({ node, ...props }) => (
                  <h3 className="text-lg font-bold mb-2 mt-4" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="mb-4 leading-7" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc pl-6 mb-4" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal pl-6 mb-4" {...props} />
                ),
                li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    className="border-l-4 border-gray-300 pl-4 italic my-4"
                    {...props}
                  />
                ),
                hr: ({ node, ...props }) => (
                  <hr className="my-6 border-t border-gray-300" {...props} />
                ),
                table: ({ node, ...props }) => (
                  <div className="overflow-x-auto my-4">
                    <table className="min-w-full border-collapse" {...props} />
                  </div>
                ),
                th: ({ node, ...props }) => (
                  <th
                    className="border border-gray-300 bg-gray-100 px-4 py-2 text-left"
                    {...props}
                  />
                ),
                td: ({ node, ...props }) => (
                  <td className="border border-gray-300 px-4 py-2" {...props} />
                ),
                a: ({ node, href, children, ...props }) => (
                  <a
                    href={href}
                    className="text-blue-600 font-semibold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={href ? getDomainFromUrl(href) : undefined}
                    {...props}
                  >
                    {children || (href ? getDomainFromUrl(href) : href)}
                  </a>
                ),
              }}
              className={cn(
                "prose prose-sm w-full max-w-none break-words overflow-hidden",
                "prose-headings:font-bold prose-headings:text-black",
                "prose-p:leading-7 prose-p:mb-4",
                "prose-ul:my-4 prose-li:my-1",
                "prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded-lg",
                "prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4",
                "prose-a:text-blue-600 prose-a:font-semibold hover:prose-a:underline"
              )}
            >
              {message.content}
            </ReactMarkdown>

            {isSimulatorResponse && !isLoading && (
              <div className="mt-6 bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl p-5 relative overflow-hidden">
                <div className="absolute -right-2 -bottom-8">
                  <img
                    src="/fr/logo/brand-logo-white.png"
                    alt="Brand Logo"
                    className="size-40 opacity-30"
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Need help with your AI project?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Get personalized guidance from our AI experts and
                      transform your business
                    </p>
                  </div>
                  <a
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-black text-white hover:opacity-90 transition-opacity text-sm whitespace-nowrap"
                  >
                    Contact Us
                    <svg
                      className="ml-2 w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            )}

            {message.role === "assistant" && (
              <div className="flex gap-2 mt-2 text-gray-400">
                <button
                  onClick={() => copyToClipboard(message.content, message.id)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  {copiedMessageId === message.id ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => reload()}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  };
  const prompts = [
    {
      icon: "fa6-solid:handshake",
      text: dictionary.gpt.q1_label,
      prompt: dictionary.gpt.q1_question,
      color: "",
    },
    {
      icon: "ant-design:fire-filled",
      text: dictionary.gpt.q2_label,
      prompt: dictionary.gpt.q2_question,
      color: "text-black",
    },
    {
      icon: "mingcute:sparkles-fill",
      text: dictionary.gpt.q3_label,
      prompt: dictionary.gpt.q3_question,
      color: "text-black",
    },
  ];

  const renderImagePreviews = () => (
    <div className="flex gap-7 mt-0 pb-5 pl-5">
      {imageUrls.map((url, index) => (
        <div key={index} className="relative group">
          <img
            src={url}
            alt={`Preview ${index + 1}`}
            className="h-16 w-16 object-cover rounded-lg"
          />
          <button
            type="button"
            onClick={() => removeImage(index)}
            className="absolute -top-2 -right-2 bg-black text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X className="size-3" />
          </button>
        </div>
      ))}
    </div>
  );

  return !mounted ? (
    <></>
  ) : (
    <>
      <button
        onClick={() => router.push(`/${lang}/`)}
        className="absolute top-4 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 48 48"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          >
            <path d="M12.9998 8L6 14L12.9998 21" />
            <path d="M6 14H28.9999C35.6274 14 41 19.3726 41 26C41 32.6274 35.6274 38 28.9999 38H12" />
          </g>
        </svg>
      </button>
      <div
        className={`relative overflow-auto pt-[10rem] sm:pt-0 md:overflow-hidden max-w-4xl mx-auto ${messages.length === 0 ? "h-screen" : "h-screen"}`}
      >
        {messages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center h-full px-4"
          >
            <h1 className="text-5xl md:text-4xl flex flex-col font-extrabold mb-8 md:flex-row gap-6 md:gap-2 items-center">
              {dictionary.gpt.title1}
              <span className="flex flex-row gap-2 items-center">
                <img
                  src="/en/logo/logo-circle.png"
                  alt="circle logo"
                  className="size-16"
                />
                GPT
              </span>
            </h1>
            {!showSimulator && (
              <p className="text-center text-zinc-300 mt-5 md:mt-0 mx-5 md:mx-0 mb-8 max-w-lg">
                {dictionary.gpt.description}
              </p>
            )}
            <div className="w-full max-w-3xl">
              {imageUrls.length > 0 && renderImagePreviews()}

              <AnimatePresence mode="wait">
                {showSimulator ? (
                  renderSimulatorForm()
                ) : (
                  <form onSubmit={handleFormSubmit} className="relative">
                    {isTyping && selectedPrompt?.text ? (
                      <div className="w-full px-6 rounded-full bg-gray-100">
                        <TypewriterEffect
                          words={selectedPrompt.text
                            .split(" ")
                            .map((word) => ({ text: word, classname: "" }))}
                          duration={0.04}
                          className={cn("h-full py-3 border-none")}
                          onComplete={handleTypewriterComplete}
                        />
                      </div>
                    ) : (
                      <input
                        value={input}
                        onChange={handleInputChange}
                        onPaste={handleImagePaste}
                        placeholder={dictionary.gpt.placeholder}
                        className="w-full py-3 px-6 rounded-full bg-gray-100 focus:outline-none  pr-24"
                        disabled={isLoading}
                      />
                    )}
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        ref={fileInputRef}
                        className="hidden"
                        multiple
                        max={MAX_IMAGES}
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="p-2 hover:bg-gray-200 rounded-full transition-colors relative"
                        disabled={
                          isLoading ||
                          isUploading ||
                          imageUrls.length >= MAX_IMAGES
                        }
                      >
                        {isUploading ? (
                          <Loader2 className="w-5 h-5 animate-spin text-black" />
                        ) : (
                          <Icon
                            icon="mynaui:image-solid"
                            className="size-6 text-zinc-600"
                          />
                        )}
                      </button>
                      <button
                        type="submit"
                        disabled={
                          isLoading || (!input && imageUrls.length === 0)
                        }
                        className="p-2 hover:bg-gray-200 rounded-full pr-3 transition-colors disabled:bg-transparent disabled:cursor-default disabled:opacity-50"
                      >
                        {isLoading ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <Icon
                            icon="mynaui:send-solid"
                            className="size-6 text-zinc-600"
                          />
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>

              {!showSimulator && (
                <>
                  <div className="flex md:gap-3 mt-10 md:mt-6 md:w-full justify-center flex-col md:flex-row w-fit items-center mx-auto md:mx-0 gap-5">
                    {prompts.map((prompt) => (
                      <motion.button
                        key={prompt.text}
                        onClick={() => handlePromptClick(prompt.prompt)}
                        className="flex items-center gap-2 px-6 py-2 bg-zinc-100 rounded-md shadow-sm hover:bg-zinc-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{
                          scale: 1.02,
                          transition: { duration: 0.2 },
                        }}
                        disabled={imageUrls.length > 0}
                      >
                        <Icon
                          icon={prompt.icon}
                          className={`size-5 ${prompt.color}`}
                        />
                        <span className="ml-1 font-extralight text-zinc-600">
                          {prompt.text}
                        </span>
                      </motion.button>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-center">
                    <ShinyButton
                      onClick={() => setShowSimulator(true)}
                      disabled={imageUrls.length > 0}
                    >
                      <div className="flex flex-row items-center gap-2">
                        <Icon
                          icon="ant-design:bulb-filled"
                          className={`size-5 text-white`}
                        />
                        <span className="text-white"> Simulateur KS</span>
                      </div>
                    </ShinyButton>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        ) : (
          <>
            <div
              ref={chatContainerRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto no-scrollbar p-4 pt-14 space-y-4 h-[calc(100vh-80px)]"
            >
              <AnimatePresence>{messages.map(renderMessage)}</AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              className="sticky bottom-0 bg-white/80 backdrop-blur-sm p-4"
            >
              <form
                onSubmit={handleFormSubmit}
                className="relative max-w-4xl mx-auto"
              >
                {imageUrls.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-24 left-0 flex gap-2"
                  >
                    {imageUrls.map((url, index) => (
                      <div key={index} className="relative">
                        <img
                          src={url}
                          alt={`Preview ${index + 1}`}
                          className="h-16 w-16 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-black text-white rounded-full p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </motion.div>
                )}

                <div className="relative">
                  {isTyping && selectedPrompt?.text ? (
                    <div className="w-full py-3 px-6 rounded-full bg-gray-100">
                      <TypewriterEffect
                        words={[{ text: selectedPrompt.text, className: "" }]}
                        duration={0.04}
                        className={cn("h-12 min-h-[48px] border-none")}
                        onComplete={handleTypewriterComplete}
                      />
                    </div>
                  ) : (
                    <input
                      value={input}
                      onChange={handleInputChange}
                      onPaste={handleImagePaste}
                      placeholder={dictionary.gpt.placeholder}
                      className="w-full py-3 px-6 rounded-full bg-gray-100 focus:outline-none pr-24"
                      disabled={isLoading}
                    />
                  )}

                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      ref={fileInputRef}
                      className="hidden"
                      multiple
                      max={MAX_IMAGES}
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="p-2 hover:bg-gray-200 rounded-full transition-colors relative"
                      disabled={
                        isLoading ||
                        isUploading ||
                        imageUrls.length >= MAX_IMAGES
                      }
                    >
                      {isUploading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Icon
                          icon="mynaui:image-solid"
                          className="size-6 text-zinc-600"
                        />
                      )}
                      {imageUrls.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                          {imageUrls.length}
                        </span>
                      )}
                    </button>

                    <button
                      type="submit"
                      disabled={isLoading || (!input && imageUrls.length === 0)}
                      className="p-2 hover:bg-gray-200 rounded-full transition-colors disabled:opacity-50"
                    >
                      {isLoading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Icon
                          icon="mynaui:send-solid"
                          className="size-6 text-zinc-700"
                        />
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </div>
    </>
  );
}
