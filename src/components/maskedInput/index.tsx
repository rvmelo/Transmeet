import React from 'react';

import {TextInputMaskProps} from 'react-native-masked-text';

import {Container, Label, StyledMaskedInput} from './styles';

interface FormInput extends TextInputMaskProps {
  label: string;
  isCentered?: boolean;
  styles?: {
    marginBottom?: number;
    marginLeft?: number;
    width?: number;
  };
}

export const MaskedFormInput: React.FC<FormInput> = ({
  label,
  styles = {},
  isCentered = false,
  ...rest
}) => {
  const {marginBottom, marginLeft, width} = styles || {};

  return (
    <Container
      isCentered={isCentered}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      width={width}>
      <Label>{label}</Label>
      <StyledMaskedInput {...rest} />
    </Container>
  );
};
