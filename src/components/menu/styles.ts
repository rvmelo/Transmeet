import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

interface MenuIconContainerProps {
  isAbsolutePosition: boolean;
  right: number;
  top: number;
}

export const MenuIconContainer = styled.View<MenuIconContainerProps>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.secondary};

  ${({isAbsolutePosition, right, top}) =>
    isAbsolutePosition &&
    css`
      position: absolute;
      right: ${RFValue(right)}px;
      top: ${RFValue(top)}px;
    `}
`;
