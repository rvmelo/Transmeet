import React, {useCallback, useEffect, useRef, useState} from 'react';

import {Genders, states, genders} from './container/data';

import {AxiosResponse} from 'axios';
import {api} from '../../services/api';

//  navigation
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RegisterStackParamList} from '../../routes/types';

//  redux
import {User} from '../../global/types/redux';

type NavigationProps = NativeStackNavigationProp<RegisterStackParamList>;

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
  onUserNavigation: () => void;
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

  const loadedUser = useRef<User>({} as User);

  const navigation = useNavigation<NavigationProps>();

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

      loadedUser.current = response?.data;

      isMounted.current && setIsLoading(false);
      isMounted.current && setModalVisible(true);
    } catch (err) {
      isMounted.current && setIsError(true);
      isMounted.current && setModalVisible(true);
      isMounted.current && setIsLoading(false);
    }
  }, [user, setModalVisible, userType]);

  const onUserNavigation = useCallback(() => {
    isMounted.current && setModalVisible(false);
    navigation.navigate('LoginScreen');
  }, [setModalVisible, navigation]);

  return {
    user,
    setUser,
    userType,
    setUserType,
    onUserSignUp,
    isLoading,
    isError,
    onUserNavigation,
  };
}
