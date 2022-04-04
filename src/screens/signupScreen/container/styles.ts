import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
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

export const SubTitle = styled.Text`
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

export const OptionButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background: ${({theme}) => theme.colors.secondary};
  border-radius: 24px;
  padding: 8px 14px;
  border-color: ${({theme}) => theme.colors.secondary};
`;

export const OptionButtonText = styled.Text`
  font-size: 12px;
  color: white;
`;

export const StyledText = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.fonts.sizes.xl}px;
`;

// sign up from

export const SignUpWrapper = styled.View`
  margin-top: 48px;
`;

export const PhoneWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;
