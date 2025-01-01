import React, { useState } from 'react';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { Truck } from 'lucide-react';
import FormLayout from '../../common/FormLayout';
import { Supplier } from '../../../types';

const SupplierForm: React.FC = () => {
  const [supplier, setSupplier] = useState<Partial<Supplier>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Supplier data:', supplier);
  };

  return (
    <FormLayout title="Cadastro de Fornecedor" Icon={Truck}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Nome"
            value={supplier.nome || ''}
            onChange={e => setSupplier(prev => ({ ...prev, nome: e.target.value }))}
          />
          <Input
            label="CNPJ"
            value={supplier.cnpj || ''}
            onChange={e => setSupplier(prev => ({ ...prev, cnpj: e.target.value }))}
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

export default SupplierForm;
