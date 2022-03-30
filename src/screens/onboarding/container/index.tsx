import React from 'react';
import {Slider} from './slider';
import {SliderButton} from './sliderButton';

import {BottomWrapper, Container, TopWrapper} from './styles';

export const Onboarding: React.FC = () => {
  return (
    <Container>
      <TopWrapper>
        <SliderButton title="Pular" />
      </TopWrapper>
      <Slider />
      <BottomWrapper>
        <SliderButton title="Voltar" />
        <SliderButton title="Avançar" />
      </BottomWrapper>
    </Container>
  );
};
