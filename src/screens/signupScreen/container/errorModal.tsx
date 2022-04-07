import React from 'react';
import {Modal} from 'react-native';
import {CloseIcon} from '../../../../assets/svg/closeIcon';
import {ModalButton} from './modalButton';

import {
  ModalBackground,
  ModalBottom,
  ModalMessage,
  ModalTitle,
  ModalTop,
  ModalWrapper,
} from './styles';

interface ErrorModalProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({
  modalVisible,
  setModalVisible,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <ModalBackground>
        <ModalWrapper>
          <ModalTop>
            <CloseIcon height={90} width={90} />
          </ModalTop>
          <ModalBottom>
            <ModalTitle>ERRO</ModalTitle>
            <ModalMessage>Usuário não cadastrado</ModalMessage>
            <ModalButton onPress={() => setModalVisible(false)} />
          </ModalBottom>
        </ModalWrapper>
      </ModalBackground>
    </Modal>
  );
};
