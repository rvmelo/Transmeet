import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {SCREEN_WIDTH} from '../../../constants/dimensions';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
})`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
`;

export const TopWrapper = styled.View`
  position: absolute;
  align-self: flex-end;
  padding: ${RFValue(30)}px ${RFValue(30)}px;
  z-index: 1;
`;

export const BottomWrapper = styled.View`
  padding: 0px 30px 30px;
  justify-content: space-around;
`;

interface ButtonProps {
  isTransparent: boolean;
  outLine: boolean;
}

// slider button

export const SliderButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<ButtonProps>`
  background: ${({theme, isTransparent, outLine}) =>
    !isTransparent && !outLine ? theme.colors.primary : 'transparent'};
  border: ${({outLine}) => (!outLine ? '0px' : '1px')};
  border-color: ${({theme, outLine}) =>
    outLine ? theme.colors.textGray : 'transparent'}; }
  border-radius: 20px;
  max-width: 100px;
  max-height: 40px;
  align-items: center;
  justify-content: center;
`;

interface TextProps {
  outLine: boolean;
}

export const ButtonText = styled.Text<TextProps>`
  font-size: ${({theme}) => theme.fonts.sizes.lg}px;
  color: ${({theme, outLine}) =>
    !outLine ? theme.colors.textWhite : theme.colors.textGray}
  font-family: ${({theme}) => theme.fonts.family.bold700};
  padding: 10px 20px;
`;

// account button

export const AccountButtonWrapper = styled.View`
  padding-bottom: ${RFValue(20)}px;
`;

interface AccountButtonProps {
  isTransparent: boolean;
}

export const StyledAccountButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<AccountButtonProps>`
  background: ${({theme, isTransparent}) =>
    !isTransparent ? theme.colors.secondary : 'transparent'};
  border-radius: 20px;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({theme, isTransparent}) =>
    !isTransparent ? theme.colors.secondary : theme.colors.textGray};
  margin-bottom: 10px;
`;

export const AccountButtonText = styled.Text<AccountButtonProps>`
  font-size: ${({theme}) => theme.fonts.sizes.lg}px;
  color: ${({theme, isTransparent}) =>
    !isTransparent ? theme.colors.textWhite : theme.colors.textGray};
  font-family: ${({theme}) => theme.fonts.family.bold700};
`;

//  slider
interface ScrollWrapperProps {
  isLastIndex: boolean;
}

export const ScrollWrapper = styled.View<ScrollWrapperProps>`
  max-width: ${SCREEN_WIDTH}px;
  max-height: ${SCREEN_WIDTH}px;
  margin-bottom: ${RFValue(15)}px;
`;

export const StyledScroll = styled.ScrollView.attrs({
  horizontal: true,
  pagingEnabled: true,
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
  scrollEnabled: false,
})``;

export const SliderContent = styled.View`
  align-items: center;
  width: ${SCREEN_WIDTH}px;
`;

export const StyledImage = styled.Image`
  max-width: ${SCREEN_WIDTH}px;
  max-height: ${SCREEN_WIDTH}px;
`;

export const IntroText = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.lg}px;
  color: ${({theme}) => theme.colors.textGray};
  text-align: center;
  line-height: 25px;
  margin: ${RFValue(20)}px;
`;

export const TitleText = styled.Text`
  font-family: ${({theme}) => theme.fonts.family.semiBold600};
  font-size: ${({theme}) => theme.fonts.sizes.xl}px;
  color: ${({theme}) => theme.colors.textGray};
  text-align: center;
`;

//  scroll indicator

export const ScrollIndicatorWrapper = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(20)}px;
  align-self: center;
`;

interface ScrollDotProps {
  isActive: boolean;
}

export const ScrollDot = styled.View<ScrollDotProps>`
  width: 10px;
  height: 10px;
  margin: 0 12px;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${({theme}) => theme.colors.secondary};
  background: ${({theme, isActive}) =>
    isActive ? theme.colors.secondary : 'transparent'};
`;
