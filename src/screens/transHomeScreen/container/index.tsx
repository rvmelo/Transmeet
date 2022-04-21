import React from 'react';
import {List} from '../../../components/list';
import {LogOffModal} from '../../../components/logOffModal';
import {Menu} from '../../../components/menu';
import {useAppSelector} from '../../../redux/hooks';
import {useHome} from '../useHome';
import {useModal} from '../useMOdal';

import {SearchInput} from './searchInput';

import {
  Greetings,
  HeaderContainer,
  Container,
  StyledText,
  UserInfoContainer,
  UserName,
} from './styles';

export const TransHomeScreen: React.FC = () => {
  const {user} = useAppSelector(store => store.userReducer);

  const {
    searchValue,
    setSearchValue,
    onCompanySearch,
    sponsorList,
    renderSponsor,
  } = useHome();

  const {modalVisible, setModalVisible} = useModal();

  return (
    <>
      <Container>
        <HeaderContainer>
          <Menu
            onPress={() => setModalVisible(true)}
            isAbsolutePosition
            right={30}
            top={50}
          />
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
        <List data={sponsorList} renderItem={renderSponsor} />
      </Container>
      <LogOffModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};
