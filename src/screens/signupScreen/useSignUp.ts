import React, {useCallback, useEffect, useRef, useState} from 'react';

import {Genders, states, genders} from './container/data';

import {AxiosResponse} from 'axios';
import {api} from '../../services/api';

//  redux
import {User} from '../../global/types/redux';
import {useAppDispatch} from '../../redux/hooks';
import {loadUser} from '../../redux/slices/user';

export interface UserFormData {
  name: string;
  email: string;
  ddd: string;
  cellphone: string;
  state: string;
  city: string;
  birthDate: string;
  regNumber: string;
  gender: Genders;
  description: string;
  password: string;
  passwordRepeat: string;
  site: string;
}

export type UserTypes = 'trans' | 'nTrans' | 'empresa';

interface ReturnType {
  user: UserFormData;
  setUser: React.Dispatch<React.SetStateAction<UserFormData>>;
  userType: UserTypes;
  setUserType: React.Dispatch<React.SetStateAction<UserTypes>>;
  onUserSignUp: () => Promise<void>;
  isLoading: boolean;
  isError: boolean;
}

interface SignUpProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useSignUp({setModalVisible}: SignUpProps): ReturnType {
  const [user, setUser] = useState<UserFormData>({
    state: states[0].name,
    gender: genders[0],
  } as UserFormData);
  const [userType, setUserType] = useState<UserTypes>('trans');

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  const isMounted = useRef<boolean | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onUserSignUp = useCallback(async () => {
    try {
      setIsLoading(true);

      if (user?.password !== user?.passwordRepeat) {
        throw new Error('Erro ao realizar cadastro');
      }

      const userData =
        userType !== 'empresa'
          ? {
              name: user?.name,
              email: user?.email,
              password: user?.password,
              regNumber: user?.regNumber,
              birthDate: user?.birthDate,
              address: `${user?.city} - ${user?.state}`,
              gender: user?.gender,
              description: user?.description,
              telephone: `(${user?.ddd}) ${user?.cellphone}`,
              city: user?.city,
              stateId: 15,
              typeId: 1,
            }
          : {
              name: user?.name,
              email: user?.email,
              password: user?.password,
              regNumber: user?.regNumber,
              address: `${user?.city} - ${user?.state}`,
              description: '',
              telephone: `(${user?.ddd}) ${user?.cellphone}`,
              city: user?.city,
              site: user?.site,
              stateId: 15,
              typeId: 2,
            };

      const endpoint = userType === 'empresa' ? '/sponsors' : '/users';

      const response: AxiosResponse<User> = await api.post(endpoint, userData);

      dispatch(loadUser({user: response?.data}));

      isMounted.current && setIsLoading(false);
      isMounted.current && setModalVisible(true);
    } catch (err) {
      console.log(err);
      isMounted.current && setIsError(true);
      isMounted.current && setModalVisible(true);
      isMounted.current && setIsLoading(false);
    }
  }, [user, setModalVisible, userType, dispatch]);

  return {
    user,
    setUser,
    userType,
    setUserType,
    onUserSignUp,
    isLoading,
    isError,
  };
}
