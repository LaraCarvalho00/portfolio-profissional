export default function Experiencias() {
  const experiencias = [
    {
      empresa: "Atuação em Produto & IA Generativa",
      cargo: "Product Owner / Especialista em IA",
      periodo: "Atualmente",
      descricao: "Liderança de produtos com foco em Inteligência Artificial Generativa. Desenvolvimento ativo na plataforma IBM Watson, análise de dados conversacionais utilizando Python e exploração prática de Large Language Models (LLMs). Condução de projetos estratégicos focados em precificação, market insights e roadmap de novas funcionalidades de IA, como os projetos 'Raio-X do Negócio' e 'Estranho no Ninho'."
    },
    {
      empresa: "4 Laços Paperie",
      cargo: "Co-fundadora & Estrategista de Negócios",
      periodo: "Jan 2026 - Presente",
      descricao: "Gestão estratégica, estruturação de e-commerce e alinhamento de vendas multiplataforma (Shopee, Mercado Livre e TikTok Shop) para uma loja online de papelaria criativa. Responsável direta pela criação do plano de negócios e pela identidade visual da marca."
    },
    {
      empresa: "Pontifícia Universidade Católica (PUC-Minas)",
      cargo: "Graduação em Engenharia de Software",
      periodo: "Fev 2023 - Dez 2026",
      descricao: "Formação acadêmica focada no ciclo completo de desenvolvimento de software, arquitetura de sistemas e metodologias ágeis. Atualmente em fase de desenvolvimento do Trabalho de Conclusão de Curso (TCC) focado em Inteligência Artificial."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-10 tracking-tight">
        Experiências Profissionais e Acadêmicas
      </h2>
      
      <div className="space-y-6">
        {experiencias.map((exp, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{exp.cargo}</h3>
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1">{exp.empresa}</h4>
              </div>
              <span className="text-sm font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 px-4 py-1.5 rounded-full w-fit">
                {exp.periodo}
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">{exp.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}