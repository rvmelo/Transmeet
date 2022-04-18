export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  regNumber: string; //cpf or cnpj
  birthDate: string;
  address: string;
  gender: string;
  description: string;
  telephone: string;
  city: string;
  site: string;
  stateId: number;
  typeId: number; // 1 -> user 2 -> sponsor
}

export interface UserState {
  user: User;
}
