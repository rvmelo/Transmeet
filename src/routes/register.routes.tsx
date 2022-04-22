import React, {useEffect, useRef, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

//  screens
import {LoginScreen} from '../screens/loginScreen/container';
import {SignUpScreen} from '../screens/signupScreen/container';

import {RegisterStackParamList} from './types';
import {Onboarding} from '../screens/onboarding/container';
import {isAlreadyLaunchedKey} from '../constants/storage';
import {LoadingScreen} from '../components/loadingScreen';

const RegisterStack = createNativeStackNavigator<RegisterStackParamList>();

export const RegisterRoutes: React.FC = () => {
  const [isALreadyLaunched, setIsAlreadyLaunched] = useState<string | null>('');
  const [isLoading, setIsLoading] = useState(true);

  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const value = await AsyncStorage.getItem(isAlreadyLaunchedKey);

        isMounted.current && setIsAlreadyLaunched(value);
        isMounted.current && setIsLoading(false);
      } catch {
        isMounted.current && setIsLoading(false);
      }
    })();
  }, []);

  return !isLoading ? (
    <RegisterStack.Navigator
      initialRouteName={isALreadyLaunched ? 'LoginScreen' : 'Onboarding'}>
      <RegisterStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <RegisterStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <RegisterStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
    </RegisterStack.Navigator>
  ) : (
    <LoadingScreen />
  );
};
