import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
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

// modals

export const ModalContentWrapper = styled.View`
  padding: ${RFValue(21)}px ${RFValue(12)}px ${RFValue(30)}px;
  align-items: center;
  background: ${({theme}) => theme.colors.background};
`;

export const ModalTitle = styled.Text`
  color: ${({theme}) => theme.colors.textGray};
  font-family: ${({theme}) => theme.fonts.family.semiBold600};
  font-size: ${({theme}) => theme.fonts.headings.h5}px;
`;

export const MessageWrapper = styled.View`
  margin-top: ${RFValue(8)}px;
  margin-bottom: ${RFValue(13)}px;
`;

export const ModalMessage = styled.Text`
  color: ${({theme}) => theme.colors.textGray};
  font-family: ${({theme}) => theme.fonts.family.regular400};
  font-size: ${({theme}) => theme.fonts.bodyText.smallText}px;
  text-align: center;
`;

export const ModalButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding: ${RFValue(9)}px ${RFValue(24)}px;
  background: ${({theme}) => theme.colors.secondary};
  border-radius: ${RFValue(24)}px;
  align-items: center;
  justify-content: center;
`;

export const ModalButtonText = styled.Text`
  color: ${({theme}) => theme.colors.textWhite};
  font-family: ${({theme}) => theme.fonts.family.bold700};
  font-size: ${({theme}) => theme.fonts.bodyText.mediumBase}px;
`;
