import React from 'react';
import {useTheme} from 'styled-components';

import {Container, StyledSpinner} from './styles';

export const LoadingScreen: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <StyledSpinner color={theme.colors.secondary} />
    </Container>
  );
};
