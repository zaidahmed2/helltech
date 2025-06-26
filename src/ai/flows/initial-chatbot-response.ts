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
  prompt: `Welcome to Aptech! How can I help you today?`,
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
