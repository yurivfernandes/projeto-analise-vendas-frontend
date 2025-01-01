// Common Types
export interface Address {
  bairro: string;
  cep: string;
  cidade: string;
  rua: string;
  uf: string;
}

export interface Customer extends Address {
  cpf: string;
  email: string;
  nome: string;
}

export interface Store extends Address {
  cpf: string;
  email: string;
  nome: string;
  telefone: string;
  codigo: string;
}

export interface SalesTeam {
  codigo: string;
  loja: string;
  nome: string;
  percent_comissao: number;
}

export interface Supplier {
  cnpj: string;
  nome: string;
}

export interface ProductGroup {
  nome: string;
  codigo: string;
}

export interface Product {
  nome: string;
  codigo: string;
  custo: number;
  sku: string;
  grupoProduto: string;
  fornecedor: string;
}

export interface Salesperson {
  nome: string;
  codigo: string;
  equipeVenda: string;
}

export interface TaxType {
  nome: string;
}

export interface Tax {
  percent: number;
  loja: string;
  tipo: string;
}

export interface RevenueType {
  nome: string;
  codigo: string;
}

export interface Sale {
  data: string;
  nfe: string;
  valor: number;
  produto: string;
  vendedor: string;
  cliente: string;
  quantidade: number;
}
