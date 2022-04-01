import React from 'react';

import {ButtonText, StyledButton} from './styles';

interface SliderButtonProps {
  title: string;
  onPress: () => void;
  isTransparent?: boolean;
}

export const SliderButton: React.FC<SliderButtonProps> = ({
  title,
  onPress,
  isTransparent = false,
}) => {
  return (
    <StyledButton onPress={onPress} isTransparent={isTransparent}>
      {!isTransparent && <ButtonText>{title}</ButtonText>}
    </StyledButton>
  );
};
