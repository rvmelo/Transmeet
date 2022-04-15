import React from 'react';

//  components
import {FormInput} from '../../../components/formInput';
import {AccountButton} from './accountButton';

//  hooks
import {useLoginScreen} from '../useLoginScreen';

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

import {FacebookIcon} from '../../../../assets/svg/facebookIcon';
import {GoogleIcon} from '../../../../assets/svg/googleIcon';
import {AppleIcon} from '../../../../assets/svg/appleIcon';
import {Logo} from '../../../../assets/svg/logo';
import {Gradient} from '../../../../assets/svg/gradient';

export const LoginScreen: React.FC = () => {
  const introText =
    'Faça seu login e aproveite as \n oportunidades que estão a sua espera!';

  const {onSignUpNavigation} = useLoginScreen();

  return (
    <Container>
      <LogoContainer>
        <Gradient width={330} height={500} />
        <Logo width={161} height={120} />
        <IntroText>{introText}</IntroText>
      </LogoContainer>

      <LoginContainer>
        <FormInput
          placeholder="Digite seu email"
          label="E-mail"
          marginBottom={25}
          autoComplete="email"
        />
        <FormInput
          placeholder="Digite sua senha"
          label="Senha"
          secureTextEntry
          marginBottom={15}
        />
        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        <AccountButton title="Fazer Login" onPress={() => undefined} />
        <BottomText>
          Ainda não tem uma conta?
          <TouchableInterface onPress={onSignUpNavigation}>
            <HighlightedText> Cadaste-se aqui</HighlightedText>
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
  );
};
