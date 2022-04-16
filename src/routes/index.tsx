import React from 'react';
import {useAppSelector} from '../redux/hooks';
import {BottomNavigator} from './bottomNavigator';
import {RegisterRoutes} from './register.routes';

// import { Container } from './styles';

export const Routes: React.FC = () => {
  const {user} = useAppSelector(store => store.userReducer);

  return user?.typeId ? (
    <BottomNavigator typeId={user?.typeId} />
  ) : (
    <RegisterRoutes />
  );
};
