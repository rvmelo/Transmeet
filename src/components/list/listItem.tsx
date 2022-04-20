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
  TouchableInterface,
} from './styles';

interface ListItemProps {
  itemName: string;
  onPress: () => void;
}

export const ListItem: React.FC<ListItemProps> = ({itemName, onPress}) => {
  return (
    <TouchableInterface onPress={onPress}>
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
    </TouchableInterface>
  );
};
