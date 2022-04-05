import React from 'react';
import {useSignUpForm} from '../useSignUpForm';
import {Header} from './header';
import {SignUpForm} from './signUpForm';

import {Container, StyledScroll} from './styles';

export const SignUpScreen: React.FC = () => {
  const {userType, setUserType} = useSignUpForm();

  return (
    <Container>
      <StyledScroll>
        <Header userType={userType} setUserType={setUserType} />
        <SignUpForm userType={userType} />
      </StyledScroll>
    </Container>
  );
};
