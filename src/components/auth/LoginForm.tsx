import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ usuario: '', senha: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Por hora, aceita qualquer credencial
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <img
            src="/logo.png"
            alt="Fernandes Data Design"
            className="mx-auto h-24 w-auto"
          />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Bem-vindo
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <Input
            label="Usuário"
            value={credentials.usuario}
            onChange={e => setCredentials(prev => ({ ...prev, usuario: e.target.value }))}
          />
          <Input
            label="Senha"
            type="password"
            value={credentials.senha}
            onChange={e => setCredentials(prev => ({ ...prev, senha: e.target.value }))}
          />
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;