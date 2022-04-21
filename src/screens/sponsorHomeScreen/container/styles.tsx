import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const HeaderContainer = styled(LinearGradient).attrs({
  colors: ['#1F478B', '#BB4981'],
})`
  padding: 0 ${RFValue(40)}px;
  padding-top: ${RFValue(80)}px;
`;

export const SponsorInfo = styled.View`
  align-items: flex-start;
`;

export const Greetings = styled.Text`
  font-size: ${({theme}) => theme.fonts.bodyText.regular}px;
  font-family: ${({theme}) => theme.fonts.family.regular400};
  color: ${({theme}) => theme.colors.textWhite};
`;

export const SponsorName = styled.Text`
  font-size: 40px;
  font-family: ${({theme}) => theme.fonts.family.bold700};
  color: ${({theme}) => theme.colors.textWhite};
`;

export const CandidaciesInfo = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${RFValue(40)}px;
`;

export const InfoText = styled.Text`
  font-size: ${({theme}) => theme.fonts.bodyText.mediumBase}px;
  font-family: ${({theme}) => theme.fonts.family.bold700};
  color: ${({theme}) => theme.colors.textWhite};
`;
