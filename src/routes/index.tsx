import React, {useEffect} from 'react';
import {useTheme} from 'styled-components';
import {useAuth} from '../hooks/useAuth';
import {useAppSelector} from '../redux/hooks';
import {BottomNavigator} from './bottomNavigator';
import {RegisterRoutes} from './register.routes';

import {Container, StyledSpinner} from './styles';

export const Routes: React.FC = () => {
  const {user} = useAppSelector(store => store.userReducer);

  const {onAutoSignIn, isLoading} = useAuth();

  const theme = useTheme();

  useEffect(() => {
    onAutoSignIn();
  }, [onAutoSignIn]);

  if (isLoading) {
    return (
      <Container>
        <StyledSpinner color={theme.colors.secondary} />
      </Container>
    );
  }

  return user?.typeId ? (
    <BottomNavigator typeId={user?.typeId} />
  ) : (
    <RegisterRoutes />
  );
};
