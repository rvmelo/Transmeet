import React from 'react';
import {SponsorBottomNavigator} from './sponsorBottomNavigator';
import {TransBottomNavigator} from './transBottomNavigator.routes';

// import { Container } from './styles';

interface BottomNavigatorProps {
  typeId: number;
}

export const BottomNavigator: React.FC<BottomNavigatorProps> = ({typeId}) => {
  return typeId === 1 ? <TransBottomNavigator /> : <SponsorBottomNavigator />;
};
