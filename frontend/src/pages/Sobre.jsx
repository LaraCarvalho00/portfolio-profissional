import { useState } from 'react';

export default function Sobre() {
  const [idioma, setIdioma] = useState('pt');

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-600">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Sobre Mim</h2>
        <div className="flex gap-2">
          <button onClick={() => setIdioma('pt')} className={`px-4 py-1 rounded font-bold ${idioma === 'pt' ? 'bg-slate-900 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>PT</button>
          <button onClick={() => setIdioma('en')} className={`px-4 py-1 rounded font-bold ${idioma === 'en' ? 'bg-slate-900 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>EN</button>
        </div>
      </div>

      {idioma === 'pt' ? (
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>Olá! Sou a Lara Andrade Carvalho, estudante de Engenharia de Software na PUC-Minas, com previsão de formatura em dezembro de 2026.</p>
          <p>Atuo na interseção entre negócios e tecnologia em uma função de Produto, lidando diretamente com IA Generativa. Minha rotina envolve o desenvolvimento na plataforma IBM Watson, análises de conversação com Python e a exploração de Large Language Models (LLMs).</p>
          <p>Tenho um perfil analítico, muita facilidade com números e visão de negócios — características que também aplico como cofundadora da 4 Laços Paperie, o meu e-commerce. Meu principal objetivo profissional é transitar para uma posição de AI Scientist, unindo minha experiência de liderança de produtos com o desenvolvimento aprofundado em inteligência artificial.</p>
        </div>
      ) : (
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>Hello! I'm Lara Andrade Carvalho, a Software Engineering student at PUC-Minas, graduating in December 2026.</p>
          <p>I work at the intersection of business and technology in a Product role, dealing directly with Generative AI. My daily routine involves development on the IBM Watson platform, conversation analysis with Python, and exploring Large Language Models (LLMs).</p>
          <p>I have an analytical profile, strong numerical skills, and business vision — traits I also apply as the co-founder of 4 Laços Paperie, my e-commerce store. My main professional goal is to transition into an AI Scientist position, combining my product leadership experience with in-depth artificial intelligence development.</p>
        </div>
      )}
    </div>
  );
}