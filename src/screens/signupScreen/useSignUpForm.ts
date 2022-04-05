import React, {useState} from 'react';
import {States, Genders} from './container/data';

export interface User {
  name: string;
  email: string;
  ddd: string;
  cellphone: string;
  state: States;
  birthDate: string;
  cpf: string;
  cnpj: string;
  gender: Genders;
  description: string;
  password: string;
  passwordRepeat: string;
  site: string;
}

export type UserTypes = 'trans' | 'nao-trans' | 'empresa';

interface ReturnType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  userType: UserTypes;
  setUserType: React.Dispatch<React.SetStateAction<UserTypes>>;
}

export function useSignUpForm(): ReturnType {
  const [user, setUser] = useState<User>({} as User);
  const [userType, setUserType] = useState<UserTypes>('trans');

  return {
    user,
    setUser,
    userType,
    setUserType,
  };
}
