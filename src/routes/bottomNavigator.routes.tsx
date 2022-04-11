import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {useTheme} from 'styled-components';

import {TransTabParamList} from './types';

// screens
import {CandidaciesScreen} from '../screens/candidaciesScreen/container';
import {TransHomeScreen} from '../screens/transHomeScreen/container';
import {HomeIcon} from '../../assets/svg/homeIcon';
import {MailIcon} from '../../assets/svg/mailIcon';

const TransTabs = createMaterialBottomTabNavigator<TransTabParamList>();

export function TransBottomNavigator() {
  const theme = useTheme();

  return (
    <TransTabs.Navigator
      labeled={false}
      barStyle={{backgroundColor: theme.colors.background}}
      initialRouteName="TransHomeScreen">
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
        name="TransHomeScreen"
        component={TransHomeScreen}
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
