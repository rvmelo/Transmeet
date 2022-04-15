import React, {ReactNode} from 'react';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components';

import {Container, Label, ContentWrapper, StyledTextInput} from './styles';

interface IconInputProps extends TextInputProps {
  label: string;
  marginBottom?: number;
  hasLeftIcon?: boolean;

  rightIcon?: ReactNode | undefined;
  leftIcon?: ReactNode | undefined;
}

export const FormInput: React.FC<IconInputProps> = ({
  label,
  marginBottom = 0,
  rightIcon = undefined,
  leftIcon,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <Container marginBottom={marginBottom}>
      <Label>{label}</Label>
      <ContentWrapper>
        {leftIcon && leftIcon}

        <StyledTextInput
          hasLeftIcon={!!leftIcon}
          placeholderTextColor={theme.colors.textGray}
          {...rest}
        />
        {rightIcon && rightIcon}
      </ContentWrapper>
    </Container>
  );
};
