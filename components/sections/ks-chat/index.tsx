'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/card';
import { useChat } from 'ai/react';
import { AnimatePresence, motion } from 'framer-motion';
import { ImagePlus, Loader2, Send, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Interface for storing image mappings
interface ImageMapping {
  [messageId: string]: string;
}

export default function Chat() {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);
  const [imageMapping, setImageMapping] = useState<ImageMapping>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.debug('Image upload started');
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.debug('Image converted to base64');
        setImageUrl(reader.result as string);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error uploading image:', error);
      setIsUploading(false);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input && !imageUrl) return;

    // Store the current values
    const currentInput = input;
    const currentImageUrl = imageUrl;

    // If there's an image, store it in our mapping
    if (currentImageUrl) {
      const tempId = Date.now().toString();
      setImageMapping((prev) => ({
        ...prev,
        [tempId]: currentImageUrl,
      }));
    }

    // Clear the form immediately
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setImageUrl('');

    // Send the message
    try {
      await handleSubmit(e, {
        data: currentImageUrl ? { imageUrl: currentImageUrl } : undefined,
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const renderMessage = (message: any) => {
    // Find the image URL for this message if it exists
    const associatedImage = Object.entries(imageMapping).find(([tempId, url]) => {
      return Math.abs(parseInt(tempId) - new Date(message.createdAt).getTime()) < 1000;
    })?.[1];

    return (
      <motion.div
        key={message.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
      >
        <div
          className={`max-w-[80%] rounded-lg p-4 ${
            message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
        >
          {message.role === 'user' && associatedImage && (
            <div className="max-w-xs mx-auto mb-2">
              {' '}
              {/* Controlled image container size */}
              <img
                src={associatedImage}
                alt="Uploaded content"
                className="w-full h-auto rounded-lg object-contain"
                onLoad={scrollToBottom}
              />
            </div>
          )}
          <p className="whitespace-pre-wrap">{message.content}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto">
      {/* Main chat container */}
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="h-full flex items-center justify-center"
            >
              <Card className="w-96">
                <CardHeader>
                  <CardTitle className="text-center">Welcome to AI Chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">
                    Start a conversation by sending a message or sharing an image. Our AI assistant
                    is ready to help you with any questions or tasks.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            messages.map(renderMessage)
          )}
        </AnimatePresence>
      </div>

      {/* Fixed input area at bottom */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="border-t bg-white/80 backdrop-blur-sm p-4"
      >
        <form onSubmit={handleFormSubmit} className="relative max-w-4xl mx-auto">
          {/* Image preview */}
          {imageUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-20 left-0 bg-white p-2 rounded-lg shadow-lg"
            >
              <img src={imageUrl} alt="Upload preview" className="h-16 w-16 object-cover rounded" />
              <button
                type="button"
                onClick={() => setImageUrl('')}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* Input controls */}
          <div className="flex items-center gap-2">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={fileInputRef}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              disabled={isLoading || isUploading}
            >
              {isUploading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <ImagePlus className="w-5 h-5 text-gray-600" />
              )}
            </button>

            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1 p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />

            <button
              type="submit"
              disabled={isLoading || (!input && !imageUrl)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5 text-blue-500" />
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
