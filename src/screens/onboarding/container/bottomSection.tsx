import React from 'react';
import {AccountButton} from './accountButton';
import {SliderButton} from './sliderButton';

import {
  AccountButtonWrapper,
  BottomWrapper,
  SliderButtonWrapper,
} from './styles';

interface BottomSectionProps {
  onScrollBackward: () => void;
  onScrollForward: () => void;
  onNavigation: () => void;
  scrollIndex: number;
  slideAmount: number;
}

export const BottomSection: React.FC<BottomSectionProps> = ({
  onScrollBackward,
  onScrollForward,
  onNavigation,
  scrollIndex,
  slideAmount,
}) => {
  return (
    <BottomWrapper>
      {scrollIndex === slideAmount - 1 && (
        <AccountButtonWrapper>
          <AccountButton title="Fazer Login" />
          <AccountButton title="Criar Conta" isTransparent />
        </AccountButtonWrapper>
      )}
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
        />
      </SliderButtonWrapper>
    </BottomWrapper>
  );
};
