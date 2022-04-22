import React from 'react';

import {SliderContent, StyledImage} from './styles';

interface SliderDisplayProps {
  src: number;
}

export const SliderDisplay: React.FC<SliderDisplayProps> = ({src}) => {
  return (
    <SliderContent key={src}>
      <StyledImage source={src} />
    </SliderContent>
  );
};
