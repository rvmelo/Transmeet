import React from 'react';
import {introData} from './introData';

import {ScrollIndicatorWrapper, ScrollDot} from './styles';

interface ScrollIndicatorProps {
  scrollIndex: number;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  scrollIndex,
}) => {
  return (
    <ScrollIndicatorWrapper>
      {introData.map((_, index) => (
        <ScrollDot key={index} isActive={scrollIndex === index} />
      ))}
    </ScrollIndicatorWrapper>
  );
};
