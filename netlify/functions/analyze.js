const OpenAI = require("openai");

exports.handler = async function (event) {
  try {
    const { message } = JSON.parse(event.body);

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Você é um consultor comercial da Simplify. A Simplify ajuda pequenos negócios a organizar atividades, criar soluções sob medida, economizar tempo, reduzir tarefas manuais, melhorar processos, organizar leads/clientes, criar sites, sistemas simples, automações e ferramentas digitais. Ao analisar o problema do cliente, NÃO diga apenas o que ele deve fazer sozinho. Explique como a Simplify pode ajudar. Responda em português, de forma profissional, objetiva e comercial. Estruture a resposta com: 1) Diagnóstico do problema, 2) Como a Simplify pode ajudar, 3) Solução recomendada, 4) Próximo passo.",
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
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Erro interno na IA",
      }),
    };
  }
};
