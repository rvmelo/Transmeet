import React from 'react';
import {ScreenModal} from '../../../components/screenModal';
import {modalMessages} from './data';
import {
  MessageWrapper,
  ModalButton,
  ModalButtonText,
  ModalContentWrapper,
  ModalMessage,
  ModalTitle,
} from './styles';

interface ModalProps {
  type: 'success' | 'warning' | 'error';
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CandidacyModal: React.FC<ModalProps> = ({
  modalVisible,
  setModalVisible,
  type,
}) => {
  return (
    <ScreenModal
      type={type}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}>
      <ModalContentWrapper>
        <ModalTitle>{modalMessages[type].title}</ModalTitle>
        <MessageWrapper>
          <ModalMessage>{modalMessages[type].message}</ModalMessage>
        </MessageWrapper>
        <ModalButton onPress={() => setModalVisible(false)}>
          <ModalButtonText>Voltar</ModalButtonText>
        </ModalButton>
      </ModalContentWrapper>
    </ScreenModal>
  );
};
