import React from 'react';

import {useModals} from '../useModals';
import {BackButton} from '../../../components/backButton';
import {Menu} from '../../../components/menu';
import {SponsorDeclineButton} from './sponsorButton';
import {SuccessModal, WarningModal} from './modals';

import {
  Container,
  BoldBodyText,
  BodyText,
  HeaderContainer,
  HeaderContent,
  TopHeaderContainer,
  Title,
  ContentWrapper,
  BasicInfo,
  Image,
  Name,
  DetailedInfo,
  Contact,
  Gender,
  About,
  Education,
  SocialMedia,
  ButtonsSection,
} from './styles';

export const TransProfileScreen: React.FC = () => {
  const {
    successModalVisible,
    setSuccessModalVisible,
    warningModalVisible,
    setWarningModalVisible,
    onConfirmWarning,
    onGoBackWarning,
    onConfirmSuccess,
    onGoBackHome,
  } = useModals();

  return (
    <Container>
      <HeaderContainer>
        <HeaderContent>
          <TopHeaderContainer>
            <BackButton />
            <Menu />
          </TopHeaderContainer>
          <Title>Candidato</Title>
        </HeaderContent>
      </HeaderContainer>
      <ContentWrapper>
        <BasicInfo>
          <Image source={require('../../../../assets/png/ioasys.png')} />
          <Name>Ioasys</Name>
        </BasicInfo>
        <DetailedInfo>
          <Contact>
            <BoldBodyText>
              Local: <BodyText>São Paulo</BodyText>
            </BoldBodyText>
            <BoldBodyText>
              Contato: <BodyText>(12) 9.1234-5678</BodyText>
            </BoldBodyText>
            <BoldBodyText>
              E-mail: <BodyText>paloma@mail.com.br</BodyText>
            </BoldBodyText>
          </Contact>
          <Gender>
            <BoldBodyText>
              Gênero: <BodyText>Mulher Trans / Preta</BodyText>
            </BoldBodyText>
            <BoldBodyText>
              Deficiência: <BodyText>Não Possui</BodyText>
            </BoldBodyText>
          </Gender>
          <About>
            <BoldBodyText>Sobre:</BoldBodyText>
            <BodyText>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</BodyText>
          </About>
          <Education>
            <BoldBodyText>Escolaridade</BoldBodyText>
            <BodyText>Lorem Ipsum</BodyText>
          </Education>
          <SocialMedia>
            <BoldBodyText>Redes Sociais</BoldBodyText>
            <BodyText>linkedin.com/in/palomabernardi</BodyText>
            <BodyText>instagram.com/palomabernardi</BodyText>
          </SocialMedia>
        </DetailedInfo>

        <ButtonsSection>
          <SponsorDeclineButton
            title="Dispensar"
            isDecline
            onPress={onGoBackHome}
          />
          <SponsorDeclineButton
            title="Combinar"
            onPress={() => setWarningModalVisible(true)}
          />
        </ButtonsSection>
      </ContentWrapper>
      <WarningModal
        modalVisible={warningModalVisible}
        setModalVisible={setWarningModalVisible}
        onGoBack={onGoBackWarning}
        onConfirm={onConfirmWarning}
      />
      <SuccessModal
        modalVisible={successModalVisible}
        setModalVisible={setSuccessModalVisible}
        onGoBack={onGoBackHome}
        onConfirm={onConfirmSuccess}
      />
    </Container>
  );
};
