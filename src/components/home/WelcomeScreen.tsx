import React from 'react';
import logo from '/logo.png';

const WelcomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <img
        src={logo}
        alt="Fernandes Data Design"
        className="w-64 h-auto mb-8"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Bem-vindo ao Sistema de Vendas
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl">
        Selecione uma opção no menu superior para começar.
      </p>
    </div>
  );
};

export default WelcomeScreen;
