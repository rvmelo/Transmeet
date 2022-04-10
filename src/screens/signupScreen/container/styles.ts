import {TextInput} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
`;

export const StyledScroll = styled.ScrollView`
  padding: 0 40px;
`;

//  loading screen

export const SpinnerContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledSpinner = styled.ActivityIndicator.attrs({
  size: 'large',
})``;

//  header

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.textBlack};
  font-size: ${({theme}) => theme.fonts.headings.h4}px;
  font-family: ${({theme}) => theme.fonts.family.bold700};
  margin-top: 10px;
  align-self: center;
`;

export const StyledText = styled.Text`
  color: ${({theme}) => theme.colors.textGray};
  font-size: ${({theme}) => theme.fonts.bodyText.mediumBase}px;
  font-family: ${({theme}) => theme.fonts.family.regular400};
  margin-top: 10px;
  align-self: center;
`;

export const OptionsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

interface OptionButtonProps {
  isActive: boolean;
}

export const OptionButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<OptionButtonProps>`
  background: ${({theme, isActive}) =>
    isActive ? theme.colors.secondary : theme.colors.gray};
  border-radius: 24px;
  padding: 8px 14px;
  border-color: ${({theme}) => theme.colors.secondary};
`;

export const OptionButtonText = styled.Text<OptionButtonProps>`
  font-size: ${({theme}) => theme.fonts.bodyText.smallSemiBold}px;
  font-family: ${({theme}) => theme.fonts.family.semiBold600};
  color: ${({theme, isActive}) =>
    isActive ? theme.colors.textWhite : theme.colors.grayDark}; ;
`;

// sign up from

export const SignUpWrapper = styled.View`
  margin-top: 48px;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

// picker input

interface PickerContainerProps {
  marginLeft: number;
  marginRight: number;
}

export const PickerContainer = styled.View<PickerContainerProps>`
  height: 56px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.textGray};
  border-radius: 5px;
  padding: 0 19px 0 16px;
  justify-content: center;
  margin-left: ${({marginLeft}) => marginLeft}px;
  margin-right: ${({marginRight}) => marginRight}px;
`;

export const Label = styled.Text`
  background: ${({theme}) => theme.colors.background};
  padding: 5px;
  color: ${({theme}) => theme.colors.textGray};
  font-size: ${({theme}) => theme.fonts.bodyText.smallSemiBold}px;
  font-family: ${({theme}) => theme.fonts.family.semiBold600};
  position: absolute;
  left: 15px;
  bottom: 40px;
`;

//  description section

export const DescriptionWrapper = styled.View``;

export const DescriptionText = styled.Text`
  color: ${({theme}) => theme.colors.textGray};
  font-family: ${({theme}) => theme.fonts.family.regular400};
  font-size: ${({theme}) => theme.fonts.bodyText.mediumBase}px;
  margin-bottom: 20px;
  align-self: center;
`;

export const DescriptionInputWrapper = styled.View`
  height: 115px;
  width: 100%;
  padding: 10px 16px;
  background: ${({theme}) => theme.colors.background};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.textGray};
  border-radius: 5px;
`;

export const DescriptionTextInput = styled(TextInput)`
  color: ${({theme}) => theme.colors.textGray};
  font-family: ${({theme}) => theme.fonts.family.regular400};
  font-size: ${({theme}) => theme.fonts.bodyText.smallText}px;
`;

export const PasswordWrapper = styled.View`
  margin-top: 60px;
`;

// radios section

export const RadioWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 60px;
  width: 100%;
`;

export const RadioText = styled.Text`
  color: ${({theme}) => theme.colors.textGray};
  font-size: 10px;
  margin-left: 6px;
  flex: 1;
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
  margin-bottom: 30px;
`;

export const AccountButtonText = styled.Text`
  font-size: ${({theme}) => theme.fonts.bodyText.base}px;
  font-family: ${({theme}) => theme.fonts.family.bold700};
  color: ${({theme}) => theme.colors.textWhite};
`;

// modal

export const ModalBackground = styled.View`
  flex: 1;
  background: rgba(21, 37, 54, 0.7);
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.View`
  border-radius: 15px;
  overflow: hidden;
`;

export const ModalTop = styled.View`
  background: ${({theme}) => theme.colors.error};
  padding: 30px 0;
  align-items: center;
`;

export const ModalBottom = styled.View`
  background: ${({theme}) => theme.colors.gray};
  align-items: center;
`;

export const ModalTitle = styled.Text`
  margin-top: 26px;
  font-size: ${({theme}) => theme.fonts.headings.h5}px;
  font-family: ${({theme}) => theme.fonts.family.semiBold600};
  color: ${({theme}) => theme.colors.textGray};
`;

export const ModalMessage = styled.Text`
  margin-top: 7px;
  font-size: ${({theme}) => theme.fonts.headings.h6}px;
  font-family: ${({theme}) => theme.fonts.family.bold700};
  color: ${({theme}) => theme.colors.textGray};
`;

// modal button

export const StyledBackModalButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background: ${({theme}) => theme.colors.primary};
  border-radius: 20px;
  width: 87px;
  height: 40px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  margin: 25px 0 53px 0;
`;

export const StyledNextModalButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background: ${({theme}) => theme.colors.primary};
  flex-direction: row;
  border-radius: 24px;
  height: 40px;
  border-radius: 24px;
  padding: 0 14px 0 39px;
  align-items: center;
  margin: 25px 0 53px 0;
`;

export const ModalBackButtonText = styled.Text`
  font-size: ${({theme}) => theme.fonts.bodyText.smallText}px;
  font-family: ${({theme}) => theme.fonts.family.semiBold600};
  color: ${({theme}) => theme.colors.textWhite};
`;

export const ModalNextButtonText = styled.Text`
  margin-right: 10px;
  font-size: ${({theme}) => theme.fonts.bodyText.smallText}px;
  font-family: ${({theme}) => theme.fonts.family.semiBold600};
  color: ${({theme}) => theme.colors.textWhite};
`;
