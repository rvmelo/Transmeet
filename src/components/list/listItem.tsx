import React from 'react';

import {
  DetailText,
  ImageContainer,
  InfoContainer,
  ItemContainer,
  ItemImage,
  ItemName,
  LeftContent,
  SideBar,
} from './styles';

interface ListItemProps {
  itemName: string;
}

export const ListItem: React.FC<ListItemProps> = ({itemName}) => {
  return (
    <ItemContainer>
      <LeftContent>
        <SideBar />
        <InfoContainer>
          <ItemName>{itemName}</ItemName>
          <DetailText>+ Detalhes</DetailText>
        </InfoContainer>
      </LeftContent>
      <ImageContainer>
        <ItemImage source={require('../../../assets/png/ioasys.png')} />
      </ImageContainer>
    </ItemContainer>
  );
};
