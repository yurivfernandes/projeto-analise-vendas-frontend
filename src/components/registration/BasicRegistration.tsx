import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Store, Users, Truck, Package } from 'lucide-react';

const BasicRegistration = () => {
  const navigate = useNavigate();
  
  const registrationItems = [
    { 
      title: 'Loja',
      path: '/cadastros/loja',
      icon: Store,
      description: 'Gerenciar cadastros de lojas'
    },
    { 
      title: 'Equipe de Vendas',
      path: '/cadastros/equipe-vendas',
      icon: Users,
      description: 'Gerenciar equipes de vendas'
    },
    { 
      title: 'Fornecedor',
      path: '/cadastros/fornecedor',
      icon: Truck,
      description: 'Gerenciar cadastros de fornecedores'
    },
    { 
      title: 'Grupo Produto',
      path: '/cadastros/grupo-produto',
      icon: Package,
      description: 'Gerenciar grupos de produtos'
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Cadastros Básicos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {registrationItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.path}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Icon className="w-6 h-6 text-cyan-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <button
                className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition-colors"
                onClick={() => navigate(item.path)}
              >
                Acessar
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BasicRegistration;