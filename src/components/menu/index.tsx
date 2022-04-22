import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {MenuIcon} from '../../../assets/svg/menuIcon';

import {MenuIconContainer, TouchableInterface} from './styles';

interface MenuProps {
  isAbsolutePosition?: boolean;
  right?: number;
  top?: number;
  onPress: () => void;
}

export const Menu: React.FC<MenuProps> = ({
  isAbsolutePosition = false,
  right = 0,
  top = 0,
  onPress,
}) => {
  return (
    <TouchableInterface onPress={onPress}>
      <MenuIconContainer
        isAbsolutePosition={isAbsolutePosition}
        right={right}
        top={top}>
        <MenuIcon height={RFValue(24)} width={RFValue(24)} />
      </MenuIconContainer>
    </TouchableInterface>
  );
};
