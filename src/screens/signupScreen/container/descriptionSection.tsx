import React from 'react';
import {UserFormData} from '../useSignUp';
import {DescriptionInput} from './descriptionInput';

import {DescriptionWrapper, DescriptionText} from './styles';

interface DescriptionSectionProps {
  description: string;
  setUser: React.Dispatch<React.SetStateAction<UserFormData>>;
}

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  description,
  setUser,
}) => {
  return (
    <DescriptionWrapper>
      <DescriptionText>Fale sobre seus interesses...</DescriptionText>
      <DescriptionInput
        value={description}
        onChangeText={text => setUser(prev => ({...prev, description: text}))}
      />
    </DescriptionWrapper>
  );
};
