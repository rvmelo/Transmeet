import React from 'react';

import {ButtonText, StyledButton} from './styles';

interface SliderButtonProps {
  title: string;
  onPress: () => void;
  outLine?: boolean;
  isTransparent?: boolean;
}

export const SliderButton: React.FC<SliderButtonProps> = ({
  title,
  onPress,
  outLine = false,
  isTransparent = false,
}) => {
  return (
    <StyledButton
      onPress={onPress}
      isTransparent={isTransparent}
      outLine={outLine}>
      {!isTransparent && <ButtonText outLine={outLine}>{title}</ButtonText>}
    </StyledButton>
  );
};
