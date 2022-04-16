import React from 'react';
import {BackModalButton, NextModalButton} from './modalButtons';

import {ModalBottom, ModalMessage, ModalTitle} from './styles';

interface ModalProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  type?: 'error' | 'success';
  onUserNavigation?: () => void;
}

export const SignUpContent: React.FC<ModalProps> = ({
  setModalVisible,
  type,
  onUserNavigation,
}) => {
  return (
    <ModalBottom>
      <ModalTitle>{type === 'error' ? 'ERRO' : 'Concluído'}</ModalTitle>
      <ModalMessage>
        {type === 'error'
          ? 'Usuário não cadastrado'
          : 'Conta registrada com sucesso!'}
      </ModalMessage>
      {type === 'error' ? (
        <BackModalButton onPress={() => setModalVisible(false)} />
      ) : (
        <NextModalButton onPress={onUserNavigation} />
      )}
    </ModalBottom>
  );
};

export const InfoContent: React.FC<ModalProps> = ({setModalVisible}) => {
  return (
    <ModalBottom>
      <ModalTitle>Em produção</ModalTitle>
      <ModalMessage>
        Estamos trabalhando nesta opção ainda, mas logo ela estará disponível.
        Aguarde...
      </ModalMessage>
      <BackModalButton onPress={() => setModalVisible(false)} />
    </ModalBottom>
  );
};
