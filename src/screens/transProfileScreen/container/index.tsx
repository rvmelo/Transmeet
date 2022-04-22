import React from 'react';

import {useModals} from '../useModals';
import {BackButton} from '../../../components/backButton';
import {Menu} from '../../../components/menu';
import {SponsorDeclineButton} from './sponsorButton';
import {SuccessModal, WarningModal} from './modals';
import {User} from '../../../global/types/redux';
import {useRoute} from '@react-navigation/native';

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
  SocialMedia,
  ButtonsSection,
} from './styles';

interface RouteParams {
  id: number;
  transUser: User;
}

export const TransProfileScreen: React.FC = () => {
  const route = useRoute();
  const {transUser, id} = route?.params as RouteParams;

  let socialMedia = transUser.name.replace(' ', '_');

  const {
    successModalVisible,
    setSuccessModalVisible,
    warningModalVisible,
    setWarningModalVisible,
    onConfirmWarning,
    onGoBackWarning,
    onConfirmSuccess,
    onGoBackHome,
    onDecline,
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
          <Name>{transUser.name}</Name>
        </BasicInfo>
        <DetailedInfo>
          <Contact>
            <BoldBodyText>
              Local: <BodyText>{transUser.city}</BodyText>
            </BoldBodyText>
            <BoldBodyText>
              Contato: <BodyText>{transUser.telephone}</BodyText>
            </BoldBodyText>
            <BoldBodyText>
              E-mail: <BodyText>{transUser.email}</BodyText>
            </BoldBodyText>
          </Contact>
          <Gender>
            <BoldBodyText>
              Gênero: <BodyText>{transUser.gender}</BodyText>
            </BoldBodyText>
            <BoldBodyText>
              Deficiência: <BodyText>Não Possui</BodyText>
            </BoldBodyText>
          </Gender>
          <About>
            <BoldBodyText>Sobre:</BoldBodyText>
            <BodyText>{transUser.description}</BodyText>
          </About>
          <SocialMedia>
            <BoldBodyText>Redes Sociais</BoldBodyText>
            <BodyText>linkedin.com/in/{socialMedia}</BodyText>
            <BodyText>instagram.com/{socialMedia}</BodyText>
          </SocialMedia>
        </DetailedInfo>

        <ButtonsSection>
          <SponsorDeclineButton
            title="Dispensar"
            isDecline
            onPress={() => onDecline({matchId: id})}
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
        onConfirm={() => onConfirmWarning({matchId: id})}
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
