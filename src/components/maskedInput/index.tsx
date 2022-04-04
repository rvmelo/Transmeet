import React from 'react';

import {TextInputMask, TextInputMaskProps} from 'react-native-masked-text';

import {Container, Label} from './styles';

interface FormInput extends TextInputMaskProps {
  label: string;
  marginBottom?: number;
}

export const MaskedFormInput: React.FC<FormInput> = ({
  label,
  marginBottom = 0,
  ...rest
}) => {
  return (
    <Container marginBottom={marginBottom}>
      <Label>{label}</Label>
      <TextInputMask {...rest} />
    </Container>
  );
};
