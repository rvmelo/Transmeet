import {TextInput} from 'react-native';
import styled from 'styled-components/native';

interface ContainerProps {
  marginBottom: number;
}

export const Container = styled.View<ContainerProps>`
  max-height: 56px;
  flex: 1;
  width: 100%;
  justify-content: center;
  padding: 0 16px;
  background: ${({theme}) => theme.colors.background};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.textGray};
  border-radius: 5px;
  margin-bottom: ${({marginBottom}) => marginBottom}px;
`;

export const StyledTextInput = styled(TextInput)`
  color: ${({theme}) => theme.colors.textGray};
  font-family: ${({theme}) => theme.fonts.family.regular400};
  font-size: ${({theme}) => theme.fonts.bodyText.base}px;
`;

export const Label = styled.Text`
  background: ${({theme}) => theme.colors.background};
  padding: 5px;
  color: ${({theme}) => theme.colors.textGray};
  font-size: ${({theme}) => theme.fonts.bodyText.smallSemiBold}px;
  font-family: ${({theme}) => theme.fonts.family.semiBold600};
  position: absolute;
  left: 15px;
  bottom: 35px;
`;
