import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contato() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('enviando');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
          console.log(result.text);
          setStatus('sucesso');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('erro');
      });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Contato
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Coluna da Esquerda: Informações */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Vamos Conversar!</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Estou sempre aberto a novas oportunidades e colaborações. Entre em contato através das redes sociais ou envie uma mensagem.
            </p>
          </div>

          <div className="space-y-3">
            <a 
              href="https://www.linkedin.com/in/allan-mateus/" 
              target="_blank" 
              rel="noreferrer" 
              className="hover-zoom flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                <Linkedin size={24} className="text-blue-600 dark:text-blue-400"/>
              </div>
              <span className="font-medium">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/allanmateusk" 
              target="_blank" 
              rel="noreferrer" 
              className="hover-zoom flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                <Github size={24} className="text-blue-600 dark:text-blue-400"/>
              </div>
              <span className="font-medium">GitHub</span>
            </a>
            
            <a 
              href="mailto:allanmateusk@gmail.com" 
              className="hover-zoom flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                <Mail size={24} className="text-blue-600 dark:text-blue-400"/>
              </div>
              <span className="font-medium">allanmateusk@gmail.com</span>
            </a>
            
            <div className="hover-zoom flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm text-gray-700 dark:text-gray-300">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                <MapPin size={24} className="text-blue-600 dark:text-blue-400"/>
              </div>
              <span className="font-medium">Belo Horizonte, MG</span>
            </div>
          </div>
        </div>

        {/* Coluna da Direita: Formulário */}
        <div className="hover-zoom bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm dark:shadow-gray-900/30">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome</label>
              <input 
                type="text" 
                name="user_name" 
                required 
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" 
                placeholder="Seu nome completo" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">E-mail</label>
              <input 
                type="email" 
                name="user_email" 
                required 
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" 
                placeholder="seu@email.com" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensagem</label>
              <textarea 
                name="message" 
                required 
                rows="4" 
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none" 
                placeholder="Escreva sua mensagem aqui..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'enviando'}
              className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 dark:disabled:bg-gray-600"
            >
              {status === 'enviando' ? 'Enviando...' : 'Enviar Mensagem'}
            </button>

            {status === 'sucesso' && (
              <p className="status-pop text-green-600 dark:text-green-400 text-sm font-medium text-center">
                Mensagem enviada com sucesso!
              </p>
            )}
            {status === 'erro' && (
              <p className="status-pop text-red-600 dark:text-red-400 text-sm font-medium text-center">
                Erro ao enviar. Verifique as configurações do EmailJS.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
