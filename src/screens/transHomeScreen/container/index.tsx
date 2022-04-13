import React from 'react';
import {List} from '../../../components/list';
import {data} from './data';

import {SearchInput} from './searchInput';

import {
  Greetings,
  HeaderContainer,
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
      <List data={data} />
    </StyledLinearGradient>
  );
};
