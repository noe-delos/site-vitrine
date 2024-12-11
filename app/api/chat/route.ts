import { KS_BOT_PROMPT } from '@/prompt/ks-gpt-bot';
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const maxDuration = 60;
export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages, data } = await req.json();
  const initialMessages = messages.slice(0, -1);
  const currentMessage = messages[messages.length - 1];

  let content;
  if (data?.imageUrls && data.imageUrls.length > 0) {
    content = [
      { type: 'text', text: currentMessage.content },
      ...data.imageUrls.map((url: string) => ({
        type: 'image',
        image: url,
      })),
    ];
  } else {
    content = currentMessage.content;
  }

  const result = streamText({
    model: openai('gpt-4o'),
    messages: [
      {
        role: 'system',
        content: KS_BOT_PROMPT,
      },
      ...initialMessages,
      {
        role: 'user',
        content,
      },
    ],
  });

  return result.toDataStreamResponse();
}
