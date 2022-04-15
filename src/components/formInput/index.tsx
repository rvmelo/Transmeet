import React, {ReactNode} from 'react';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components';

import {Container, Label, ContentWrapper, StyledTextInput} from './styles';

interface IconInputProps extends TextInputProps {
  label: string;
  labelVerticalPosition?: number;
  labelHorizontalPosition?: number;

  marginBottom?: number;
  hasLeftIcon?: boolean;

  rightIcon?: ReactNode | undefined;
  leftIcon?: ReactNode | undefined;
}

export const FormInput: React.FC<IconInputProps> = ({
  label,
  labelVerticalPosition = 35,
  labelHorizontalPosition = 15,
  marginBottom = 0,
  rightIcon = undefined,
  leftIcon,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <Container marginBottom={marginBottom}>
      <Label
        labelVerticalPosition={labelVerticalPosition}
        labelHorizontalPosition={labelHorizontalPosition}>
        {label}
      </Label>
      <ContentWrapper>
        {leftIcon && leftIcon}

        <StyledTextInput
          hasLeftIcon={!!leftIcon}
          placeholderTextColor={theme.colors.textGray}
          selectionColor={theme.colors.textGray}
          {...rest}
        />
        {rightIcon && rightIcon}
      </ContentWrapper>
    </Container>
  );
};
