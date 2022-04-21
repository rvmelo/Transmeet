import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SponsorStackParamList} from './types';
import {TransProfileScreen} from '../screens/transProfileScreen/container';
import {SponsorHomeScreen} from '../screens/sponsorHomeScreen/container';

const HomeStack = createNativeStackNavigator<SponsorStackParamList>();

export const SponsorHomeRoutes: React.FC = () => (
  <HomeStack.Navigator initialRouteName="TransProfileScreen">
    <HomeStack.Screen
      name="SponsorHomeScreen"
      component={SponsorHomeScreen}
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
