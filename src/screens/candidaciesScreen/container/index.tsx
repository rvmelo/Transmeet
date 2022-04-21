import React from 'react';

import {Container, HeaderContainer, Title, TopHeaderContainer} from './styles';

import {Menu} from '../../../components/menu';
import {BackButton} from '../../../components/backButton';
import {CandidacyList} from '../../../components/list';
import {useCandidacy} from '../useCandidacy';
import {useModal} from '../useModal';
import {CandidacyModal} from './modals';
import {LogOffModal} from '../../../components/logOffModal';

export const CandidaciesScreen: React.FC = () => {
  const {
    modalVisible,
    setModalVisible,
    signOutModalVisible,
    setSignOutModalVisible,
    modalType,
    setModalType,
  } = useModal();
  const {candidacies, renderCandidacy, isRefreshing, onLoadCandidacies} =
    useCandidacy({
      setModalType,
      setModalVisible,
    });

  return (
    <>
      <Container>
        <HeaderContainer>
          <TopHeaderContainer>
            <BackButton />
            <Menu
              onPress={() => setSignOutModalVisible(true)}
              isAbsolutePosition={false}
            />
          </TopHeaderContainer>
          <Title>Candidaturas</Title>
        </HeaderContainer>
        <CandidacyList
          data={candidacies}
          renderItem={renderCandidacy}
          refreshing={isRefreshing}
          onRefresh={onLoadCandidacies}
        />
      </Container>
      <CandidacyModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        type={modalType}
      />
      <LogOffModal
        modalVisible={signOutModalVisible}
        setModalVisible={setSignOutModalVisible}
      />
    </>
  );
};
