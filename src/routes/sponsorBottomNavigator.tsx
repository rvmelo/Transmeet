import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {useTheme} from 'styled-components';

import {SponsorTabParamList} from './types';

// screens
import {CandidaciesScreen} from '../screens/candidaciesScreen/container';
import {HomeIcon} from '../../assets/svg/homeIcon';
import {MailIcon} from '../../assets/svg/mailIcon';
import {SponsorHomeRoutes} from './sponsorHome.routes';

const SponsorTabs = createMaterialBottomTabNavigator<SponsorTabParamList>();

export function SponsorBottomNavigator() {
  const theme = useTheme();

  return (
    <SponsorTabs.Navigator
      labeled={false}
      barStyle={{backgroundColor: theme.colors.background}}
      initialRouteName="SponsorHomeRoutes">
      <SponsorTabs.Screen
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
        name="SponsorHomeRoutes"
        component={SponsorHomeRoutes}
      />
      <SponsorTabs.Screen
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
        name="CandidatesScreen"
        component={CandidaciesScreen}
      />
    </SponsorTabs.Navigator>
  );
}
