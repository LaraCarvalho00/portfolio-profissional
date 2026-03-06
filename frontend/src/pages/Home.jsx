import { User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import profilePhoto from '../assets/foto-perfil.png';

const PROFILE_PHOTO = profilePhoto;

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-10 md:mt-20">
      {/* Foto de Perfil */}
      <div className="mb-8">
        {PROFILE_PHOTO ? (
          <img 
            src={PROFILE_PHOTO} 
            alt="Allan" 
            className="photo-hover w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-600 shadow-lg"
          />
        ) : (
          <div className="photo-hover w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-4 border-blue-600 shadow-lg flex items-center justify-center">
            <User size={80} className="text-white/80" />
          </div>
        )}
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
        Engenheiro de Software
      </h1>
      
      <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
        Java & Spring Boot | Backend Developer | C# .NET | SQL
      </p>
      
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10">
        +3 anos de experiência em desenvolvimento backend, construindo sistemas de alta performance e criticidade com boas práticas de arquitetura.
      </p>
      
      <div className="flex gap-4">
        <Link 
          to="/projetos" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center gap-2"
        >
          Ver Projetos <ArrowRight size={20} />
        </Link>
        <Link 
          to="/contato" 
          className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition"
        >
          Contato
        </Link>
      </div>
    </div>
  );
}
