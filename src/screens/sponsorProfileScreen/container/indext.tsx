import React from 'react';

import {
  BackButtonText,
  BackButtonWrapper,
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

//  icons
import {MenuIcon} from '../../../../assets/svg/menuIcon';
import {description} from './data';
import {ArrowLeftIcon} from '../../../../assets/svg/arrowLeft';

interface RouteParams {
  user: User;
}

export const SponsorProfileScreen: React.FC = () => {
  const route = useRoute();

  const {user} = route?.params as RouteParams;

  return (
    <Container>
      <HeaderContainer>
        <HeaderContent>
          <TopHeaderContainer>
            <BackButtonWrapper>
              <ArrowLeftIcon width={8} height={16} />
              <BackButtonText>Voltar</BackButtonText>
            </BackButtonWrapper>
            <MenuIcon height={24} width={24} />
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
