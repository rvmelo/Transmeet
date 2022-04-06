import React from 'react';
import {UserTypes} from '../useSignUpForm';

import {
  Title,
  StyledText,
  OptionsWrapper,
  OptionButton,
  OptionButtonText,
} from './styles';

interface HeaderProps {
  userType: UserTypes;
  setUserType: React.Dispatch<React.SetStateAction<UserTypes>>;
}

export const Header: React.FC<HeaderProps> = ({userType, setUserType}) => {
  return (
    <>
      <Title>Criar sua conta</Title>
      <StyledText>Desejo me registrar como:</StyledText>
      <OptionsWrapper>
        <OptionButton
          onPress={() => setUserType('trans')}
          isActive={userType === 'trans'}>
          <OptionButtonText isActive={userType === 'trans'}>
            Trans
          </OptionButtonText>
        </OptionButton>
        <OptionButton
          onPress={() => setUserType('nTrans')}
          isActive={userType === 'nTrans'}>
          <OptionButtonText isActive={userType === 'nTrans'}>
            Não Trans
          </OptionButtonText>
        </OptionButton>
        <OptionButton
          onPress={() => setUserType('empresa')}
          isActive={userType === 'empresa'}>
          <OptionButtonText isActive={userType === 'empresa'}>
            Empresa
          </OptionButtonText>
        </OptionButton>
      </OptionsWrapper>
    </>
  );
};
