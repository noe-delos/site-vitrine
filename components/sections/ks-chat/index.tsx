'use client';

import { TypewriterEffect } from '@/components/acernity/typewriter-effect';
import { cn } from '@/utils/cn';
import { Icon } from '@iconify/react';
import { useChat } from 'ai/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, Loader2, RefreshCw, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

interface ImageMapping {
  [messageId: string]: string[];
}

const MAX_IMAGES = 5;

export default function KsChat({ dictionary, lang }: { dictionary: any; lang: string }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [imageMapping, setImageMapping] = useState<ImageMapping>({});
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const [selectedPrompt, setSelectedPrompt] = useState<null | { text: string }>(null);
  const [isTyping, setIsTyping] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, reload, append } = useChat({
    api: '/api/chat',
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToBottom = () => {
    if (chatContainerRef.current && shouldAutoScroll) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, shouldAutoScroll]);

  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
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
      const newDataUrls = await Promise.all(filesToProcess.map(convertFileToDataURL));
      setImageUrls((prev) => [...prev, ...newDataUrls].slice(0, MAX_IMAGES));
    } catch (error) {
      console.error('Error uploading images:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleImagePaste = async (e: React.ClipboardEvent) => {
    const items = Array.from(e.clipboardData?.items || []);
    const imageItems = items.filter((item) => item.type.startsWith('image/'));

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
      console.error('Error processing pasted images:', error);
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
      fileInputRef.current.value = '';
    }
    setImageUrls([]);

    try {
      handleSubmit(e, {
        data: currentImageUrls.length ? { imageUrls: currentImageUrls } : undefined,
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const copyToClipboard = async (text: string, messageId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMessageId(messageId);
      setTimeout(() => {
        setCopiedMessageId(null);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  const handlePromptClick = (prompt: any) => {
    setSelectedPrompt({ text: prompt });
    setIsTyping(true);
  };

  const handleTypewriterComplete = () => {
    if (selectedPrompt?.text) {
      append(
        { role: 'user', content: selectedPrompt.text },
        { data: { text: selectedPrompt.text } }
      );
      setIsTyping(false);
      setSelectedPrompt(null);
    }
  };

  const renderMessage = (message: any) => {
    const associatedImages =
      Object.entries(imageMapping).find(([tempId]) => {
        return Math.abs(parseInt(tempId) - new Date(message.createdAt).getTime()) < 1000;
      })?.[1] || [];

    return (
      <motion.div
        key={message.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`flex no-scrollbar ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
      >
        {message.role === 'assistant' && (
          <div className="w-8 h-8 rounded-full mt-2 bg-black flex items-center justify-center mr-2 flex-shrink-0">
            <img src="/fr/logo/brand-logo-white.png" alt="AI Avatar" className="w-5 h-5" />
          </div>
        )}
        <div className="flex flex-col max-w-[70%] no-scrollbar">
          {message.role === 'user' && associatedImages.length > 0 && (
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
            className={`rounded-2xl px-4 py-2 ${
              message.role === 'user' ? 'bg-gray-100' : 'bg-white'
            }`}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm, [remarkMath]]}
              className={cn(
                'prose prose-sm w-full max-w-none break-words prose-p:leading-relaxed prose-pre:p-0'
              )}
            >
              {message.content}
            </ReactMarkdown>
            {message.role === 'assistant' && (
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

  const prompts = [
    {
      icon: 'fa6-solid:handshake',
      text: dictionary.gpt.q1_label,
      prompt: dictionary.gpt.q1_question,
      color: '',
    },
    {
      icon: 'ant-design:fire-filled',
      text: dictionary.gpt.q2_label,
      prompt: dictionary.gpt.q2_question,
      color: 'text-black',
    },
    {
      icon: 'mingcute:sparkles-fill',
      text: dictionary.gpt.q3_label,
      prompt: dictionary.gpt.q3_question,
      color: 'text-black',
    },
  ];

  return !mounted ? (
    <></>
  ) : (
    <>
      <button
        onClick={() => router.push(`/${lang}/`)}
        className="absolute top-4 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
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
        className={`relative no-scrollbar max-w-4xl mx-auto ${messages.length === 0 ? 'h-screen overflow-hidden' : 'h-screen'}`}
      >
        {messages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center h-full px-4"
          >
            <h1 className="text-5xl md:text-4xl flex flex-col font-bold mb-8  md:flex-row gap-6 md:gap-2 items-center">
              {dictionary.gpt.title1}
              <span className="flex flex-row gap-2 items-center">
                <img src="/en/logo/logo-circle.png" alt="circle logo" className="size-16" />
                GPT
              </span>
            </h1>
            <p className="text-center text-zinc-300 mt-5 md:mt-0 mx-5 md:mx-0 mb-8 max-w-lg">
              {dictionary.gpt.description}
            </p>
            <div className="w-full max-w-3xl">
              {imageUrls.length > 0 && renderImagePreviews()}
              <form onSubmit={handleFormSubmit} className="relative">
                {isTyping && selectedPrompt?.text ? (
                  <div className="w-full px-6 rounded-full bg-gray-100">
                    <TypewriterEffect
                      words={selectedPrompt.text
                        .split(' ')
                        .map((word) => ({ text: word, classname: '' }))}
                      duration={0.04}
                      className={cn('h-full py-3 border-none')}
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
                    disabled={isLoading || isUploading || imageUrls.length >= MAX_IMAGES}
                  >
                    {isUploading ? (
                      <Loader2 className="w-5 h-5 animate-spin text-black" />
                    ) : (
                      <Icon icon="mynaui:image-solid" className="size-6 text-zinc-600" />
                    )}
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading || (!input && imageUrls.length === 0)}
                    className="p-2 hover:bg-gray-200 rounded-full pr-3 transition-colors disabled:bg-transparent disabled:cursor-default disabled:opacity-50"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Icon icon="mynaui:send-solid" className="size-6 text-zinc-600" />
                    )}
                  </button>
                </div>
              </form>
              <div className="flex md:gap-3 mt-10 md:mt-6 md:w-full justify-center flex-col md:flex-row w-fit items-center mx-auto md:mx-0 gap-5">
                {prompts.map((prompt) => (
                  <motion.button
                    key={prompt.text}
                    onClick={() => handlePromptClick(prompt.prompt)}
                    className="flex items-center gap-2 px-6 py-2 bg-zinc-100 rounded-xl shadow-sm hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    disabled={imageUrls.length > 0}
                  >
                    <Icon icon={prompt.icon} className={`size-5 ${prompt.color}`} />
                    <span className="ml-1 font-extralight text-zinc-600">{prompt.text}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <>
            <div
              ref={chatContainerRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto p-4 pt-14 space-y-4 h-[calc(100vh-80px)]"
            >
              <AnimatePresence>{messages.map(renderMessage)}</AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              className="sticky bottom-0 bg-white/80 backdrop-blur-sm p-4"
            >
              <form onSubmit={handleFormSubmit} className="relative max-w-4xl mx-auto">
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
                        words={[{ text: selectedPrompt.text, className: '' }]}
                        duration={0.04}
                        className={cn('h-12 min-h-[48px] border-none')}
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
                      disabled={isLoading || isUploading || imageUrls.length >= MAX_IMAGES}
                    >
                      {isUploading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Icon icon="mynaui:image-solid" className="size-6 text-zinc-600" />
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
                        <Icon icon="mynaui:send-solid" className="size-6 text-zinc-700" />
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
