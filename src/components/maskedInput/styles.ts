import {TextInputMask} from 'react-native-masked-text';
import styled, {css} from 'styled-components/native';

interface ContainerProps {
  marginBottom: number | undefined;
  marginLeft: number | undefined;
  width: number | undefined;
  isCentered?: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  height: 56px;
  justify-content: center;
  padding: 0 16px;
  align-items: ${({isCentered}) => (isCentered ? 'center' : 'flex-start')};
  background: ${({theme}) => theme.colors.background};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.textGray};
  border-radius: 5px;
  margin-bottom: ${({marginBottom}) => (marginBottom ? marginBottom : 0)}px;
  margin-left: ${({marginLeft}) => (marginLeft ? marginLeft : 0)}px;

  ${({width}) =>
    width &&
    css`
      max-width: ${width}px;
    `}
`;

export const Label = styled.Text`
  background: ${({theme}) => theme.colors.background};
  padding: 5px;
  color: ${({theme}) => theme.colors.textGray};
  font-size: ${({theme}) => theme.fonts.bodyText.smallSemiBold}px;
  position: absolute;
  left: 15px;
  bottom: 40px;
`;

export const StyledMaskedInput = styled(TextInputMask)`
  color: ${({theme}) => theme.colors.textGray};
  font-size: ${({theme}) => theme.fonts.bodyText.base}px;
`;
