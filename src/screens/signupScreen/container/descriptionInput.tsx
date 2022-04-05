import React from 'react';
import {TextInputProps} from 'react-native';

import {DescriptionInputWrapper, DescriptionTextInput} from './styles';

export const DescriptionInput: React.FC<TextInputProps> = ({...rest}) => {
  return (
    <DescriptionInputWrapper>
      <DescriptionTextInput {...rest} />
    </DescriptionInputWrapper>
  );
};
