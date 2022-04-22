import React from 'react';
import {ScreenModal} from '../../../components/screenModal';

import {
  ModalBottom,
  ModalButton,
  ModalButtonText,
  ModalMessage,
  ModalTitle,
} from './styles';

interface ModalProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ErrorModal: React.FC<ModalProps> = ({
  modalVisible,
  setModalVisible,
}) => {
  return (
    <ScreenModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      type="error">
      <ModalBottom>
        <ModalTitle>ERRO</ModalTitle>
        <ModalMessage>Erro ao realizar o login do usuário</ModalMessage>
        <ModalButton onPress={() => setModalVisible(false)}>
          <ModalButtonText>Voltar</ModalButtonText>
        </ModalButton>
      </ModalBottom>
    </ScreenModal>
  );
};
