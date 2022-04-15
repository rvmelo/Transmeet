import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//  screens
import {LoginScreen} from '../screens/loginScreen/container';
import {SignUpScreen} from '../screens/signupScreen/container';

import {RegisterStackParamList} from './types';
import {Onboarding} from '../screens/onboarding/container';
import {TransBottomNavigator} from './bottomNavigator.routes';

const RegisterStack = createNativeStackNavigator<RegisterStackParamList>();

const RegisterRoutes: React.FC = () => (
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
    <RegisterStack.Screen
      name="TransBottomNavigator"
      component={TransBottomNavigator}
      options={{
        headerShown: false,
      }}
    />
  </RegisterStack.Navigator>
);

export default RegisterRoutes;
