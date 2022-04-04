import styled from 'styled-components/native';

interface ContainerProps {
  marginBottom: number;
}

export const Container = styled.View<ContainerProps>`
  height: 40px;
  width: 100%;
  background: ${({theme}) => theme.colors.background};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.secondary};
  border-radius: 5px;
  margin-bottom: ${({marginBottom}) => marginBottom}px;
`;

export const Label = styled.Text`
  background: ${({theme}) => theme.colors.background};
  padding: 5px;
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.fonts.sizes.lg}px;
  position: absolute;
  left: 41px;
  bottom: 25px;
`;
