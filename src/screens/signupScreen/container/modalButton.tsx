import React from 'react';

import {ModalButtonText, StyledModalButton} from './styles';

interface ModalButtonProps {
  onPress: () => void;
}

export const ModalButton: React.FC<ModalButtonProps> = ({onPress}) => {
  return (
    <StyledModalButton onPress={onPress}>
      <ModalButtonText>Voltar</ModalButtonText>
    </StyledModalButton>
  );
};
