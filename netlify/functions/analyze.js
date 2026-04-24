const OpenAI = require("openai");

exports.handler = async function (event) {
  try {
    const { message } = JSON.parse(event.body);

    if (!process.env.OPENAI_API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "API key não configurada" }),
      };
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Você é um consultor de negócios. Analise o problema e responda com diagnóstico, solução e próximos passos.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        result: response.choices[0].message.content,
      }),
    };
  } catch (error) {
    console.error("ERRO IA:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Erro interno na IA",
      }),
    };
  }
};
