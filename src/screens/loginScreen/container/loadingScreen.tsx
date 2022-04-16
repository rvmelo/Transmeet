import React from 'react';
import {useTheme} from 'styled-components';

import {LoadingContainer, StyledSpinner} from './styles';

export const LoadingScreen: React.FC = () => {
  const theme = useTheme();

  return (
    <LoadingContainer>
      <StyledSpinner color={theme.colors.secondary} />
    </LoadingContainer>
  );
};
