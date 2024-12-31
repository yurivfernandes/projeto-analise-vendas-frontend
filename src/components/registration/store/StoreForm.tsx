import React, { useState } from 'react';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { Store } from 'lucide-react';
import FormLayout from '../../common/FormLayout';
import { Store as StoreType } from '../../../types';

const StoreForm: React.FC = () => {
  const [store, setStore] = useState<Partial<StoreType>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Store data:', store);
  };

  return (
    <FormLayout title="Cadastro de Loja" Icon={Store}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Código"
            value={store.codigo || ''}
            onChange={e => setStore(prev => ({ ...prev, codigo: e.target.value }))}
          />
          <Input
            label="Nome"
            value={store.nome || ''}
            onChange={e => setStore(prev => ({ ...prev, nome: e.target.value }))}
          />
          <Input
            label="CPF/CNPJ"
            value={store.cpf || ''}
            onChange={e => setStore(prev => ({ ...prev, cpf: e.target.value }))}
          />
          <Input
            label="Email"
            type="email"
            value={store.email || ''}
            onChange={e => setStore(prev => ({ ...prev, email: e.target.value }))}
          />
          <Input
            label="Telefone"
            value={store.telefone || ''}
            onChange={e => setStore(prev => ({ ...prev, telefone: e.target.value }))}
          />
          <Input
            label="CEP"
            value={store.cep || ''}
            onChange={e => setStore(prev => ({ ...prev, cep: e.target.value }))}
          />
          <Input
            label="Rua"
            value={store.rua || ''}
            onChange={e => setStore(prev => ({ ...prev, rua: e.target.value }))}
          />
          <Input
            label="Bairro"
            value={store.bairro || ''}
            onChange={e => setStore(prev => ({ ...prev, bairro: e.target.value }))}
          />
          <Input
            label="Cidade"
            value={store.cidade || ''}
            onChange={e => setStore(prev => ({ ...prev, cidade: e.target.value }))}
          />
          <Input
            label="UF"
            value={store.uf || ''}
            onChange={e => setStore(prev => ({ ...prev, uf: e.target.value }))}
            maxLength={2}
          />
        </div>
        <div className="flex justify-end space-x-4 pt-4">
          <Button variant="secondary" type="button">Cancelar</Button>
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </FormLayout>
  );
};

export default StoreForm;