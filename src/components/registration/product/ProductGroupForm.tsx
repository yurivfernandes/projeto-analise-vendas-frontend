import React, { useState } from 'react';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { Package } from 'lucide-react';
import FormLayout from '../../common/FormLayout';
import { ProductGroup } from '../../../types';

const ProductGroupForm: React.FC = () => {
  const [productGroup, setProductGroup] = useState<Partial<ProductGroup>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Product group data:', productGroup);
  };

  return (
    <FormLayout title="Cadastro de Grupo de Produtos" Icon={Package}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Código"
            value={productGroup.codigo || ''}
            onChange={e => setProductGroup(prev => ({ ...prev, codigo: e.target.value }))}
          />
          <Input
            label="Nome"
            value={productGroup.nome || ''}
            onChange={e => setProductGroup(prev => ({ ...prev, nome: e.target.value }))}
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

export default ProductGroupForm;
