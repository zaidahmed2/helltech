'use server';

import { initialChatbotResponse } from '@/ai/flows/initial-chatbot-response';
import type { InitialChatbotResponseOutput } from '@/ai/flows/initial-chatbot-response';

export async function getChatbotResponse(
  userMessage: string
): Promise<InitialChatbotResponseOutput> {
  try {
    const response = await initialChatbotResponse({ userMessage });
    return response;
  } catch (error) {
    console.error('Error getting chatbot response:', error);
    // Return a themed error message
    return { chatbotResponse: "I'm sorry, I'm having trouble connecting to our systems right now. Please try again in a moment." };
  }
}
