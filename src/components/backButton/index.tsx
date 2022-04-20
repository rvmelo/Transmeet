import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ArrowLeftIcon} from '../../../assets/svg/arrowLeft';

import {BackButtonInterface, BackButtonText, BackButtonWrapper} from './styles';

export const BackButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <BackButtonInterface onPress={() => navigation.goBack()}>
      <BackButtonWrapper>
        <ArrowLeftIcon width={8} height={16} />
        <BackButtonText>voltar</BackButtonText>
      </BackButtonWrapper>
    </BackButtonInterface>
  );
};
