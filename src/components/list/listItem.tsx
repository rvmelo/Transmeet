import React from 'react';
import {useTheme} from 'styled-components';

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
  status?: 'success' | 'error' | 'warning' | 'background';
}

export const ListItem: React.FC<ListItemProps> = ({
  itemName,
  onPress,
  status = 'background',
}) => {
  const theme = useTheme();

  const statusColor = {
    success: theme.colors.success,
    warning: theme.colors.warning,
    error: theme.colors.error,
    background: theme.colors.background,
  };

  return (
    <TouchableInterface onPress={onPress}>
      <ItemContainer>
        <LeftContent>
          <SideBar color={statusColor[status]} />
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
