import {TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps {
  marginBottom: number;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  max-height: 56px;
  flex: 1;
  width: 100%;
  justify-content: center;
  padding: 0 ${RFValue(16)}px;
  background: ${({theme}) => theme.colors.background};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.textGray};
  border-radius: 5px;
  margin-bottom: ${({marginBottom}) => marginBottom}px;
`;

interface StyledTextInputProps {
  hasLeftIcon: boolean;
}

export const StyledTextInput = styled(TextInput)<StyledTextInputProps>`
  flex: 1;
  color: ${({theme}) => theme.colors.textGray};
  font-family: ${({theme}) => theme.fonts.family.regular400};
  font-size: ${({theme}) => theme.fonts.bodyText.base}px;
  margin-left: ${({hasLeftIcon}) => (hasLeftIcon ? 12 : 0)}px;
`;

interface LabelProps {
  labelVerticalPosition: number;
  labelHorizontalPosition: number;
}

export const Label = styled.Text<LabelProps>`
  background: ${({theme}) => theme.colors.background};
  padding: 5px;
  color: ${({theme}) => theme.colors.textGray};
  font-size: ${({theme}) => theme.fonts.bodyText.smallSemiBold}px;
  font-family: ${({theme}) => theme.fonts.family.semiBold600};
  position: absolute;
  left: ${({labelHorizontalPosition}) => labelHorizontalPosition}px;
  bottom: ${({labelVerticalPosition}) => labelVerticalPosition}px;
`;

export const ContentWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
