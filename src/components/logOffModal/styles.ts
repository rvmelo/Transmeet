import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

export const ModalContentWrapper = styled.View`
  padding: ${RFValue(21)}px ${RFValue(12)}px ${RFValue(30)}px;
  align-items: center;
  background: ${({theme}) => theme.colors.background};
`;

export const ModalTitle = styled.Text`
  color: ${({theme}) => theme.colors.textGray};
  font-family: ${({theme}) => theme.fonts.family.semiBold600};
  font-size: ${({theme}) => theme.fonts.headings.h5}px;
`;

export const MessageWrapper = styled.View`
  margin-top: ${RFValue(8)}px;
  margin-bottom: ${RFValue(13)}px;
`;

export const ModalMessage = styled.Text`
  color: ${({theme}) => theme.colors.textGray};
  font-family: ${({theme}) => theme.fonts.family.regular400};
  font-size: ${({theme}) => theme.fonts.bodyText.smallText}px;
  text-align: center;
`;

interface ModalButtonProps {
  color?: string;
}

export const ModalButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<ModalButtonProps>`
  width: ${RFValue(87)}px;
  background: ${({theme, color}) => (color ? color : theme.colors.secondary)};
  border-radius: ${RFValue(24)}px;
  padding: ${RFValue(9)}px 0;
  align-items: center;
  justify-content: center;

  ${({theme, color}) =>
    color &&
    css`
      border-width: 1px;
      border-color: ${theme.colors.textGray};
    `}
`;

export const ModalButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 0 ${RFValue(47)}px;
`;

interface ModalButtonTextProps {
  color?: string;
}

export const ModalButtonText = styled.Text<ModalButtonTextProps>`
  color: ${({theme, color}) => (color ? color : theme.colors.textWhite)};
  font-family: ${({theme}) => theme.fonts.family.bold700};
  font-size: ${({theme}) => theme.fonts.bodyText.mediumBase}px;
`;
