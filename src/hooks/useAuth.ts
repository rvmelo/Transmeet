import {useCallback, useEffect, useRef, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch} from '../redux/hooks';
import {userKey, userToken} from '../constants/storage';
import {api} from '../services/api';
import {loadUser} from '../redux/slices/user';
import {User} from '../global/types/redux';

interface ReturnType {
  isLoading: boolean;
  onAutoSignIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

export function useAuth(): ReturnType {
  const [isLoading, setIsLoading] = useState(true);

  const isMounted = useRef<boolean | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onAutoSignIn = useCallback(async () => {
    if (!isMounted?.current) {
      return;
    }

    setIsLoading(true);

    const [token, storedUser] = await AsyncStorage.multiGet([
      userToken,
      userKey,
    ]);

    isMounted.current && setIsLoading(false);

    if (!token[1] || !storedUser[1]) {
      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${token[1]}`;

    const parsedUser = JSON.parse(storedUser[1]);

    dispatch(
      loadUser({
        user: {...parsedUser},
      }),
    );
  }, [dispatch]);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([userToken, userKey]);

    dispatch(
      loadUser({
        user: {} as User,
      }),
    );
  }, [dispatch]);

  return {
    isLoading,
    onAutoSignIn,
    signOut,
  };
}
