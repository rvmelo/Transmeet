import React from 'react';
import {useOnBoarding} from '../useOnBoarding';
import {introData} from './introData';
import {SliderDisplay} from './sliderDisplay';

import {
  Container,
  IntroText,
  ScrollWrapper,
  StyledScroll,
  TitleText,
} from './styles';
import {BottomSection} from './bottomSection';
import {TopSection} from './topSection';

export const Onboarding: React.FC = () => {
  const {
    scrollRef,
    onScrollForward,
    onScrollBackward,
    onNavigation,
    scrollIndex,
    slideAmount,
  } = useOnBoarding();
  return (
    <Container>
      {scrollIndex < slideAmount - 1 && (
        <TopSection onNavigation={onNavigation} />
      )}
      <ScrollWrapper isLastIndex={scrollIndex === slideAmount - 1}>
        <StyledScroll ref={scrollRef}>
          {introData.map(data => (
            <SliderDisplay key={data.src} src={data.src} />
          ))}
        </StyledScroll>
      </ScrollWrapper>

      <TitleText>{introData[scrollIndex].title}</TitleText>
      <IntroText>{introData[scrollIndex].text}</IntroText>

      <BottomSection
        onScrollBackward={onScrollBackward}
        onScrollForward={onScrollForward}
        onNavigation={onNavigation}
        scrollIndex={scrollIndex}
        slideAmount={slideAmount}
      />
    </Container>
  );
};
