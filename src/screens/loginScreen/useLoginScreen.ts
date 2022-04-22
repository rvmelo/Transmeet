import React, {useCallback, useEffect, useRef, useState} from 'react';
import {AxiosResponse} from 'axios';

//  async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//  navigation
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RegisterStackParamList} from '../../routes/types';

//  services
import {api} from '../../services/api';

//  redux
import {User} from '../../global/types/redux';
import {useAppDispatch} from '../../redux/hooks';
import {loadUser} from '../../redux/slices/user';
import {userKey, userToken} from '../../constants/storage';

type NavigationProps = NativeStackNavigationProp<RegisterStackParamList>;

interface APIResponse {
  access_token: string;
  account: User;
}

interface ReturnType {
  onSignUpNavigation: () => void;
  onUserLogin: () => Promise<void>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useLoginScreen(): ReturnType {
  const navigation = useNavigation<NavigationProps>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useAppDispatch();

  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onUserLogin = useCallback(async () => {
    try {
      setIsLoading(true);

      const response: AxiosResponse<APIResponse> = await api.post('/login', {
        email: email?.trim(),
        password: password?.trim(),
      });

      isMounted?.current && setIsLoading(false);

      const {account, access_token} = response?.data;

      await AsyncStorage.multiSet([
        [userToken, access_token],
        [userKey, JSON.stringify(account)],
      ]);

      api.defaults.headers.common.Authorization = `Bearer ${access_token}`;

      dispatch(loadUser({user: account}));
    } catch (err) {
      // return void
      isMounted?.current && setIsLoading(false);
      isMounted?.current && setModalVisible(true);
    }
  }, [email, password, dispatch]);

  const onSignUpNavigation = useCallback(() => {
    navigation.navigate('SignUpScreen');
  }, [navigation]);

  return {
    onSignUpNavigation,
    onUserLogin,
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    modalVisible,
    setModalVisible,
  };
}
