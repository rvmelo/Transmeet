import React from 'react';
import {TextInputProps} from 'react-native';

import {DescriptionInputWrapper, DescriptionTextInput} from './styles';

export const DescriptionInput: React.FC<TextInputProps> = ({...rest}) => {
  return (
    <DescriptionInputWrapper>
      <DescriptionTextInput
        placeholderTextColor="#68717A"
        multiline
        numberOfLines={5}
        textAlignVertical="top"
        {...rest}
      />
    </DescriptionInputWrapper>
  );
};
