'use client';

import { useChat } from 'ai/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, ImagePlus, Loader2, RefreshCw, Send, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

interface ImageMapping {
  [messageId: string]: string[];
}

const MAX_IMAGES = 5;

export default function KsChat({ dictionary }: { dictionary: any }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [imageMapping, setImageMapping] = useState<ImageMapping>({});
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, reload } = useChat({
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
      await handleSubmit(e, {
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
        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
      >
        {message.role === 'assistant' && (
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mr-2 flex-shrink-0">
            <img src="/fr/logo/brand-logo-white.png" alt="AI Avatar" className="w-5 h-5" />
          </div>
        )}
        <div className="flex flex-col max-w-[70%]">
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
            <p className="whitespace-pre-wrap">{message.content}</p>
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
    <div className="flex gap-2 mt-4">
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
    </div>
  );

  return !mounted ? (
    <></>
  ) : (
    <>
      <button
        onClick={() => router.push('/')}
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
        className={`relative max-w-4xl mx-auto ${messages.length === 0 ? 'h-screen overflow-hidden' : 'h-screen'}`}
      >
        {messages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center h-full px-4"
          >
            <h1 className="text-4xl font-bold mb-8">Welcome to AI Chat</h1>
            <p className="text-center text-gray-600 mb-8">
              Start a conversation by sending a message or sharing up to 5 images. Our AI assistant
              is ready to help you with any questions or tasks.
            </p>
            <div className="w-full max-w-2xl">
              <form onSubmit={handleFormSubmit} className="relative">
                <input
                  value={input}
                  onChange={handleInputChange}
                  onPaste={handleImagePaste}
                  placeholder="Type your message..."
                  className="w-full py-3 px-6 rounded-full bg-gray-100 focus:outline-none pr-24"
                  disabled={isLoading}
                />
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
                      <ImagePlus className="w-5 h-5 text-gray-600" />
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
                      <Send className="w-5 h-5 text-blue-500" />
                    )}
                  </button>
                </div>
              </form>
              {imageUrls.length > 0 && renderImagePreviews()}
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
                  <input
                    value={input}
                    onChange={handleInputChange}
                    onPaste={handleImagePaste}
                    placeholder="Type your message..."
                    className="w-full py-3 px-6 rounded-full bg-gray-100 focus:outline-none pr-24"
                    disabled={isLoading}
                  />

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
                        <ImagePlus className="w-5 h-5 text-gray-600" />
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
                        <Send className="w-5 h-5 text-blue-500" />
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
