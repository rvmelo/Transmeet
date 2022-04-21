import React from 'react';
import {useTheme} from 'styled-components';
import {ScreenModal} from '../../../components/screenModal';

import {
  ModalView,
  ModalTitle,
  ModalDescription,
  ModalButtonsView,
  ModalDescriptionBold,
  ModalButton,
  ModalButtonText,
} from '../container/styles';

interface ModalProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SuccessProps extends ModalProps {
  onGoBack: () => void;
  onConfirm: () => void;
}

interface WarningProps extends ModalProps {
  onGoBack: () => void;
  onConfirm: () => void;
}

const SuccessText =
  'Você demonstrou interesse no candidato selecionado e uma mensagem de foi enviada. Agora é só entrar em contato com os dados recebidos.';

export const SuccessModal: React.FC<SuccessProps> = ({
  modalVisible,
  setModalVisible,
  onConfirm,
  onGoBack,
}) => {
  const theme = useTheme();

  return (
    <ScreenModal
      type="success"
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}>
      <ModalView>
        <ModalTitle>Enviado</ModalTitle>
        <ModalDescription>{SuccessText}</ModalDescription>
        <ModalButtonsView>
          <ModalButton color={theme.colors.secondary} onPress={onGoBack}>
            <ModalButtonText>Ir para Home</ModalButtonText>
          </ModalButton>
          <ModalButton color="transparent" onPress={onConfirm}>
            <ModalButtonText color={theme.colors.textGray}>
              Ver Perfil
            </ModalButtonText>
          </ModalButton>
        </ModalButtonsView>
      </ModalView>
    </ScreenModal>
  );
};

export const WarningModal: React.FC<WarningProps> = ({
  modalVisible,
  setModalVisible,
  onConfirm,
  onGoBack,
}) => {
  const theme = useTheme();
  return (
    <ScreenModal
      type="warning"
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}>
      <ModalView>
        <ModalTitle>Atenção</ModalTitle>
        <ModalDescription>
          Você clicou em <ModalDescriptionBold>COMBINAR</ModalDescriptionBold>.
        </ModalDescription>
        <ModalDescription>
          Deseja prosseguir e confirmar escolha?
        </ModalDescription>
        <ModalButtonsView>
          <ModalButton color="transparent" onPress={onGoBack}>
            <ModalButtonText color={theme.colors.textGray}>
              Voltar
            </ModalButtonText>
          </ModalButton>
          <ModalButton color={theme.colors.success} onPress={onConfirm}>
            <ModalButtonText>Sim</ModalButtonText>
          </ModalButton>
        </ModalButtonsView>
      </ModalView>
    </ScreenModal>
  );
};
