import React, { useState } from 'react';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { Users } from 'lucide-react';
import FormLayout from '../../common/FormLayout';
import { SalesTeam } from '../../../types';

const SalesTeamForm: React.FC = () => {
  const [salesTeam, setSalesTeam] = useState<Partial<SalesTeam>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sales team data:', salesTeam);
  };

  return (
    <FormLayout title="Cadastro de Equipe de Vendas" Icon={Users}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Código"
            value={salesTeam.codigo || ''}
            onChange={e => setSalesTeam(prev => ({ ...prev, codigo: e.target.value }))}
          />
          <Input
            label="Nome"
            value={salesTeam.nome || ''}
            onChange={e => setSalesTeam(prev => ({ ...prev, nome: e.target.value }))}
          />
          <Input
            label="Loja"
            value={salesTeam.loja || ''}
            onChange={e => setSalesTeam(prev => ({ ...prev, loja: e.target.value }))}
          />
          <Input
            label="Percentual de Comissão"
            type="number"
            value={salesTeam.percent_comissao || ''}
            onChange={e => setSalesTeam(prev => ({ ...prev, percent_comissao: Number(e.target.value) }))}
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

export default SalesTeamForm;
