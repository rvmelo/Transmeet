import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 40px 40px 0 40px;
`;

export const ItemContainer = styled.View`
  height: 109px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
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
  margin-left: 16px;
  max-width: 90px;
`;

export const ItemName = styled.Text.attrs({
  numberOfLines: 2,
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
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const ItemImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 100%;
  width: 100%;
`;
