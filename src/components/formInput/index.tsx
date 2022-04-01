import React from 'react';
import {TextInputProps} from 'react-native';

import {Container, Label, StyledTextInput} from './styles';

interface FormInput extends TextInputProps {
  label: string;
  marginBottom?: number;
}

export const FormInput: React.FC<FormInput> = ({
  label,
  marginBottom = 0,
  ...rest
}) => {
  return (
    <Container marginBottom={marginBottom}>
      <Label>{label}</Label>
      <StyledTextInput {...rest} />
    </Container>
  );
};
