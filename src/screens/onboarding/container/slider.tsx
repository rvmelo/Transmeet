import React from 'react';
import {introData} from './introData';

import {
  IntroText,
  ScrollWrapper,
  SliderContent,
  StyledImage,
  StyledScroll,
} from './styles';

export const Slider: React.FC = () => {
  return (
    <ScrollWrapper>
      <StyledScroll>
        {introData.map(data => (
          <SliderContent>
            <StyledImage
              source={{
                uri: data.uri,
              }}
            />
            <IntroText>{data.text}</IntroText>
          </SliderContent>
        ))}
      </StyledScroll>
    </ScrollWrapper>
  );
};
