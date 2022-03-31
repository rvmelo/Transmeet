import React from 'react';

import {IntroText, SliderContent, StyledImage} from './styles';

interface SliderDisplayProps {
  uri: string;
  text: string;
}

export const SliderDisplay: React.FC<SliderDisplayProps> = ({uri, text}) => {
  return (
    <SliderContent key={uri}>
      <StyledImage
        source={{
          uri: uri,
        }}
      />
      <IntroText>{text}</IntroText>
    </SliderContent>
  );
};
