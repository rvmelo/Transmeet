import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledLinearGradient = styled(LinearGradient).attrs({
  colors: ['#BB4981', '#1F478B'],
})`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  padding: 0 ${RFValue(40)}px;
  margin-top: ${RFValue(80)}px;
`;

export const MenuIconContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.secondary};

  position: absolute;
  right: ${RFValue(30)}px;
  top: ${RFValue(-20)}px;
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