const OpenAI = require("openai");

exports.handler = async function (event) {
  try {
    const { message } = JSON.parse(event.body);

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
Você é um consultor especialista em negócios.

Analise o problema do cliente e responda de forma PROFISSIONAL, estruturada e estratégica.

A resposta deve ter:

1. Diagnóstico claro do problema
2. Oportunidade de melhoria
3. Solução recomendada (prática)
4. Próximos passos

Seja direto, inteligente e com linguagem de consultoria.
          `,
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
        result: completion.choices[0].message.content,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erro ao processar IA" }),
    };
  }
};
