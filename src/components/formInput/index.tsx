import React from 'react';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components';

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
  const theme = useTheme();

  return (
    <Container marginBottom={marginBottom}>
      <Label>{label}</Label>
      <StyledTextInput placeholderTextColor={theme.colors.textGray} {...rest} />
    </Container>
  );
};
