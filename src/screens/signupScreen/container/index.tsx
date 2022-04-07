import React from 'react';
import {useSignUp} from '../useSignUp';
import {Header} from './header';
import {SignUpForm} from './signUpForm';

import {useTheme} from 'styled-components';

import {
  Container,
  SpinnerContainer,
  StyledScroll,
  StyledSpinner,
} from './styles';
import {ErrorModal} from './errorModal';
import {useModal} from '../useModal';

export const SignUpScreen: React.FC = () => {
  const {modalVisible, setModalVisible} = useModal();

  const {userType, setUserType, onUserSignUp, isLoading, user, setUser} =
    useSignUp({setModalVisible});

  const theme = useTheme();

  return isLoading ? (
    <SpinnerContainer>
      <StyledSpinner color={theme.colors.secondary} />
    </SpinnerContainer>
  ) : (
    <>
      <Container>
        <StyledScroll>
          <Header userType={userType} setUserType={setUserType} />
          <SignUpForm
            user={user}
            setUser={setUser}
            userType={userType}
            onUserSignUp={onUserSignUp}
          />
        </StyledScroll>
      </Container>
      <ErrorModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};
