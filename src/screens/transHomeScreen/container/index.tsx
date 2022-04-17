import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {MenuIcon} from '../../../../assets/svg/menuIcon';
import {List} from '../../../components/list';
import {useAppSelector} from '../../../redux/hooks';
import {useHome} from '../useHome';

import {SearchInput} from './searchInput';

import {
  Greetings,
  HeaderContainer,
  MenuIconContainer,
  Container,
  StyledText,
  UserInfoContainer,
  UserName,
} from './styles';

export const TransHomeScreen: React.FC = () => {
  const {user} = useAppSelector(store => store.userReducer);

  const {searchValue, setSearchValue, onCompanySearch, sponsorList} = useHome();

  return (
    <Container>
      <HeaderContainer>
        <MenuIconContainer>
          <MenuIcon height={RFValue(24)} width={RFValue(24)} />
        </MenuIconContainer>
        <UserInfoContainer>
          <Greetings>Boas vindas</Greetings>
          <UserName>{user?.name?.split(' ')[0]}!</UserName>
        </UserInfoContainer>
        <StyledText>Faça sua busca por uma parceria</StyledText>
        <SearchInput
          onChangeText={value => setSearchValue(value)}
          value={searchValue}
          onSubmitEditing={onCompanySearch}
        />
      </HeaderContainer>
      <List data={sponsorList} />
    </Container>
  );
};
