import { Code, ExternalLink } from 'lucide-react';

export default function Projetos() {
  const projetos = [
    {
      nome: "Sistema de Gestão Educacional",
      data: "2025 - Atual",
      descricao: "Desenvolvimento de APIs e microsserviços para plataforma educacional de grande escala, atendendo milhares de alunos simultaneamente.",
      techs: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes"],
      link: "#",
    },
    {
      nome: "GRP-Receita - Gestão de Receitas Públicas",
      data: "2023 - 2025",
      descricao: "Sistema de gestão de receitas públicas de larga escala com relatórios complexos e alta criticidade para o governo estadual.",
      techs: ["Java", "JSF", "PrimeFaces", "Jaspersoft", "Oracle"],
      link: "#",
    },
    {
      nome: "Sistema de Gestão Aeronáutica",
      data: "2023",
      descricao: "Manutenção e desenvolvimento de funcionalidades para sistema de gestão de operações de aviação executiva.",
      techs: ["C#", ".NET", "SQL Server", "PLSQL", "JavaScript"],
      link: "#",
    },
    {
      nome: "API RESTful - Portfólio",
      data: "2026",
      descricao: "Backend do portfólio profissional desenvolvido com Spring Boot, seguindo boas práticas de arquitetura e princípios SOLID.",
      techs: ["Java", "Spring Boot", "Maven", "REST API"],
      link: "#",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Projetos
      </h2>

      <div className="space-y-6">
        {projetos.map((proj, index) => (
          <div 
            key={index} 
            className="hover-zoom bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm dark:shadow-gray-900/30 hover:shadow-md transition-all duration-300"
          >
            <div className="flex gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/50 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Code size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">{proj.nome}</h3>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                    {proj.data}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">{proj.descricao}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.techs.map(tech => (
                    <span 
                      key={tech} 
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-bold px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <span className="sr-only">Projeto sem link público</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
