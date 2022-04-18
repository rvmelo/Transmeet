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

import {ArrowLeftIcon} from '../../../../assets/svg/arrowLeft';

import {description} from './data';
import {Menu} from '../../../components/menu';

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
              <BackButtonText>voltar</BackButtonText>
            </BackButtonWrapper>
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
