import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import { Customer } from '../../types';

const CustomerForm: React.FC = () => {
  const [customer, setCustomer] = useState<Partial<Customer>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof Customer, string>>>({});

  const validateCEP = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setCustomer(prev => ({
          ...prev,
          bairro: data.bairro,
          cidade: data.localidade,
          rua: data.logradouro,
          uf: data.uf
        }));
      }
    } catch (error) {
      console.error('CEP validation failed:', error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Customer Registration</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Nome"
          value={customer.nome || ''}
          onChange={e => setCustomer(prev => ({ ...prev, nome: e.target.value }))}
          error={errors.nome}
        />
        
        <Input
          label="CPF"
          value={customer.cpf || ''}
          onChange={e => setCustomer(prev => ({ ...prev, cpf: e.target.value }))}
          error={errors.cpf}
        />

        <Input
          label="Email"
          type="email"
          value={customer.email || ''}
          onChange={e => setCustomer(prev => ({ ...prev, email: e.target.value }))}
          error={errors.email}
        />

        <Input
          label="CEP"
          value={customer.cep || ''}
          onChange={e => {
            const cep = e.target.value.replace(/\D/g, '');
            setCustomer(prev => ({ ...prev, cep }));
            if (cep.length === 8) validateCEP(cep);
          }}
          error={errors.cep}
        />

        <Input
          label="Rua"
          value={customer.rua || ''}
          disabled
        />

        <Input
          label="Bairro"
          value={customer.bairro || ''}
          disabled
        />

        <Input
          label="Cidade"
          value={customer.cidade || ''}
          disabled
        />

        <Input
          label="UF"
          value={customer.uf || ''}
          disabled
        />
      </div>

      <div className="mt-6 flex justify-end space-x-4">
        <Button variant="secondary" type="button">
          Cancel
        </Button>
        <Button type="submit">
          Save
        </Button>
      </div>
    </form>
  );
};

export default CustomerForm;
