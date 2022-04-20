import React from 'react';

import {TitleText, IntroText, SliderContent, StyledImage} from './styles';

interface SliderDisplayProps {
  src: number;
  text: string;
  title: string;
}

export const SliderDisplay: React.FC<SliderDisplayProps> = ({
  src,
  text,
  title,
}) => {
  return (
    <SliderContent key={src}>
      <StyledImage source={src} />
      <TitleText>{title}</TitleText>
      <IntroText>{text}</IntroText>
    </SliderContent>
  );
};
