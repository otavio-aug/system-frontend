// import { Link } from "react-router-dom";
import { Home, Info } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-blue-600 text-white fixed top-0 left-0 flex flex-col p-5 shadow-lg">
      {/* Logo ou Título */}
      <h1 className="text-2xl font-bold mb-6">Lorem ipsum</h1>

      {/* Navegação */}
      <nav className="flex flex-col space-y-4">
        <div className="flex items-center space-x-3 hover:bg-blue-700 p-3 rounded">
          <Home size={20} /> <span>Início</span>
        </div>
        <div className="flex items-center space-x-3 hover:bg-blue-700 p-3 rounded">
          <Info size={20} /> <span>Sobre</span>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;