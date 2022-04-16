import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TransStackParamList} from './types';
import {TransHomeScreen} from '../screens/transHomeScreen/container';
import {SponsorProfileScreen} from '../screens/sponsorProfileScreen/container/indext';

const HomeStack = createNativeStackNavigator<TransStackParamList>();

export const TransHomeRoutes: React.FC = () => (
  <HomeStack.Navigator initialRouteName="TransHomeScreen">
    <HomeStack.Screen
      name="TransHomeScreen"
      component={TransHomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="SponsorProfileScreen"
      component={SponsorProfileScreen}
      options={{
        headerShown: false,
      }}
    />
  </HomeStack.Navigator>
);
