import React from 'react';

import {useAppSelector} from '../../../redux/hooks';

import {Menu} from '../../../components/menu';
import {TransUserList} from '../../../components/list';

import {useHome} from '../useHome';

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
  const {user} = useAppSelector(store => store.userReducer);
  const {transUsers, onLoadTransUserData, isRefreshing, renderTransUsers} =
    useHome();

  const amout = transUsers.length;

  return (
    <Container>
      <HeaderContainer>
        <Menu isAbsolutePosition top={50} right={30} />
        <SponsorInfo>
          <Greetings>Boas vindas</Greetings>
          <SponsorName>{user?.name}!</SponsorName>
        </SponsorInfo>
        <CandidaciesInfo>
          <InfoText>Você possui {amout} perfis para analisar</InfoText>
        </CandidaciesInfo>
      </HeaderContainer>

      <TransUserList
        data={transUsers}
        renderItem={renderTransUsers}
        refreshing={isRefreshing}
        onRefresh={onLoadTransUserData}
      />
    </Container>
  );
};
