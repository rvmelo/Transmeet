import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {useTheme} from 'styled-components';

import {TransTabParamList} from './types';

// screens
import {CandidaciesScreen} from '../screens/candidaciesScreen/container';
import {HomeIcon} from '../../assets/svg/homeIcon';
import {MailIcon} from '../../assets/svg/mailIcon';
import {HomeRoutes} from './home.routes';

const TransTabs = createMaterialBottomTabNavigator<TransTabParamList>();

export function TransBottomNavigator() {
  const theme = useTheme();

  return (
    <TransTabs.Navigator
      labeled={false}
      barStyle={{backgroundColor: theme.colors.background}}
      initialRouteName="HomeRoutes">
      <TransTabs.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon
              height={24}
              width={24}
              color={
                focused ? theme.colors.primaryDark : theme.colors.textGrayLight
              }
            />
          ),
        }}
        name="HomeRoutes"
        component={HomeRoutes}
      />
      <TransTabs.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <MailIcon
              height={24}
              width={24}
              color={
                focused ? theme.colors.primaryDark : theme.colors.textGrayLight
              }
            />
          ),
        }}
        name="CandidaciesScreen"
        component={CandidaciesScreen}
      />
    </TransTabs.Navigator>
  );
}
