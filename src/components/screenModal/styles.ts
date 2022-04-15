import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

export const ModalBackground = styled.View`
  flex: 1;
  background: rgba(21, 37, 54, 0.7);
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.View`
  max-width: ${RFValue(334)}px;
  border-radius: ${RFValue(15)}px;
  overflow: hidden;
`;

interface ModalTopProps {
  type: 'error' | 'warning' | 'success' | 'info';
}

export const ModalTop = styled.View<ModalTopProps>`
  background: ${({theme}) => theme.colors.error};

  ${({theme, type}) => {
    if (type === 'success') {
      return css`
        background: ${theme.colors.success};
      `;
    }

    if (type === 'info') {
      return css`
        background: ${theme.colors.info};
      `;
    }

    return css`
      background: ${type === 'error'
        ? theme.colors.error
        : theme.colors.warning};
    `;
  }};

  padding: 30px 122px;
  align-items: center;
`;

export const ModalBottom = styled.View`
  background: ${({theme}) => theme.colors.gray};
  align-items: center;
  padding: 0 60px;
`;

export const ModalTitle = styled.Text`
  margin-top: 26px;
  font-size: ${({theme}) => theme.fonts.headings.h5}px;
  font-family: ${({theme}) => theme.fonts.family.semiBold600};
  color: ${({theme}) => theme.colors.textGray};
`;

export const ModalMessage = styled.Text`
  margin-top: 7px;
  font-size: ${({theme}) => theme.fonts.headings.h6}px;
  font-family: ${({theme}) => theme.fonts.family.bold700};
  color: ${({theme}) => theme.colors.textGray};
`;
