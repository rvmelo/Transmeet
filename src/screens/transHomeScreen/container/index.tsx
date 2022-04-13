import React from 'react';
import {List} from '../../../components/list';
import {useAppSelector} from '../../../redux/hooks';
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
  const {user} = useAppSelector(store => store.userReducer);

  return (
    <StyledLinearGradient>
      <HeaderContainer>
        <UserInfoContainer>
          <Greetings>Boas vindas</Greetings>
          <UserName>{user?.name?.split(' ')[0]}!</UserName>
        </UserInfoContainer>
        <StyledText>Faça sua busca por uma parceria</StyledText>
        <SearchInput />
      </HeaderContainer>
      <List data={data} />
    </StyledLinearGradient>
  );
};
