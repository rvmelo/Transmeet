import React from 'react';
import {useTheme} from 'styled-components';
import {useAuth} from '../../hooks/useAuth';
import {ScreenModal} from '../screenModal';

import {
  MessageWrapper,
  ModalButton,
  ModalButtonContainer,
  ModalButtonText,
  ModalContentWrapper,
  ModalMessage,
  ModalTitle,
} from './styles';

interface LogOffModalProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LogOffModal: React.FC<LogOffModalProps> = ({
  modalVisible,
  setModalVisible,
}) => {
  const theme = useTheme();

  const {signOut} = useAuth();

  return (
    <ScreenModal
      type="info"
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}>
      <ModalContentWrapper>
        <ModalTitle>Informação</ModalTitle>
        <MessageWrapper>
          <ModalMessage>
            Ao sair do app você voltará para a tela de login. Você deseja mesmo
            sair?
          </ModalMessage>
        </MessageWrapper>
        <ModalButtonContainer>
          <ModalButton color="transparent" onPress={signOut}>
            <ModalButtonText color={theme.colors.textGray}>
              Sair
            </ModalButtonText>
          </ModalButton>
          <ModalButton onPress={() => setModalVisible(false)}>
            <ModalButtonText>Voltar</ModalButtonText>
          </ModalButton>
        </ModalButtonContainer>
      </ModalContentWrapper>
    </ScreenModal>
  );
};
