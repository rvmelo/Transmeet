import React, {useState} from 'react';

export interface User {
  ddd: string;
  cellphone: string;
  state: 'SP' | 'MG' | 'SE' | 'SC' | 'RJ';
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
