import React from 'react';

//  redux
import {useAppSelector} from '../../../redux/hooks';

//  components
import {Menu} from '../../../components/menu';
import {TransUserList} from '../../../components/list';
import {LogOffModal} from '../../../components/logOffModal';

import {
  Container,
  HeaderContainer,
  SponsorInfo,
  Greetings,
  SponsorName,
  CandidaciesInfo,
  InfoText,
} from './styles';

//  hooks
import {useHome} from '../useHome';
import {useModal} from '../../../hooks/useModal';

export const SponsorHomeScreen: React.FC = () => {
  const {user} = useAppSelector(store => store.userReducer);
  const {transUsers, onLoadTransUserData, isRefreshing, renderTransUsers} =
    useHome();

  const amout = transUsers.length;

  const {modalVisible, setModalVisible} = useModal();

  return (
    <>
      <Container>
        <HeaderContainer>
          <Menu
            isAbsolutePosition
            onPress={() => setModalVisible(true)}
            top={50}
            right={30}
          />
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
      <LogOffModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};
