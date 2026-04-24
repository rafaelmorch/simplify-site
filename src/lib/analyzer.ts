export function analyzeBusiness(message: string) {
  const text = message.toLowerCase();

  if (text.includes("tempo") || text.includes("time")) {
    return "Seu negócio apresenta sinais de excesso de tarefas manuais e falta de automação. Recomendamos implementar soluções que reduzam carga operacional.";
  }

  if (text.includes("organ") || text.includes("process")) {
    return "Identificamos falta de estrutura nos processos. A melhor solução é organizar fluxos e padronizar atividades.";
  }

  if (text.includes("cliente") || text.includes("lead")) {
    return "O problema parece estar na gestão de clientes. Recomendamos um sistema simples de acompanhamento de leads.";
  }

  if (text.includes("app") || text.includes("sistema")) {
    return "Você precisa de um sistema digital para organizar sua operação. Podemos desenvolver um app sob medida.";
  }

  return "Seu negócio precisa de mais organização e eficiência. Podemos estruturar uma solução personalizada.";
}
