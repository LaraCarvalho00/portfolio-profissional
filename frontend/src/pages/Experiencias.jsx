import { Briefcase, Building2, GraduationCap } from 'lucide-react';

export default function Experiencias() {
  const experiencias = [
    {
      empresa: "dti digital",
      cargo: "Desenvolvedor",
      periodo: "Maio 2025 - Atual",
      descricao: "Atuação como desenvolvedor backend em squads ágeis, focado na entrega de soluções de alto impacto para a Ânima Educação.",
      responsabilidades: [
        "Desenvolvimento e evolução de sistemas utilizando Java e Spring Boot",
        "Participação em projetos estratégicos para um dos maiores grupos educacionais do país",
        "Garantia de escalabilidade e performance das aplicações",
        "Aplicação de metodologias ágeis (Kanban) para otimização do fluxo de entrega"
      ],
      icone: <Building2 size={24} className="text-white" />,
      cor: "bg-blue-600"
    },
    {
      empresa: "Prodemge",
      cargo: "Software Developer",
      periodo: "2023 - 2025",
      descricao: "Atuação no desenvolvimento e sustentação do projeto GRP-receita, um sistema de gestão de receitas públicas de larga escala.",
      responsabilidades: [
        "Desenvolvimento backend utilizando Java com foco no ecossistema JSF (PrimeFaces, RichFaces)",
        "Implementação e manutenção de relatórios complexos utilizando Jaspersoft",
        "Melhoria contínua de sistemas legados",
        "Implementação de novas funcionalidades de alta criticidade"
      ],
      icone: <Building2 size={24} className="text-white" />,
      cor: "bg-blue-600"
    },
    {
      empresa: "Líder Aviação",
      cargo: "Estagiário de Desenvolvimento",
      periodo: "Junho 2023 - Novembro 2023",
      descricao: "Suporte ao ciclo de vida de desenvolvimento de software da companhia.",
      responsabilidades: [
        "Manutenção e desenvolvimento de sistemas utilizando C# e .NET",
        "Escrita de queries complexas e manipulação de dados via PLSQL",
        "Desenvolvimento de funcionalidades front-end com JavaScript"
      ],
      icone: <Briefcase size={24} className="text-white" />,
      cor: "bg-slate-600"
    },
    {
      empresa: "Prodemge",
      cargo: "Estagiário",
      periodo: "Janeiro 2023 - Junho 2023",
      descricao: "Atuação na área de infraestrutura, focado na gestão de Data Center.",
      responsabilidades: [
        "Gestão e monitoramento de Data Center",
        "Suporte à infraestrutura de TI"
      ],
      icone: <Briefcase size={24} className="text-white" />,
      cor: "bg-slate-600"
    },
    {
      empresa: "PUC Minas",
      cargo: "Bacharelado em Engenharia de Software",
      periodo: "2022 - 2026",
      descricao: "Formação acadêmica focada no ciclo completo de desenvolvimento de software, arquitetura de sistemas e metodologias ágeis.",
      responsabilidades: [],
      icone: <GraduationCap size={24} className="text-white" />,
      cor: "bg-green-600"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Experiências
      </h2>
      
      <div className="space-y-6">
        {experiencias.map((exp, index) => (
          <div 
            key={index} 
            className="hover-zoom bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm dark:shadow-gray-900/30 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex gap-4">
              <div className={`${exp.cor} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                {exp.icone}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">{exp.cargo}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.empresa}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                    {exp.periodo}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-3">{exp.descricao}</p>
                
                {exp.responsabilidades.length > 0 && (
                  <ul className="space-y-1">
                    {exp.responsabilidades.map((resp, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
