import React from 'react';

//  components
import {FormInput} from '../../../components/formInput';
import {AccountButton} from './accountButton';

//  hooks
import {useLoginScreen} from '../useLoginScreen';
import {useTheme} from 'styled-components';

import {
  BottomText,
  AltBottomText,
  LoginContainer,
  ForgotPasswordText,
  HighlightedText,
  IntroText,
  TouchableInterface,
  AltAuthView,
  IconInterface,
  LogoContainer,
  Container,
  AltLine,
} from './styles';

//  icons
import {FacebookIcon} from '../../../../assets/svg/facebookIcon';
import {GoogleIcon} from '../../../../assets/svg/googleIcon';
import {AppleIcon} from '../../../../assets/svg/appleIcon';
import {Logo} from '../../../../assets/svg/logo';
import {Gradient} from '../../../../assets/svg/gradient';
import {MailIcon} from '../../../../assets/svg/mailIcon';
import {LockIcon} from '../../../../assets/svg/lockIcon';
import {EyeOffIcon} from '../../../../assets/svg/eyeOffIcon';
import {LoadingScreen} from './loadingScreen';
import {ErrorModal} from './modals';

export const LoginScreen: React.FC = () => {
  const introText =
    'Faça seu login e aproveite as \n oportunidades que estão a sua espera!';

  const {
    onSignUpNavigation,
    onUserLogin,
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    modalVisible,
    setModalVisible,
  } = useLoginScreen();

  const theme = useTheme();

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <>
      <Container>
        <LogoContainer>
          <Gradient width={330} height={500} />
          <Logo width={161} height={120} />
          <IntroText>{introText}</IntroText>
        </LogoContainer>

        <LoginContainer>
          <FormInput
            placeholder="Digite seu email"
            autoCapitalize="none"
            label="E-mail"
            value={email}
            onChangeText={value => setEmail(value)}
            marginBottom={25}
            autoComplete="email"
            leftIcon={
              <MailIcon height={24} width={24} color={theme.colors.textGray} />
            }
          />
          <FormInput
            placeholder="Digite sua senha"
            label="Senha"
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry
            marginBottom={15}
            leftIcon={<LockIcon height={24} width={24} />}
            rightIcon={<EyeOffIcon height={24} width={24} />}
            onSubmitEditing={onUserLogin}
          />
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          <AccountButton title="Fazer Login" onPress={onUserLogin} />
          <BottomText>
            Ainda não tem uma conta?
            <TouchableInterface onPress={onSignUpNavigation}>
              <HighlightedText> Cadastre-se aqui</HighlightedText>
            </TouchableInterface>
          </BottomText>

          <AltBottomText>
            <AltLine />
            <BottomText>ou entre usando</BottomText>
          </AltBottomText>

          <AltAuthView>
            <IconInterface onPress={() => undefined}>
              <FacebookIcon width={45} height={45} />
            </IconInterface>
            <IconInterface onPress={() => undefined}>
              <GoogleIcon width={51} height={53} />
            </IconInterface>
            <IconInterface onPress={() => undefined}>
              <AppleIcon width={45} height={45} />
            </IconInterface>
          </AltAuthView>
        </LoginContainer>
      </Container>
      <ErrorModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};
