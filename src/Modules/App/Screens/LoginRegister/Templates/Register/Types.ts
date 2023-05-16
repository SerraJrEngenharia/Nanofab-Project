export interface RegisterProps {
  nome: string;
  publica: boolean;
  privada: boolean;
  inst: string;
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