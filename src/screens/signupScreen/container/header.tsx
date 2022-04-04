import React from 'react';

import {
  Title,
  SubTitle,
  OptionsWrapper,
  OptionButton,
  OptionButtonText,
} from './styles';

export const Header: React.FC = () => {
  return (
    <>
      <Title>Criar sua conta</Title>
      <SubTitle>Desejo me registrar como:</SubTitle>
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
