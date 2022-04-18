import React from 'react';
import {ArrowLeftIcon} from '../../../../assets/svg/arrowLeft';

import {BackButtonInterface, BackButtonText, BackButtonWrapper} from './styles';

interface BackButtonProps {
  onPress: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({onPress}) => {
  return (
    <BackButtonInterface onPress={onPress}>
      <BackButtonWrapper>
        <ArrowLeftIcon width={8} height={16} />
        <BackButtonText>voltar</BackButtonText>
      </BackButtonWrapper>
    </BackButtonInterface>
  );
};
