import React from 'react';
import { Table } from 'lucide-react';

const SalesScreen = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Vendas</h1>
        <button className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700">
          Nova Venda
        </button>
      </div>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 border-b flex items-center">
          <Table className="w-5 h-5 mr-2 text-cyan-600" />
          <h2 className="text-lg font-semibold">Registro de Vendas</h2>
        </div>
        
        <div className="p-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NFe</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendedor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Placeholder para dados de vendas */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sem registros</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesScreen;
