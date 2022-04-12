import React from 'react';

import {SearchInput} from './searchInput';

import {
  Greetings,
  HeaderContainer,
  ListContainer,
  StyledLinearGradient,
  StyledText,
  UserInfoContainer,
  UserName,
} from './styles';

export const TransHomeScreen: React.FC = () => {
  return (
    <StyledLinearGradient>
      <HeaderContainer>
        <UserInfoContainer>
          <Greetings>Boas vindas</Greetings>
          <UserName>Paloma!</UserName>
        </UserInfoContainer>
        <StyledText>Faça sua busca por uma parceria</StyledText>
        <SearchInput />
      </HeaderContainer>
      <ListContainer />
    </StyledLinearGradient>
  );
};
