import React from 'react';
import {RadioButton} from 'react-native-paper';

import {RadioText, RadioWrapper} from './styles';

import {useTheme} from 'styled-components';

interface RadioSectionProps {
  contractText: string;
}

export const RadioSection: React.FC<RadioSectionProps> = ({contractText}) => {
  const theme = useTheme();

  return (
    <RadioWrapper>
      <RadioButton
        value="first"
        color={theme.colors.textGray}
        status="checked"
        onPress={() => undefined}
      />
      <RadioText>{contractText}</RadioText>
    </RadioWrapper>
  );
};
