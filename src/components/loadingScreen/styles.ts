import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.colors.background};
`;

export const StyledSpinner = styled.ActivityIndicator.attrs({
  size: 'large',
})``;
