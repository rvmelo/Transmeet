import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.fonts.sizes.xl}px;
`;
