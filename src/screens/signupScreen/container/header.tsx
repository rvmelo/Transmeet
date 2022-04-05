import React from 'react';

import {
  Title,
  StyledText,
  OptionsWrapper,
  OptionButton,
  OptionButtonText,
} from './styles';

export const Header: React.FC = () => {
  return (
    <>
      <Title>Criar sua conta</Title>
      <StyledText>Desejo me registrar como:</StyledText>
      <OptionsWrapper>
        <OptionButton>
          <OptionButtonText>Trans</OptionButtonText>
        </OptionButton>
        <OptionButton>
          <OptionButtonText>Não Trans</OptionButtonText>
        </OptionButton>
        <OptionButton>
          <OptionButtonText>Empresa</OptionButtonText>
        </OptionButton>
      </OptionsWrapper>
    </>
  );
};
