import styled from 'styled-components/native';
import {SCREEN_WIDTH} from '../../../constants/dimensions';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.secondary};
`;

export const TopWrapper = styled.View`
  flex: 1;
  background: yellow;
  justify-content: center;
  align-items: flex-end;
  padding-right: 20px;
`;

export const BottomWrapper = styled.View`
  flex: 1;
  background: green;
  flex-direction: row;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
`;

export const StyledButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background: ${({theme}) => theme.colors.secondary};
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

//  slider

export const ScrollWrapper = styled.View``;

export const StyledScroll = styled.ScrollView.attrs({
  horizontal: true,
  pagingEnabled: true,
  showsVerticalScrollIndicator: false,
})``;

export const SliderContent = styled.View`
  background: blue;
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
