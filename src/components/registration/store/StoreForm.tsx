import React, { useState, useEffect } from 'react';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { Store as StoreType } from '../../../types';
import { createStore, getStores, updateStore, deleteStore } from '../../../services/storeService';

const StoreForm: React.FC = () => {
  const [store, setStore] = useState<Partial<StoreType>>({});
  const [stores, setStores] = useState<StoreType[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    try {
      const data = await getStores();
      setStores(data);
    } catch (error) {
      console.error('Error fetching stores:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateStore(editingId, store);
        setEditingId(null);
      } else {
        await createStore(store as Omit<StoreType, 'id'>);
      }
      setStore({});
      fetchStores();
    } catch (error) {
      console.error('Error saving store:', error);
    }
  };

  const handleEdit = (store: StoreType) => {
    setStore(store);
    setEditingId(store.id);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteStore(id);
      fetchStores();
    } catch (error) {
      console.error('Error deleting store:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">{editingId ? 'Edit Store' : 'Add Store'}</h2>
        
        <div className="grid grid-cols-2 gap-4">
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

        <div className="mt-6 flex justify-end space-x-4">
          <Button variant="secondary" type="button" onClick={() => setStore({})}>
            Cancel
          </Button>
          <Button type="submit">
            {editingId ? 'Update' : 'Save'}
          </Button>
        </div>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Stores List</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Código</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {stores.map(store => (
              <tr key={store.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{store.codigo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{store.nome}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button onClick={() => handleEdit(store)} className="text-blue-600 hover:text-blue-900">Edit</button>
                  <button onClick={() => handleDelete(store.id)} className="text-red-600 hover:text-red-900 ml-4">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StoreForm;
