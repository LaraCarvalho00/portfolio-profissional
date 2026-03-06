import { useState } from 'react';
import { User, Code, Database, GitBranch, Server } from 'lucide-react';
import profilePhoto from '../assets/foto-perfil.png';

const PROFILE_PHOTO = profilePhoto;

export default function Sobre() {
  const [idioma, setIdioma] = useState('pt');

  const skills = [
    { nome: 'Java & Spring Boot', icone: <Code size={20} /> },
    { nome: 'C# & .NET', icone: <Code size={20} /> },
    { nome: 'SQL & PLSQL', icone: <Database size={20} /> },
    { nome: 'JSF & PrimeFaces', icone: <Server size={20} /> },
    { nome: 'Git & CI/CD', icone: <GitBranch size={20} /> },
    { nome: 'Kanban', icone: <Server size={20} /> },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center mb-6">
        <div className="flex gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
          <button 
            onClick={() => setIdioma('pt')} 
            className={`px-6 py-2 rounded-full font-bold transition-colors ${idioma === 'pt' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          >
            PT
          </button>
          <button 
            onClick={() => setIdioma('en')} 
            className={`px-6 py-2 rounded-full font-bold transition-colors ${idioma === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          >
            EN
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm dark:shadow-gray-900/30 transition-colors">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
          {PROFILE_PHOTO ? (
            <img 
              src={PROFILE_PHOTO} 
              alt="Allan" 
              className="photo-hover w-32 h-32 rounded-full object-cover border-4 border-blue-600 shadow-lg flex-shrink-0"
            />
          ) : (
            <div className="photo-hover w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-4 border-blue-600 shadow-lg flex items-center justify-center flex-shrink-0">
              <User size={64} className="text-white/80" />
            </div>
          )}

          <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Sobre Mim</h2>
          
          {idioma === 'pt' ? (
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Engenheiro de software com mais de <strong>3 anos de experiência sólida</strong> em desenvolvimento backend, 
                com foco nas stacks <strong>Java</strong> e <strong>.NET</strong>.
              </p>
              <p>
                Minha trajetória é marcada pela atuação em sistemas de <strong>alta performance e criticidade</strong>, 
                onde aplico boas práticas de arquitetura de software, princípios <strong>SOLID</strong> e <strong>Design Patterns</strong> para 
                entregar soluções escaláveis. Tenho experiência no desenvolvimento de <strong>APIs RESTful</strong> e 
                integração com bancos de dados relacionais complexos.
              </p>
            </div>
          ) : (
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Software engineer with over <strong>3 years of solid experience</strong> in backend development, 
                focusing on <strong>Java</strong> and <strong>.NET</strong> stacks.
              </p>
              <p>
                My career is marked by working on <strong>high-performance and mission-critical systems</strong>, 
                where I apply software architecture best practices, <strong>SOLID principles</strong>, and <strong>Design Patterns</strong> to 
                deliver scalable solutions. I have experience in developing <strong>RESTful APIs</strong> and 
                integration with complex relational databases.
              </p>
            </div>
          )}
          </div>
        </div>

        {/* Skills */}
        <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            {idioma === 'pt' ? 'Competências Técnicas' : 'Technical Skills'}
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span 
                key={skill.nome} 
                className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full font-medium"
              >
                {skill.icone}
                {skill.nome}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
