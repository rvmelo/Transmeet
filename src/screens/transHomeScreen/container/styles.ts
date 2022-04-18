import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled(LinearGradient).attrs({
  colors: ['#BB4981', '#1F478B'],
})`
  padding: 0 ${RFValue(40)}px;
  padding-top: ${RFValue(80)}px;
`;

export const UserInfoContainer = styled.View``;

export const Greetings = styled.Text`
  font-size: ${({theme}) => theme.fonts.bodyText.regular}px;
  font-family: ${({theme}) => theme.fonts.family.regular400};
  color: ${({theme}) => theme.colors.textWhite};
`;

export const UserName = styled.Text`
  font-size: ${({theme}) => theme.fonts.bodyText.regular}px;
  font-family: ${({theme}) => theme.fonts.family.bold700};
  color: ${({theme}) => theme.colors.textWhite};
`;

export const StyledText = styled.Text`
  font-size: ${({theme}) => theme.fonts.bodyText.mediumBase}px;
  font-family: ${({theme}) => theme.fonts.family.regular400};
  color: ${({theme}) => theme.colors.textWhite};
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 12px 5px 19px;
  background: ${({theme}) => theme.colors.textWhite};
  margin-top: 12px;
  margin-bottom: 48px;
`;

export const StyledTextInput = styled(TextInput)`
  flex: 1;
  margin-left: 17px;
  margin-right: 30px;

  color: ${({theme}) => theme.colors.textGray};
  font-family: ${({theme}) => theme.fonts.family.regular400};
  font-size: ${({theme}) => theme.fonts.bodyText.smallSemiBold}px;
`;
