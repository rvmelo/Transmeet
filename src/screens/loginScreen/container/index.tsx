import React from 'react';

//  components
import {FormInput} from '../../../components/formInput';
import {AccountButton} from './accountButton';

//  hooks
import {useLoginScreen} from '../useLoginScreen';

import {
  BottomText,
  Container,
  ForgotPasswordText,
  HighlightedText,
  IntroText,
  TouchableInterface,
  AltAuthView,
  IconInterface,
} from './styles';

import {FacebookIcon} from '../../../../assets/svg/facebookIcon';
import {GoogleIcon} from '../../../../assets/svg/googleIcon';
import {AppleIcon} from '../../../../assets/svg/appleIcon';

export const LoginScreen: React.FC = () => {
  const introText =
    'Bem vindo ao aplicativo Transmeet!! Aqui é possível encontrar diversos tipos de cursos';

  const {onSignUpNavigation} = useLoginScreen();

  return (
    <Container>
      <IntroText>{introText}</IntroText>
      <FormInput label="E-mail" marginBottom={25} autoComplete="email" />
      <FormInput label="Senha" secureTextEntry marginBottom={15} />
      <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
      <AccountButton title="Fazer Login" onPress={() => undefined} />
      <BottomText>
        Ainda não tem uma conta?
        <TouchableInterface onPress={onSignUpNavigation}>
          <HighlightedText> Cadaste-se aqui</HighlightedText>
        </TouchableInterface>
      </BottomText>
      <BottomText>ou entre usando</BottomText>

      <AltAuthView>
        <IconInterface>
          <FacebookIcon width={45} height={45} />
        </IconInterface>
        <IconInterface>
          <GoogleIcon width={45} height={45} />
        </IconInterface>
        <IconInterface>
          <AppleIcon width={45} height={45} />
        </IconInterface>
      </AltAuthView>
    </Container>
  );
};
