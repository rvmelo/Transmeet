import React, {useEffect} from 'react';
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
import {useModal} from '../useModal';
import {InfoModal, SignUpModal} from './modals';

export const SignUpScreen: React.FC = () => {
  const {
    signUpModalVisible,
    setSignUpModalVisible,
    infoModalVisible,
    setInfoModalVisible,
  } = useModal();

  const {
    userType,
    setUserType,
    onUserSignUp,
    isLoading,
    user,
    setUser,
    isError,
  } = useSignUp({setModalVisible: setSignUpModalVisible});

  const theme = useTheme();

  useEffect(() => {
    if (userType === 'nTrans') {
      setInfoModalVisible(true);
    }
  }, [userType, setInfoModalVisible]);

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
      <SignUpModal
        signUpModalVisible={signUpModalVisible}
        setSignUpModalVisible={setSignUpModalVisible}
        isError={isError}
      />

      <InfoModal
        infoModalVisible={infoModalVisible}
        setInfoModalVisible={setInfoModalVisible}
      />
    </>
  );
};
