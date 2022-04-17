import React from 'react';

import {Container, Title} from './styles';

// navigation
import {useRoute} from '@react-navigation/native';

//  redux
import {User} from '../../../global/types/redux';

interface RouteParams {
  user: User;
}

export const SponsorProfileScreen: React.FC = () => {
  const route = useRoute();

  const {user} = route?.params as RouteParams;

  return (
    <Container>
      <Title>{user?.name}</Title>
    </Container>
  );
};
