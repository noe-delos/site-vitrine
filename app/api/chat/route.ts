import { KS_BOT_PROMPT } from "@/prompt/ks-gpt-bot";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const maxDuration = 60;
export const runtime = "edge";

const MODEL_LOGOS = {
  gemini:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/2560px-Google_Gemini_logo.svg.png",
  openai:
    "https://freepnglogo.com/images/all_img/1702059309openai-logo-png.png",
  anthropic:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/2560px-Anthropic_logo.svg.png",
  meta: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/2560px-Meta-Logo.png",
  mistral: "https://files.svgcdn.io/logos/mistral-ai.svg",
  cohere:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI_T8jPk8BWNvBYAztcWdHUJee9uxCRZlx2Q&s",
};

const TEAM_IMAGES = {
  noe: "https://i.ibb.co/6X1hWSz/noe.jpg",
  julien: "https://i.ibb.co/8xCrwzy/julien.jpg",
  hugo: "https://i.ibb.co/CKNds3g/hugo.jpg",
  nicolas: "https://i.ibb.co/4tbN865/nicolas.jpg",
};

// Formatting instructions for better markdown output
const FORMATTING_INSTRUCTIONS = `
Please structure your responses using clear Markdown formatting:
- Use # for main headings and ## for subheadings
- Use **bold** for emphasis and *italics* for subtle emphasis
- Create organized lists using - or * for bullet points
- Use numbered lists (1. 2. 3.) for sequential items
- Format code using \`\`\` with language specification
- Use > for quotations or important notes
- Use --- for section breaks where appropriate
- Create tables using | for columns when presenting tabular data
- When including links, format them as [display text](url) where display text should be a clean, human-readable version
- All links should be in blue and should be clickable

For images:
- When mentioning AI models, reference them as: ![Model Name](${Object.entries(
  MODEL_LOGOS
)
  .map(([model, url]) => `${model}: ${url}`)
  .join(" or ")})
- When mentioning team members, reference them as: ![Team Member](${Object.entries(
  TEAM_IMAGES
)
  .map(([member, url]) => `${member}: ${url}`)
  .join(" or ")})
- All images should be displayed at an appropriate size (logos should be small, team photos should be medium-sized)

Keep responses well-structured and easy to read, with clear hierarchical organization. When displaying images, maintain consistent sizing:
- Model logos should be small and discrete (height around 32px)
- Team member photos should be medium-sized (height around 150px)
- Other images should maintain their aspect ratio within reasonable bounds`;

export async function POST(req: Request) {
  try {
    const { messages, data } = await req.json();
    const initialMessages = messages.slice(0, -1);
    const currentMessage = messages[messages.length - 1];

    let content;
    if (data?.imageUrls && data.imageUrls.length > 0) {
      content = [
        { type: "text", text: currentMessage.content },
        ...data.imageUrls.map((url: string) => ({
          type: "image",
          image: url,
        })),
      ];
    } else {
      content = currentMessage.content;
    }

    const enhancedSystemPrompt = `${KS_BOT_PROMPT}\n\n${FORMATTING_INSTRUCTIONS}`;

    const result = streamText({
      model: openai("gpt-4o-mini"),
      messages: [
        {
          role: "system",
          content: enhancedSystemPrompt,
        },
        ...initialMessages,
        {
          role: "user",
          content,
        },
      ],
      temperature: 0.7,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(
      JSON.stringify({
        error: "An error occurred while processing your request",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
