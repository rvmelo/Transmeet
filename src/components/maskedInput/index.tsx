import React from 'react';

import {TextInputMaskProps} from 'react-native-masked-text';

import {Container, Label, StyledMaskedInput} from './styles';

import {useTheme} from 'styled-components';

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

  const theme = useTheme();

  return (
    <Container
      isCentered={isCentered}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      width={width}>
      <Label>{label}</Label>
      <StyledMaskedInput
        placeholderTextColor={theme.colors.textGray}
        selectionColor={theme.colors.textGray}
        {...rest}
      />
    </Container>
  );
};
