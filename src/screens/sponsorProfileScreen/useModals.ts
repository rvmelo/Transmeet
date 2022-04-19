import React, {useCallback, useState} from 'react';

//  navigation
import {useNavigation} from '@react-navigation/native';

interface ReturnType {
  warningModalVisible: boolean;
  setWarningModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  successModalVisible: boolean;
  setSuccessModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm: () => void;
  onGoBackHome: () => void;
}

export function useModals(): ReturnType {
  const [warningModalVisible, setWarningModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const navigation = useNavigation();

  const onConfirm = useCallback(() => {
    setWarningModalVisible(false);
    setSuccessModalVisible(true);
  }, []);

  const onGoBackHome = useCallback(() => {
    setSuccessModalVisible(false);
    navigation.goBack();
  }, [navigation]);

  return {
    warningModalVisible,
    setWarningModalVisible,
    successModalVisible,
    setSuccessModalVisible,
    onConfirm,
    onGoBackHome,
  };
}
