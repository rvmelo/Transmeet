import styled from 'styled-components/native';
import {SCREEN_WIDTH} from '../../../constants/dimensions';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
`;

export const TopWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  padding-right: 20px;
`;

export const BottomWrapper = styled.View`
  flex: 1;
  padding: 0 30px;
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
  padding: 8px 20px;
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
`;

// account button

export const AccountButtonWrapper = styled.View``;

export const StyledAccountButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<ButtonProps>`
  background: ${({theme, isTransparent}) =>
    !isTransparent ? theme.colors.secondary : 'transparent'};
  border-radius: 20px;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.textGray};
  margin-bottom: 10px;
`;

export const AccountButtonText = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.lg}px;
  color: ${({theme}) => theme.colors.textGray};
  font-family: ${({theme}) => theme.fonts.family.bold700};
`;

//  slider
interface ScrollWrapperProps {
  isLastIndex: boolean;
}

export const ScrollWrapper = styled.View<ScrollWrapperProps>`
  margin-top: ${({isLastIndex}) => (isLastIndex ? SCREEN_WIDTH * 0.13 : 0)}px;
  align-items: center;
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
  width: ${SCREEN_WIDTH / 2}px;
  height: ${SCREEN_WIDTH / 2}px;
`;

export const IntroText = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.lg}px;
  color: ${({theme}) => theme.colors.text};
  margin-top: 20px;
  background: ${({theme}) => theme.colors.lightGray};
  margin: 20px;
`;

//  scroll indicator

export const ScrollIndicatorWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

interface ScrollDotProps {
  isActive: boolean;
}

export const ScrollDot = styled.View<ScrollDotProps>`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${({theme}) => theme.colors.mediumGray};
  background: ${({theme, isActive}) =>
    isActive ? theme.colors.mediumGray : 'transparent'};
`;
