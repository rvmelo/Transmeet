import React from 'react';
import {useOnBoarding} from '../useOnBoarding';
import {introData} from './introData';
import {SliderDisplay} from './slider';
import {SliderButton} from './sliderButton';

import {
  BottomWrapper,
  Container,
  ScrollWrapper,
  StyledScroll,
  TopWrapper,
} from './styles';

export const Onboarding: React.FC = () => {
  const {
    scrollRef,
    onForwardNavigation,
    onBackwardNavigation,
    onScrollToEnd,
    scrollIndex,
  } = useOnBoarding();
  return (
    <Container>
      <TopWrapper>
        <SliderButton title="Pular" onPress={onScrollToEnd} />
      </TopWrapper>
      <ScrollWrapper>
        <StyledScroll ref={scrollRef}>
          {introData.map(data => (
            <SliderDisplay key={data.uri} uri={data.uri} text={data.text} />
          ))}
        </StyledScroll>
      </ScrollWrapper>
      <BottomWrapper>
        <SliderButton
          title="Voltar"
          onPress={onBackwardNavigation}
          isTransparent={scrollIndex === 0}
        />
        <SliderButton title="Avançar" onPress={onForwardNavigation} />
      </BottomWrapper>
    </Container>
  );
};
