import React, {useCallback} from 'react';
import {BackModalButton, NextModalButton} from './modalButtons';

import {ModalBottom, ModalMessage, ModalTitle} from './styles';

//  navigation
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RegisterStackParamList} from '../../../routes/types';

interface ModalProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  type?: 'error' | 'success';
}

type NavigationProps = NativeStackNavigationProp<RegisterStackParamList>;

export const SignUpContent: React.FC<ModalProps> = ({
  setModalVisible,
  type,
}) => {
  const navigation = useNavigation<NavigationProps>();

  const onHomeNavigation = useCallback(() => {
    navigation.navigate('TransBottomNavigator');
    setModalVisible(false);
  }, [navigation, setModalVisible]);

  return (
    <ModalBottom>
      <ModalTitle>{type === 'error' ? 'ERRO' : 'Concluído'}</ModalTitle>
      <ModalMessage>
        {type === 'error'
          ? 'Usuário não cadastrado'
          : 'Conta registrada com sucesso!'}
      </ModalMessage>
      {type === 'error' ? (
        <BackModalButton onPress={() => setModalVisible(false)} />
      ) : (
        <NextModalButton onPress={onHomeNavigation} />
      )}
    </ModalBottom>
  );
};

export const InfoContent: React.FC<ModalProps> = ({setModalVisible}) => {
  return (
    <ModalBottom>
      <ModalTitle>Em produção</ModalTitle>
      <ModalMessage>
        Estamos trabalhando nesta opção ainda, mas logo ela estará disponível.
        Aguarde...
      </ModalMessage>
      <BackModalButton onPress={() => setModalVisible(false)} />
    </ModalBottom>
  );
};
