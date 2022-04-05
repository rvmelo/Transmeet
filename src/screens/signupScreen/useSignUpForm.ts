import React, {useCallback, useState} from 'react';
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

export type UserTypes = 'trans' | 'nTrans' | 'empresa';

interface ReturnType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  userType: UserTypes;
  setUserType: React.Dispatch<React.SetStateAction<UserTypes>>;
  onUserSignUp: () => void;
}

export function useSignUpForm(): ReturnType {
  const [user, setUser] = useState<User>({} as User);
  const [userType, setUserType] = useState<UserTypes>('trans');

  const onUserSignUp = useCallback(() => {
    console.log(user);
  }, [user]);

  return {
    user,
    setUser,
    userType,
    setUserType,
    onUserSignUp,
  };
}
