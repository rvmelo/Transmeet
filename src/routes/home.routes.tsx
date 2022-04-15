import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeStackParamList} from './types';
import {TransHomeScreen} from '../screens/transHomeScreen/container';
import {TransProfileScreen} from '../screens/transProfileScreen/container';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeRoutes: React.FC = () => (
  <HomeStack.Navigator initialRouteName="TransHomeScreen">
    <HomeStack.Screen
      name="TransHomeScreen"
      component={TransHomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="TransProfileScreen"
      component={TransProfileScreen}
      options={{
        headerShown: false,
      }}
    />
  </HomeStack.Navigator>
);
