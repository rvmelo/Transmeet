import React from 'react';

import {Container, HeaderContainer, Title, TopHeaderContainer} from './styles';

import {Menu} from '../../../components/menu';
import {BackButton} from '../../../components/backButton';

export const CandidaciesScreen: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <TopHeaderContainer>
          <BackButton />
          <Menu isAbsolutePosition={false} />
        </TopHeaderContainer>
        <Title>Candidaturas</Title>
      </HeaderContainer>
    </Container>
  );
};
