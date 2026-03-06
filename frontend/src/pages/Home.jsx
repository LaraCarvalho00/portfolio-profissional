import { User } from 'lucide-react';
import PROFILE_PHOTO from '../assets/perfil.png';
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden rounded-3xl mt-4">
      
      {/* Fundo 3D Interativo */}
      <div className="absolute inset-0 w-full h-full z-0 cursor-grab active:cursor-grabbing">
        <Spline scene="https://prod.spline.design/yXBk-weqOkhnOA4Q/scene.splinecode" />
      </div>

      {/* Card Flutuante (Glassmorphism) */}
      <div className="z-10 flex flex-col items-center text-center p-8 md:p-12 bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg rounded-3xl border border-white/40 dark:border-slate-700/50 shadow-2xl max-w-3xl mx-4 transition-colors">
        
        <div className="mb-6">
          {PROFILE_PHOTO ? (
            <img 
              src={PROFILE_PHOTO} 
              alt="Lara Carvalho" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-xl"
            />
          ) : (
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-800 flex items-center justify-center shadow-xl">
              <User size={64} className="text-white/80" />
            </div>
          )}
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight drop-shadow-sm">
          Transformando <br className="hidden md:block"/> Dados em <span className="text-blue-600 dark:text-blue-500">Estratégia</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-800 dark:text-slate-200 max-w-xl mb-10 leading-relaxed font-medium">
          Estudante de Engenharia de Software e Product Owner apaixonada por Inteligência Artificial Generativa.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/projetos" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all duration-300">
            Ver Projetos
          </a>
          <a href="/contato" className="border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300">
            Falar com a Lara
          </a>
        </div>
      </div>

    </div>
  );
}