import React from 'react';
import {ArrowRightIcon} from '../../../../assets/svg/arrowRight';

import {
  ModalBackButtonText,
  ModalNextButtonText,
  StyledBackModalButton,
  StyledNextModalButton,
} from './styles';

interface ModalButtonProps {
  onPress: (() => void) | undefined;
}

export const BackModalButton: React.FC<ModalButtonProps> = ({onPress}) => {
  return (
    <StyledBackModalButton onPress={onPress}>
      <ModalBackButtonText>Voltar</ModalBackButtonText>
    </StyledBackModalButton>
  );
};

export const NextModalButton: React.FC<ModalButtonProps> = ({onPress}) => {
  return (
    <StyledNextModalButton onPress={onPress}>
      <ModalNextButtonText>Prosseguir</ModalNextButtonText>
      <ArrowRightIcon width={24} height={24} />
    </StyledNextModalButton>
  );
};
