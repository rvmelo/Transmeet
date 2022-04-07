import React, {useCallback, useEffect, useRef, useState} from 'react';

import {States, Genders} from './container/data';

import {AxiosResponse} from 'axios';
import {api} from '../../services/api';

export interface User {
  name: string;
  email: string;
  ddd: string;
  cellphone: string;
  state: States;
  city: string;
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
  onUserSignUp: () => Promise<void>;
  isLoading: boolean;
}

interface SignUpProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useSignUp({setModalVisible}: SignUpProps): ReturnType {
  const [user, setUser] = useState<User>({} as User);
  const [userType, setUserType] = useState<UserTypes>('trans');

  const [isLoading, setIsLoading] = useState(false);

  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onUserSignUp = useCallback(async () => {
    try {
      setIsLoading(true);

      const response: AxiosResponse<User> = await api.post('/user', {
        ...user,
        address: `${user?.city} - ${user?.state}`,
        birthday_date: user?.birthDate,
      });

      console.log(response?.data);

      isMounted.current && setIsLoading(false);
    } catch (err) {
      isMounted.current && setModalVisible(true);
      isMounted.current && setIsLoading(false);
    }
  }, [user, setModalVisible]);

  return {
    user,
    setUser,
    userType,
    setUserType,
    onUserSignUp,
    isLoading,
  };
}
