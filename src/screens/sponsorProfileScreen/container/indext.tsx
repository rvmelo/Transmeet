import React from 'react';

import {
  CompanyName,
  Container,
  ContentWrapper,
  Description,
  HeaderContainer,
  HeaderContent,
  Site,
  SiteFieldText,
  SponsorButton,
  SponsorButtonText,
  Title,
  TopHeaderContainer,
  WhiteBar,
} from './styles';

// navigation
import {useRoute} from '@react-navigation/native';

//  redux
import {User} from '../../../global/types/redux';
import {useAppSelector} from '../../../redux/hooks';

import {description} from './data';
import {Menu} from '../../../components/menu';
import {SuccessModal, WarningModal} from './modals';
import {useModals} from '../useModals';
import {BackButton} from '../../../components/backButton';

interface RouteParams {
  sponsor: User;
}

export const SponsorProfileScreen: React.FC = () => {
  const route = useRoute();

  const {sponsor} = route?.params as RouteParams;
  const {user} = useAppSelector(store => store.userReducer);

  const {
    successModalVisible,
    setSuccessModalVisible,
    warningModalVisible,
    setWarningModalVisible,
    onConfirm,
    onGoBackHome,
  } = useModals();

  return (
    <>
      <Container>
        <HeaderContainer>
          <HeaderContent>
            <TopHeaderContainer>
              <BackButton />
              <Menu isAbsolutePosition={false} />
            </TopHeaderContainer>
            <CompanyName>{sponsor?.name}</CompanyName>
          </HeaderContent>
          <WhiteBar />
        </HeaderContainer>
        <ContentWrapper>
          <Title>Empresa</Title>
          <Description>{description}</Description>
          <SiteFieldText>Site da empresa:</SiteFieldText>
          <Site>{sponsor?.site}</Site>
          <SponsorButton onPress={() => setWarningModalVisible(true)}>
            <SponsorButtonText>Tentar Patrocínio</SponsorButtonText>
          </SponsorButton>
        </ContentWrapper>
      </Container>
      <SuccessModal
        modalVisible={successModalVisible}
        setModalVisible={setSuccessModalVisible}
        onGoBack={onGoBackHome}
      />
      <WarningModal
        modalVisible={warningModalVisible}
        setModalVisible={setWarningModalVisible}
        onGoBack={() => setWarningModalVisible(false)}
        onConfirm={() => onConfirm({idSponsor: sponsor?.id, idUser: user?.id})}
      />
    </>
  );
};
