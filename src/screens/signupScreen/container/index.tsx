import React from 'react';
import {Header} from './header';
import {SignUpForm} from './signUpForm';

import {Container, StyledScroll} from './styles';

export const SignUpScreen: React.FC = () => {
  return (
    <Container>
      <StyledScroll>
        <Header />
        <SignUpForm />
      </StyledScroll>
    </Container>
  );
};
