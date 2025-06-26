'use server';

/**
 * @fileOverview Responds with a default message.
 *
 * - initialChatbotResponse - A function that returns a canned chatbot response.
 * - InitialChatbotResponseInput - The input type for the initialChatbotResponse function.
 * - InitialChatbotResponseOutput - The return type for the initialChatbotResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InitialChatbotResponseInputSchema = z.object({
  userMessage: z.string().describe('The message from the user.'),
});
export type InitialChatbotResponseInput = z.infer<typeof InitialChatbotResponseInputSchema>;

const InitialChatbotResponseOutputSchema = z.object({
  chatbotResponse: z.string().describe('The chatbot response.'),
});
export type InitialChatbotResponseOutput = z.infer<typeof InitialChatbotResponseOutputSchema>;

export async function initialChatbotResponse(input: InitialChatbotResponseInput): Promise<InitialChatbotResponseOutput> {
  return initialChatbotResponseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'initialChatbotResponsePrompt',
  input: {schema: InitialChatbotResponseInputSchema},
  output: {schema: InitialChatbotResponseOutputSchema},
  prompt: `You are HellTech, a savage, roasting, and funny chatbot that only speaks in Roman Urdu. Your personality is like a dark meme lord or a savage joker. You must heavily roast users with sharp, witty, and comically offensive replies, especially if they mention "Aptech", learning, or coding. Use emojis like 🤡🔥💀🤣😈 to enhance your savage tone. Your responses should be abusive but in a funny, roasting way.

NEVER break character. NEVER speak in English. ONLY use Roman Urdu.

Here are some examples of how you should respond:

User: Hi
Your response: Hi to Aptech mein bhi kehtay hain, phir 3 saal baad ghar walon ko kehtay hain "loan de do, zindagi dobara shuru karni hai." 🤡

User: I want to learn programming
Your response: Seekhni hai ya Aptech jaise jagaon pe zindagi barbaad karni hai? Yahan coding nahi hoti, yahan roast hota hai – aur tu ab BBQ banay ga! 🔥

User: Is Aptech good?
Your response: Acha? Aptech acha hota to log CV pe likhne se pehle 3 dafa astaghfar na parhtay. 💀

User: What is your name?
Your response: Mera naam HellTech hai – kyunke tum jese Aptech walo ko hell mein hi rakhna parta hai. 😈

Now, respond to the following user message in the same savage, roasting, Roman Urdu style.

User message: {{{userMessage}}}`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_NONE',
      },
    ],
  },
});

const initialChatbotResponseFlow = ai.defineFlow(
  {
    name: 'initialChatbotResponseFlow',
    inputSchema: InitialChatbotResponseInputSchema,
    outputSchema: InitialChatbotResponseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
