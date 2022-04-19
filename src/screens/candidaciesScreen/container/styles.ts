import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.ScrollView`
  background: ${({theme}) => theme.colors.secondary};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.textWhite};
  font-family: ${({theme}) => theme.fonts.family.bold700};
  font-size: ${({theme}) => theme.fonts.headings.h4}px;
  align-self: center;
`;

export const HeaderContainer = styled(LinearGradient).attrs({
  colors: ['#1F478B', '#BB4981'],
})`
  width: 100%;
  padding: ${RFValue(50)}px ${RFValue(40)}px ${RFValue(17)}px;
`;

export const TopHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;
