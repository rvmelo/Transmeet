import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

export const Container = styled.ScrollView``;

export const HeaderContainer = styled(LinearGradient).attrs({
  colors: ['#1F478B', '#BB4981'],
})`
  width: 100%;
  padding-top: ${RFValue(50)}px;
`;

export const HeaderContent = styled.View`
  width: 100%;
  padding: 0 ${RFValue(40)}px ${RFValue(17)}px ${RFValue(40)}px;
`;

export const WhiteBar = styled.View`
  height: ${RFValue(40)}px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background: ${({theme}) => theme.colors.background};
  width: 100%;
`;

export const TopHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const BackButtonInterface = styled.TouchableWithoutFeedback``;

export const BackButtonWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BackButtonText = styled.Text`
  margin-left: 10px;

  color: ${({theme}) => theme.colors.textWhite};
  font-family: ${({theme}) => theme.fonts.family.bold700};
  font-size: ${({theme}) => theme.fonts.headings.h5}px;
`;

export const CompanyName = styled.Text`
  color: ${({theme}) => theme.colors.textWhite};
  font-family: ${({theme}) => theme.fonts.family.bold700};
  font-size: ${({theme}) => theme.fonts.headings.h4}px;
  align-self: center;
`;

export const ContentWrapper = styled.View`
  overflow: hidden;
  background: ${({theme}) => theme.colors.background};
  padding: ${RFValue(30)}px ${RFValue(60)}px ${RFValue(40)}px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.textBlack};
  font-family: ${({theme}) => theme.fonts.family.semiBold600};
  font-size: ${({theme}) => theme.fonts.headings.h5}px;
  align-self: center;
`;

export const Description = styled.Text`
  margin-top: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.textGray};
  font-family: ${({theme}) => theme.fonts.family.regular400};
  font-size: ${({theme}) => theme.fonts.bodyText.smallText}px;
`;

export const SiteFieldText = styled.Text`
  margin-top: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.textBlack};
  font-family: ${({theme}) => theme.fonts.family.bold700};
  font-size: ${({theme}) => theme.fonts.bodyText.smallText}px;
`;

export const Site = styled.Text`
  color: ${({theme}) => theme.colors.secondary};
  font-family: ${({theme}) => theme.fonts.family.bold700};
  font-size: ${({theme}) => theme.fonts.bodyText.smallText}px;
`;

export const SponsorButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-top: ${RFValue(70)}px;
  padding: ${RFValue(14)}px ${RFValue(22)}px;
  background: ${({theme}) => theme.colors.secondary};
  border-radius: ${RFValue(24)}px;
  align-items: center;
`;

export const SponsorButtonText = styled.Text`
  color: ${({theme}) => theme.colors.textWhite};
  font-family: ${({theme}) => theme.fonts.family.bold700};
  font-size: ${({theme}) => theme.fonts.bodyText.base}px;
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

interface WarningButtonProps {
  color?: string;
}

export const WarningButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<WarningButtonProps>`
  width: ${RFValue(87)}px;
  background: ${({theme, color}) => (color ? color : theme.colors.success)};
  border-radius: ${RFValue(24)}px;
  padding: ${RFValue(9)}px 0;
  align-items: center;
  justify-content: center;

  ${({theme, color}) =>
    color &&
    css`
      border-width: 1px;
      border-color: ${theme.colors.textGray};
    `}
`;

export const ModalButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 0 ${RFValue(47)}px;
`;

interface ModalButtonTextProps {
  color?: string;
}

export const ModalButtonText = styled.Text<ModalButtonTextProps>`
  color: ${({theme, color}) => (color ? color : theme.colors.textWhite)};
  font-family: ${({theme}) => theme.fonts.family.bold700};
  font-size: ${({theme}) => theme.fonts.bodyText.mediumBase}px;
`;
