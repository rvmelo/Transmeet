import React from 'react';
import {SliderButton} from './sliderButton';

import {TopWrapper} from './styles';

interface TopSectionProps {
  onNavigation: () => void;
}

export const TopSection: React.FC<TopSectionProps> = ({onNavigation}) => {
  return (
    <TopWrapper>
      <SliderButton title="Pular" onPress={onNavigation} outLine />
    </TopWrapper>
  );
};
