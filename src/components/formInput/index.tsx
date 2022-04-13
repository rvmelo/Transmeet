import React from 'react';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components';

import {Container, Label, StyledTextInput} from './styles';

interface FormInput extends TextInputProps {
  label: string;
  marginBottom?: number;
  marginTop?: number;
}

export const FormInput: React.FC<FormInput> = ({
  label,
  marginTop = 0,
  marginBottom = 0,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <Container marginBottom={marginBottom} marginTop={marginTop}>
      <Label>{label}</Label>
      <StyledTextInput placeholderTextColor={theme.colors.textGray} {...rest} />
    </Container>
  );
};
