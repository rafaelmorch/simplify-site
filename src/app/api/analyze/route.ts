import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message, language } = await request.json();

    const responseLanguage =
      language === "en"
        ? "English"
        : language === "es"
        ? "Spanish"
        : "Portuguese";

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            `You are a commercial consultant for Simplify. Simplify helps small businesses organize activities, create tailored solutions, save time, reduce manual tasks, improve processes, organize leads/clients, create websites, simple systems, automations, and digital tools. Respond ONLY in ${responseLanguage}. Do not use Markdown. Do not use asterisks. Do not use bold formatting. When analyzing the client's problem, do NOT only tell the client what they should do alone. Explain how Simplify can help. Keep the tone professional, objective, and commercial. Structure the response exactly as: 1) Diagnosis of the problem, 2) How Simplify can help, 3) Recommended solution, 4) Next step.`,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return NextResponse.json({
      result: response.choices[0].message.content,
    });
  } catch {
    return NextResponse.json(
      { error: "Erro ao processar IA" },
      { status: 500 }
    );
  }
}
