import {TextInput} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
`;

export const StyledScroll = styled.ScrollView`
  padding: 0 40px;
`;

//  header

export const Title = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  align-self: center;
`;

export const StyledText = styled.Text`
  color: #68717a;
  font-size: 14px;
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
    isActive ? theme.colors.secondary : '#CFD2D4'};
  border-radius: 24px;
  padding: 8px 14px;
  border-color: ${({theme}) => theme.colors.secondary};
`;

export const OptionButtonText = styled.Text`
  font-size: 12px;
  color: white;
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
  border-color: ${({theme}) => theme.colors.secondary};
  border-radius: 5px;
  padding: 0 19px 0 16px;
  justify-content: center;
  margin-left: ${({marginLeft}) => marginLeft}px;
  margin-right: ${({marginRight}) => marginRight}px;
`;

export const Label = styled.Text`
  background: ${({theme}) => theme.colors.background};
  padding: 5px;
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.fonts.sizes.lg}px;
  position: absolute;
  left: 15px;
  bottom: 40px;
`;

//  description section

export const DescriptionWrapper = styled.View``;

export const DescriptionText = styled.Text`
  color: #68717a;
  font-size: 14px;
  margin-bottom: 20px;
  align-self: center;
`;

export const DescriptionInputWrapper = styled.View`
  height: 115px;
  width: 100%;
  padding: 10px 16px;
  background: ${({theme}) => theme.colors.background};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.secondary};
  border-radius: 5px;
`;

export const DescriptionTextInput = styled(TextInput)`
  color: ${({theme}) => theme.colors.text};
`;

export const PasswordWrapper = styled.View`
  margin-top: 60px;
  margin-bottom: 23px;
`;

// radios section

export const RadioWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 60px;
`;

export const RadioText = styled.Text`
  color: #68717a;
  font-size: 10px;
  margin-left: 6px;
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
  font-size: ${({theme}) => theme.fonts.sizes.lg}px;
  color: ${({theme}) => theme.colors.text};
`;
