import React from 'react';

import {Container, HeaderContainer, Title, TopHeaderContainer} from './styles';

import {Menu} from '../../../components/menu';
import {BackButton} from '../../../components/backButton';
import {List} from '../../../components/list';
import {useCandidacy} from '../useCandidacy';

export const CandidaciesScreen: React.FC = () => {
  const {} = useCandidacy();

  return (
    <Container>
      <HeaderContainer>
        <TopHeaderContainer>
          <BackButton />
          <Menu isAbsolutePosition={false} />
        </TopHeaderContainer>
        <Title>Candidaturas</Title>
      </HeaderContainer>
      <List data={[]} />
    </Container>
  );
};
