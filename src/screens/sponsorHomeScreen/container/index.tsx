import React from 'react';
import {Menu} from '../../../components/menu';
import {List} from '../../../components/list';

import {
  Container,
  HeaderContainer,
  SponsorInfo,
  Greetings,
  SponsorName,
  CandidaciesInfo,
  InfoText,
} from './styles';

export const SponsorHomeScreen: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <Menu isAbsolutePosition top={50} right={30} />
        <SponsorInfo>
          <Greetings>Boas vindas</Greetings>
          <SponsorName>Ioasys!</SponsorName>
        </SponsorInfo>
        <CandidaciesInfo>
          <InfoText>Você possui 6 perfis para analisar</InfoText>
        </CandidaciesInfo>
      </HeaderContainer>

      <List data={[]} renderItem={() => null} />
    </Container>
  );
};
