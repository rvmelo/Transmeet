import React from 'react';
import {Header} from './header';

import {Container, StyledScroll} from './styles';

export const SignUpScreen: React.FC = () => {
  return (
    <Container>
      <StyledScroll>
        <Header />
      </StyledScroll>
    </Container>
  );
};
