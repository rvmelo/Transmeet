import styled from 'styled-components/native';

export const ForgotPasswordText = styled.Text`
  color: ${({theme}) => theme.colors.textGray};
  font-family: ${({theme}) => theme.fonts.family.semiBold600};
  font-size: ${({theme}) => theme.fonts.sizes.m}px;
  align-self: flex-end;
`;

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.backgroundDark};
`;
export const LoginContainer = styled.View`
  flex: 2;
  background: ${({theme}) => theme.colors.background};
  align-items: center;
  justify-content: center;
  padding: 0 8%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
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
  color: ${({theme}) => theme.colors.textWhite};
  font-family: ${({theme}) => theme.fonts.family.bold700};
`;

export const IntroText = styled.Text`
  color: ${({theme}) => theme.colors.textWhite};
  font-family: ${({theme}) => theme.fonts.family.regular400};
  font-size: ${({theme}) => theme.fonts.sizes.lg}px;
  margin-bottom: 50px;
  text-align: center;
`;

export const BottomText = styled.Text`
  color: ${({theme}) => theme.colors.textGray};
  font-size: ${({theme}) => theme.fonts.sizes.sm}px;
  margin-bottom: 20px;
`;

export const HighlightedText = styled.Text`
  font-family: ${({theme}) => theme.fonts.family.bold700};
`;

export const TouchableInterface = styled.TouchableWithoutFeedback``;

export const AltAuthView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const IconInterface = styled.TouchableOpacity`
  margin: 0 25px;
`;

export const LogoContainer = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.backgroundDark};
  align-items: center;
  justify-content: space-between;
`;
