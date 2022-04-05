import React from 'react';
import {RadioButton} from 'react-native-paper';

import {RadioText, RadioWrapper} from './styles';

interface RadioSectionProps {
  contractText: string;
}

export const RadioSection: React.FC<RadioSectionProps> = ({contractText}) => {
  return (
    <RadioWrapper>
      <RadioButton
        value="first"
        color="#68717A"
        status="checked"
        onPress={() => undefined}
      />
      <RadioText>{contractText}</RadioText>
    </RadioWrapper>
  );
};
