export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-10 md:mt-20">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
        Transformando Dados em Estratégia
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
        Estudante de Engenharia de Software e Product Owner apaixonada por Inteligência Artificial Generativa.
      </p>
      <div className="flex gap-4">
        <a href="/projetos" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">Ver Projetos</a>
      </div>
    </div>
  );
}