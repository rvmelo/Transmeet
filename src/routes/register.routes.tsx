import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//  screens
import {LoginScreen} from '../screens/loginScreen/container';
import {SignUpScreen} from '../screens/signupScreen/container';

import {RegisterStackParamList} from './types';
import {Onboarding} from '../screens/onboarding/container';

const RegisterStack = createNativeStackNavigator<RegisterStackParamList>();

export const RegisterRoutes: React.FC = () => (
  <RegisterStack.Navigator initialRouteName="Onboarding">
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
);
