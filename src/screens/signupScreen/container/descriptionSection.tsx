import React from 'react';
import {User} from '../useSignUpForm';
import {DescriptionInput} from './descriptionInput';

import {DescriptionWrapper, DescriptionText} from './styles';

interface DescriptionSectionProps {
  description: string;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  description,
  setUser,
}) => {
  return (
    <DescriptionWrapper>
      <DescriptionText>Fale sobre seus interesses...</DescriptionText>
      <DescriptionInput
        numberOfLines={10}
        placeholder="Descreva aqui com o que gostaria de estudar e trabalhar, suas habilidades..."
        value={description}
        onChangeText={text => setUser(prev => ({...prev, description: text}))}
      />
    </DescriptionWrapper>
  );
};