import React from 'react';
import {useTheme} from 'styled-components';
import {ScreenModal} from '../../../components/screenModal';
import {
  ModalButton,
  ModalButtonText,
  ModalMessage,
  ModalTitle,
  ModalContentWrapper,
  WarningButton,
  ModalButtonContainer,
  MessageWrapper,
} from './styles';

interface ModalProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SuccessProps extends ModalProps {
  onGoBack: () => void;
}

interface WarningProps extends ModalProps {
  onGoBack: () => void;
  onConfirm: () => void;
}

const successText =
  'Você demonstrou interesse na empresa selecionada e seu perfil foi enviado para ser analisado. Desejamos boa sorte!';

export const SuccessModal: React.FC<SuccessProps> = ({
  modalVisible,
  setModalVisible,
  onGoBack,
}) => {
  return (
    <ScreenModal
      type="success"
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}>
      <ModalContentWrapper>
        <ModalTitle>Enviado</ModalTitle>
        <MessageWrapper>
          <ModalMessage>{successText}</ModalMessage>
        </MessageWrapper>
        <ModalButton onPress={onGoBack}>
          <ModalButtonText>Voltar para a Home</ModalButtonText>
        </ModalButton>
      </ModalContentWrapper>
    </ScreenModal>
  );
};

export const WarningModal: React.FC<WarningProps> = ({
  modalVisible,
  setModalVisible,
  onGoBack,
  onConfirm,
}) => {
  const theme = useTheme();

  return (
    <ScreenModal
      type="warning"
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}>
      <ModalContentWrapper>
        <ModalTitle>Atenção</ModalTitle>
        <MessageWrapper>
          <ModalMessage>
            Deseja prosseguir e confirmar sua escolha?
          </ModalMessage>
        </MessageWrapper>
        <ModalButtonContainer>
          <WarningButton color="transparent" onPress={onGoBack}>
            <ModalButtonText color={theme.colors.textGray}>
              Voltar
            </ModalButtonText>
          </WarningButton>
          <WarningButton onPress={onConfirm}>
            <ModalButtonText>Sim</ModalButtonText>
          </WarningButton>
        </ModalButtonContainer>
      </ModalContentWrapper>
    </ScreenModal>
  );
};
