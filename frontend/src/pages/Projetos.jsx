import { Briefcase, Code, GraduationCap } from 'lucide-react';

export default function Projetos() {
  const projetos = [
    {
      nome: "E-commerce: 4 Laços Paperie",
      data: "Jan 2026 - Presente",
      descricao: "Criação de identidade visual e estruturação de e-commerce multiplataforma (Shopee, Mercado Livre, TikTok Shop) para papelaria criativa.",
      techs: ["Estratégia", "Negócios", "Design Visual"],
      link: "#",
      icone: <Briefcase size={22} className="text-blue-600 dark:text-blue-400" />
    },
    {
      nome: "Features de IA: Raio-X do Negócio",
      data: "2025 - 2026",
      descricao: "Desenvolvimento de roadmap estratégico para implementação de funcionalidades de IA Generativa e análise de dados conversacionais.",
      techs: ["Python", "IBM Watson", "LLMs"],
      link: "#",
      icone: <Code size={22} className="text-blue-600 dark:text-blue-400" />
    },
    {
      nome: "Trabalho de Conclusão de Curso",
      data: "Em andamento",
      descricao: "Desenvolvimento de pesquisa acadêmica focada no ciclo de engenharia de software e metodologias. Aplicação de normas ABNT e arquitetura de sistemas.",
      techs: ["Pesquisa", "Engenharia de Software", "IA"],
      link: "#",
      icone: <GraduationCap size={22} className="text-blue-600 dark:text-blue-400" />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-12 tracking-tight">
        Projetos e Iniciativas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((proj, index) => (
          <div key={index} className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
            <div className="bg-blue-50 dark:bg-slate-700/50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              {proj.icone}
            </div>
            
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-wider">{proj.data}</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">{proj.nome}</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow font-medium">{proj.descricao}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {proj.techs.map(tech => (
                <span key={tech} className="bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 text-xs font-bold px-3 py-1.5 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
            
            <a href={proj.link} className="text-blue-600 dark:text-blue-400 font-bold hover:text-blue-800 dark:hover:text-blue-300 transition-colors mt-auto inline-flex items-center gap-1">
              Saiba mais <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}