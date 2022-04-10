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
import {useModal} from '../useModal';
import {ScreenModal} from '../../../components/screenModal';
import {ModalContent} from './modalContent';

export const SignUpScreen: React.FC = () => {
  const {modalVisible, setModalVisible} = useModal();

  const {
    userType,
    setUserType,
    onUserSignUp,
    isLoading,
    user,
    setUser,
    isError,
  } = useSignUp({setModalVisible});

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
      <ScreenModal
        type={isError ? 'error' : 'success'}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}>
        <ModalContent
          type={isError ? 'error' : 'success'}
          setModalVisible={setModalVisible}
        />
      </ScreenModal>
    </>
  );
};
