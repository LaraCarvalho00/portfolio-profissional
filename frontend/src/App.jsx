import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Experiencias from './pages/Experiencias';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">
        
        {/* Cabeçalho de Navegação */}
        <header className="bg-slate-900 text-white p-5 shadow-lg">
          <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="text-2xl font-bold tracking-widest">LARA CARVALHO</h1>
            <ul className="flex gap-4 sm:gap-6 font-medium text-sm sm:text-base">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/sobre" className="hover:text-blue-400 transition-colors">Sobre Mim</Link></li>
              <li><Link to="/projetos" className="hover:text-blue-400 transition-colors">Projetos</Link></li>
              <li><Link to="/experiencias" className="hover:text-blue-400 transition-colors">Experiências</Link></li>
              <li><Link to="/contato" className="hover:text-blue-400 transition-colors">Contato</Link></li>
            </ul>
          </nav>
        </header>

        {/* Área de Conteúdo Dinâmico */}
        <main className="grow container mx-auto p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/experiencias" element={<Experiencias />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        {/* Rodapé */}
        <footer className="bg-slate-900 text-gray-400 text-center p-6 mt-auto">
          <p>© 2026 Lara Andrade Carvalho. Desenvolvido para o Lab de Eng. de Software.</p>
        </footer>

      </div>
    </Router>
  );
}

export default App;