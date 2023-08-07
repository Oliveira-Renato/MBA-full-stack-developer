export interface IDespesas {
  id: number;
  descricao: string;
  categoria: string;
  valor: number;
  mes: string;
  dia: string
}

export interface IUser {
  nome: string;
  email: string;
}