import {useState} from 'react';

interface User {
  ddd: string;
  cellphone: 'string';
}

interface ReturnType {
  user: User;
  setUser: (user: User) => void;
}

export function useSignUpForm(): ReturnType {
  const [user, setUser] = useState<User>({} as User);

  return {
    user,
    setUser,
  };
}
