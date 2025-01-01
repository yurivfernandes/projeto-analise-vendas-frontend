import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-cyan-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-2" />
            <Link to="/" className="font-bold text-xl">Sistema de Vendas</Link>
          </div>
          <div className="flex space-x-4">
            <div className="relative group">
              <button className="px-3 py-2 rounded-md hover:bg-cyan-700">
                Cadastros
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/cadastros/basicos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Cadastros Básicos
                  </Link>
                  <Link to="/cadastros/vendedores" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Vendedores
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/vendas" className="px-3 py-2 rounded-md hover:bg-cyan-700">
              Vendas
            </Link>
            <Link to="/relatorios" className="px-3 py-2 rounded-md hover:bg-cyan-700">
              Relatórios
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
