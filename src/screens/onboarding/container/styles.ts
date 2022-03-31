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
}

// slider button

export const SliderButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<ButtonProps>`
  background: ${({theme, isTransparent}) =>
    !isTransparent ? theme.colors.secondary : 'transparent'};
  padding: 8px 20px;
  border-radius: 20px;
  max-width: 100px;
  max-height: 40px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.lg}px;
  color: ${({theme}) => theme.colors.primary};
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
  border-color: ${({theme}) => theme.colors.secondary};
  margin-bottom: 10px;
`;

export const AccountButtonText = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.lg}px;
  color: ${({theme}) => theme.colors.text};
`;

//  slider

interface ScrollWrapperProps {
  isLastIndex: boolean;
}

export const ScrollWrapper = styled.View<ScrollWrapperProps>`
  margin-top: ${({isLastIndex}) => (isLastIndex ? SCREEN_WIDTH * 0.2 : 0)}px;
`;

export const StyledScroll = styled.ScrollView.attrs({
  horizontal: true,
  pagingEnabled: true,
  showsVerticalScrollIndicator: false,
  scrollEnabled: false,
})``;

export const SliderContent = styled.View`
  align-items: center;
  width: ${SCREEN_WIDTH}px;
`;

export const StyledImage = styled.Image`
  width: ${SCREEN_WIDTH / 1.3}px;
  height: ${SCREEN_WIDTH / 1.3}px;
`;

export const IntroText = styled.Text`
  font-size: ${({theme}) => theme.fonts.sizes.lg}px;
  color: ${({theme}) => theme.colors.text};
  margin-top: 20px;
  background: ${({theme}) => theme.colors.lightGray};
  margin: 20px;
`;
