import React, {useEffect} from 'react';
import {SponsorBottomNavigator} from './sponsorBottomNavigator';
import {TransBottomNavigator} from './transBottomNavigator.routes';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {isAlreadyLaunchedKey} from '../constants/storage';

interface BottomNavigatorProps {
  typeId: number;
}

export const BottomNavigator: React.FC<BottomNavigatorProps> = ({typeId}) => {
  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem(isAlreadyLaunchedKey, 'alreadyLaunched');
    })();
  }, []);

  return typeId === 1 ? <TransBottomNavigator /> : <SponsorBottomNavigator />;
};
