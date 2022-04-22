import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background: ${({theme}) => theme.colors.secondary};
`;

export const HeaderContainer = styled(LinearGradient).attrs({
  colors: ['#1F478B', '#BB4981'],
})`
  width: 100%;
  padding-top: ${RFValue(50)}px;
`;

export const HeaderContent = styled.View`
  padding: 0 ${RFValue(40)}px ${RFValue(17)}px ${RFValue(40)}px;
`;

export const TopHeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.family.bold700};
  font-size: ${({theme}) => theme.fonts.headings.h4}px;
  color: ${({theme}) => theme.colors.textWhite};
  align-self: center;
`;

export const ContentWrapper = styled.View`
  background: ${({theme}) => theme.colors.background};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 0 ${RFValue(60)}px;
`;

export const BasicInfo = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${RFValue(20)}px 0;
`;

export const Image = styled.Image``;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.family.semiBold600};
  font-size: ${({theme}) => theme.fonts.bodyText.regular}px;
  color: ${({theme}) => theme.colors.textBlack};
`;

export const DetailedInfo = styled.View`
  align-items: flex-start;
`;

export const Contact = styled.View`
  padding: ${RFValue(20)}px 0;
`;
export const Gender = styled.View`
  padding: ${RFValue(20)}px 0;
`;
export const About = styled.View`
  padding: ${RFValue(20)}px 0;
`;
export const SocialMedia = styled.View`
  padding: ${RFValue(20)}px 0;
`;

export const BoldBodyText = styled.Text`
  font-family: ${({theme}) => theme.fonts.family.semiBold600};
  font-size: ${({theme}) => theme.fonts.bodyText.smallText}px;
  color: ${({theme}) => theme.colors.textBlack};
  line-height: 15px;
`;

export const BodyText = styled.Text`
  font-family: ${({theme}) => theme.fonts.family.regular400};
  font-size: ${({theme}) => theme.fonts.bodyText.smallText}px;
  color: ${({theme}) => theme.colors.textBlack};
  line-height: 15px;
`;

export const LinkText = styled.Text`
  font-family: ${({theme}) => theme.fonts.family.semiBold600};
  font-size: ${({theme}) => theme.fonts.bodyText.smallText}px;
  color: ${({theme}) => theme.colors.secondary};
  line-height: 15px;
`;

export const ButtonsSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${RFValue(20)}px 0;
`;

interface SponsorDeclineButtonProps {
  title: string;
  isDecline: boolean;
}

export const SponsorButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<SponsorDeclineButtonProps>`
  padding: ${RFValue(14)}px ${RFValue(22)}px;
  background: ${({theme, isDecline}) =>
    isDecline ? theme.colors.error : theme.colors.success};
  border-radius: ${RFValue(24)}px;
  align-items: center;
`;

export const SponsorButtonText = styled.Text`
  color: ${({theme}) => theme.colors.textWhite};
  font-family: ${({theme}) => theme.fonts.family.bold700};
  font-size: ${({theme}) => theme.fonts.bodyText.base}px;
`;

export const ModalView = styled.View`
  padding: ${RFValue(25)}px ${RFValue(12)}px;
  background: ${({theme}) => theme.colors.background}
  align-items: center;
`;
export const ModalTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.family.semiBold600};
  font-size: ${({theme}) => theme.fonts.bodyText.regular}px;
  color: ${({theme}) => theme.colors.textGray};
  padding-bottom: ${RFValue(12)}px;
`;
export const ModalDescription = styled.Text`
  font-family: ${({theme}) => theme.fonts.family.regular400};
  font-size: ${({theme}) => theme.fonts.bodyText.smallText}px;
  color: ${({theme}) => theme.colors.textGray};
  text-align: center;
`;
export const ModalDescriptionBold = styled.Text`
  font-family: ${({theme}) => theme.fonts.family.semiBold600};
  font-size: ${({theme}) => theme.fonts.bodyText.smallText}px;
  color: ${({theme}) => theme.colors.textGray};
`;

export const ModalButtonsView = styled.View`
  width: 100%;
  padding-top: ${RFValue(25)}px;
  flex-direction: row;
  justify-content: space-around;
`;

interface ModalButtonProps {
  color?: string;
}

export const ModalButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<ModalButtonProps>`
  padding: ${RFValue(9)}px ${RFValue(24)}px;
  background: ${({theme, color}) => (color ? color : theme.colors.secondary)};
  border: ${({theme, color}) =>
    color === 'transparent' ? theme.colors.textGray : color};
  border-radius: ${RFValue(24)}px;
  align-items: center;
  justify-content: center;
`;

interface ModalButtonTextProps {
  color?: string;
}

export const ModalButtonText = styled.Text<ModalButtonTextProps>`
  color: ${({theme, color}) => (color ? color : theme.colors.textWhite)};
  font-family: ${({theme}) => theme.fonts.family.bold700};
  font-size: ${({theme}) => theme.fonts.bodyText.mediumBase}px;
`;
