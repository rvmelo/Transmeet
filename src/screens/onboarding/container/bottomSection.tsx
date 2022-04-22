import React from 'react';
import {AccountButton} from './accountButton';
import {SliderButton} from './sliderButton';

//  navigation
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RegisterStackParamList} from '../../../routes/types';

import {
  AccountButtonWrapper,
  BottomWrapper,
  SliderButtonWrapper,
} from './styles';
import {ScrollIndicator} from './scrollIndicator';

interface BottomSectionProps {
  onScrollBackward: () => void;
  onScrollForward: () => void;
  onNavigation: () => void;
  scrollIndex: number;
  slideAmount: number;
}

type NavigationProps = NativeStackNavigationProp<RegisterStackParamList>;

export const BottomSection: React.FC<BottomSectionProps> = ({
  onScrollBackward,
  onScrollForward,
  onNavigation,
  scrollIndex,
  slideAmount,
}) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <BottomWrapper>
      {scrollIndex === slideAmount - 1 && (
        <AccountButtonWrapper>
          <AccountButton
            title="Fazer Login"
            onPress={() => navigation.navigate('LoginScreen')}
          />
          <AccountButton
            title="Criar Conta"
            onPress={() => navigation.navigate('SignUpScreen')}
            isTransparent
          />
        </AccountButtonWrapper>
      )}
      <ScrollIndicator scrollIndex={scrollIndex} />

      <SliderButtonWrapper>
        <SliderButton
          title="Voltar"
          onPress={onScrollBackward}
          isTransparent={scrollIndex === 0}
        />
        <SliderButton
          title={scrollIndex === slideAmount - 1 ? 'Pular' : 'Avançar'}
          onPress={
            scrollIndex === slideAmount - 1 ? onNavigation : onScrollForward
          }
          isTransparent={scrollIndex === slideAmount - 1}
        />
      </SliderButtonWrapper>
    </BottomWrapper>
  );
};
