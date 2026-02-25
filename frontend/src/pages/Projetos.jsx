import { Briefcase, Code, GraduationCap } from 'lucide-react';

export default function Projetos() {
  const projetos = [
    {
      nome: "E-commerce: 4 Laços Paperie",
      data: "Jan 2026 - Presente",
      descricao: "Criação de identidade visual e estruturação de e-commerce multiplataforma (Shopee, Mercado Livre, TikTok Shop) para papelaria criativa.",
      techs: ["Estratégia", "Negócios", "Design Visual"],
      link: "#",
      icone: <Briefcase size={24} className="text-white" />,
      cor: "bg-pink-500"
    },
    {
      nome: "Features de IA: Mapa de Calor",
      data: "2025 - 2026",
      descricao: "Desenvolvimento de roadmap estratégico para implementação de funcionalidades de IA Generativa e análise de dados conversacionais.",
      techs: ["Python", "IBM Watson", "LLMs"],
      link: "#",
      icone: <Code size={24} className="text-white" />,
      cor: "bg-blue-600"
    },
    {
      nome: "Trabalho de Conclusão de Curso",
      data: "Em andamento",
      descricao: "Desenvolvimento de pesquisa acadêmica focada no ciclo de engenharia de software e metodologias. Aplicação de normas ABNT e arquitetura de sistemas.",
      techs: ["Pesquisa", "Engenharia de Software"],
      link: "#",
      icone: <GraduationCap size={24} className="text-white" />,
      cor: "bg-slate-800"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-12 border-b-2 border-gray-100 pb-4">
        Linha do Tempo de Projetos
      </h2>

      <div className="relative border-l-4 border-gray-200 ml-4 md:ml-8 space-y-12">
        {projetos.map((proj, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            
            {/* Ícone da Timeline */}
            <div className={`absolute -left-5.5 top-0 ${proj.cor} w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-sm`}>
              {proj.icone}
            </div>

            {/* Conteúdo do Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <span className="text-sm font-bold text-gray-500 mb-2 block">{proj.data}</span>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{proj.nome}</h3>
              <p className="text-gray-600 mb-4">{proj.descricao}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.techs.map(tech => (
                  <span key={tech} className="bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a href={proj.link} className="inline-block mt-2 text-blue-600 font-bold hover:text-blue-800 hover:underline">
                Acessar Repositório →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}