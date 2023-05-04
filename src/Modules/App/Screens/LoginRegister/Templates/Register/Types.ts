export interface RegisterProps {
  nome: string;
  telefone: string;
  ramal: string;
  funcao: string;
  email: string;
  departamento: string;
  usuario: string;
  senha1: string;
  outro: string;
}

export interface ListType {
  list: Array<RegisterProps>;
}