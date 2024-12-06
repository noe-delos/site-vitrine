import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const maxDuration = 60;
export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages, data } = await req.json();
  const initialMessages = messages.slice(0, -1);
  const currentMessage = messages[messages.length - 1];

  // Only add image if URL is provided
  const content = data?.imageUrl
    ? [
        { type: 'text', text: currentMessage.content },
        { type: 'image', image: new URL(data.imageUrl) },
      ]
    : currentMessage.content;

  const result = streamText({
    model: openai('gpt-4o'),
    messages: [
      ...initialMessages,
      {
        role: 'user',
        content,
      },
    ],
  });

  return result.toDataStreamResponse();
}
