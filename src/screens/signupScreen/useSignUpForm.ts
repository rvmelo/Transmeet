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
  gender: Genders;
  description: string;
  password: string;
  passwordRepeat: string;
}

interface ReturnType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export function useSignUpForm(): ReturnType {
  const [user, setUser] = useState<User>({} as User);

  return {
    user,
    setUser,
  };
}
