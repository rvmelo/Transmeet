import styled from 'styled-components/native';

export const ForgotPasswordText = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.fonts.sizes.sm}px;
  align-self: flex-end;
`;

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
  align-items: center;
  justify-content: center;
  padding: 0 5%;
`;

// account button

export const StyledAccountButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background: ${({theme}) => theme.colors.secondary};
  border-radius: 20px;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.secondary};
  margin: 20px 0;
`;

export const AccountButtonText = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.lg}px;
  color: ${({theme}) => theme.colors.text};
`;

export const IntroText = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.fonts.sizes.m}px;
  margin-bottom: 50px;
  text-align: center;
`;

export const BottomText = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.fonts.sizes.sm}px;
  margin-bottom: 20px;
`;

export const HighlightedText = styled.Text`
  font-weight: bold;
`;

export const TouchableInterface = styled.TouchableWithoutFeedback``;
