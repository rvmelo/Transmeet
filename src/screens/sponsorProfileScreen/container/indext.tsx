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
import {useNavigation} from '@react-navigation/native';

//  redux
import {User} from '../../../global/types/redux';

import {description} from './data';
import {Menu} from '../../../components/menu';
import {BackButton} from './backButton';

interface RouteParams {
  user: User;
}

export const SponsorProfileScreen: React.FC = () => {
  const route = useRoute();

  const {user} = route?.params as RouteParams;

  const navigation = useNavigation();

  return (
    <Container>
      <HeaderContainer>
        <HeaderContent>
          <TopHeaderContainer>
            <BackButton onPress={() => navigation.goBack()} />
            <Menu isAbsolutePosition={false} />
          </TopHeaderContainer>
          <CompanyName>{user?.name}</CompanyName>
        </HeaderContent>
        <WhiteBar />
      </HeaderContainer>
      <ContentWrapper>
        <Title>Empresa</Title>
        <Description>{description}</Description>
        <SiteFieldText>Site da empresa:</SiteFieldText>
        <Site>{user?.site}</Site>
        <SponsorButton>
          <SponsorButtonText>Tentar Patrocínio</SponsorButtonText>
        </SponsorButton>
      </ContentWrapper>
    </Container>
  );
};
