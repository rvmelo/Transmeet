import React from 'react';
import {BackModalButton, NextModalButton} from './modalButtons';

import {ModalBottom, ModalMessage, ModalTitle} from './styles';

interface ErrorModalProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  type: 'error' | 'success';
}

export const ModalContent: React.FC<ErrorModalProps> = ({
  setModalVisible,
  type,
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
        <NextModalButton onPress={() => setModalVisible(false)} />
      )}
    </ModalBottom>
  );
};
