
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getSlideInsight = async (slideTitle: string, context: string) => {
  if (!API_KEY) return "AI insights are unavailable without an API key.";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert event technology consultant. Provide a short, punchy, 2-sentence "Pro Tip" or insight specifically about: "${slideTitle}". Context: ${context}. Keep it professional and focused on ROI or engagement.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Unable to fetch AI insights at this time.";
  }
};
