import React from 'react';

import {ButtonText, StyledButton} from './styles';

interface SliderButtonProps {
  title: string;
}

export const SliderButton: React.FC<SliderButtonProps> = ({title}) => {
  return (
    <StyledButton>
      <ButtonText>{title}</ButtonText>
    </StyledButton>
  );
};
