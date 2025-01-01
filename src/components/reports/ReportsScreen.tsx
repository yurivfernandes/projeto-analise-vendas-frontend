import React from 'react';
import { BarChart3, LineChart, PieChart } from 'lucide-react';

const ReportsScreen = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Relatórios</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <BarChart3 className="w-6 h-6 text-cyan-600 mr-2" />
            <h2 className="text-xl font-semibold">Vendas por Período</h2>
          </div>
          <p className="text-gray-600 mb-4">Análise detalhada das vendas por período</p>
          <button className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition-colors">
            Visualizar
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <LineChart className="w-6 h-6 text-cyan-600 mr-2" />
            <h2 className="text-xl font-semibold">Desempenho de Vendedores</h2>
          </div>
          <p className="text-gray-600 mb-4">Análise de performance da equipe de vendas</p>
          <button className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition-colors">
            Visualizar
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <PieChart className="w-6 h-6 text-cyan-600 mr-2" />
            <h2 className="text-xl font-semibold">Produtos mais Vendidos</h2>
          </div>
          <p className="text-gray-600 mb-4">Ranking dos produtos com maior saída</p>
          <button className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition-colors">
            Visualizar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsScreen;
