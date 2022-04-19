import styled from 'styled-components/native';

export const BackButtonInterface = styled.TouchableWithoutFeedback``;

export const BackButtonWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BackButtonText = styled.Text`
  margin-left: 10px;

  color: ${({theme}) => theme.colors.textWhite};
  font-family: ${({theme}) => theme.fonts.family.bold700};
  font-size: ${({theme}) => theme.fonts.headings.h5}px;
`;
