import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: ${RFValue(40)}px ${RFValue(40)}px 0 ${RFValue(40)}px;
`;

export const TouchableInterface = styled.TouchableWithoutFeedback``;

export const ItemContainer = styled.View`
  height: 109px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${RFValue(18)}px;
  border-radius: 12px;
  background: ${({theme}) => theme.colors.textBlack};
  margin-bottom: 20px;
`;

export const SideBar = styled.View`
  width: 14px;
  height: 77px;
  border-radius: 10px;
  background: ${({theme}) => theme.colors.textWhite};
`;

export const InfoContainer = styled.View`
  margin-left: ${RFValue(16)}px;
  max-width: ${RFValue(140)}px;
`;

export const ItemName = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  color: ${({theme}) => theme.colors.textWhite};
  font-family: ${({theme}) => theme.fonts.family.semiBold600};
  font-size: ${({theme}) => theme.fonts.bodyText.smallSemiBold}px;
`;

export const DetailText = styled.Text`
  color: ${({theme}) => theme.colors.secondaryLighter};
  font-family: ${({theme}) => theme.fonts.family.bold700};
  font-size: ${({theme}) => theme.fonts.bodyText.mediumUltraSmall}px;
`;

export const LeftContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageContainer = styled.View`
  width: ${RFValue(80)}px;
  height: ${RFValue(80)}px;
  border-radius: 40px;
`;

export const ItemImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 100%;
  width: 100%;
`;
