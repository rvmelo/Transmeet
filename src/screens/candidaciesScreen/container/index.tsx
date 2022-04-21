import React from 'react';

import {Container, HeaderContainer, Title, TopHeaderContainer} from './styles';

import {Menu} from '../../../components/menu';
import {BackButton} from '../../../components/backButton';
import {CandidacyList} from '../../../components/list';
import {useCandidacy} from '../useCandidacy';
import {useModal} from '../useModal';
import {CandidacyModal} from './modals';

export const CandidaciesScreen: React.FC = () => {
  const {modalVisible, setModalVisible, modalType, setModalType} = useModal();
  const {candidacies, renderCandidacy} = useCandidacy({
    setModalType,
    setModalVisible,
  });

  return (
    <>
      <Container>
        <HeaderContainer>
          <TopHeaderContainer>
            <BackButton />
            <Menu isAbsolutePosition={false} />
          </TopHeaderContainer>
          <Title>Candidaturas</Title>
        </HeaderContainer>
        <CandidacyList data={candidacies} renderItem={renderCandidacy} />
      </Container>
      <CandidacyModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        type={modalType}
      />
    </>
  );
};
