import React, {useCallback, useEffect, useRef, useState} from 'react';

//  navigation
import {useNavigation} from '@react-navigation/native';
// import {api} from '../../services/api';

// interface ConfirmationProps {
//   idSponsor: number | undefined;
//   idUser: number | undefined;
// }

interface ReturnType {
  warningModalVisible: boolean;
  setWarningModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  successModalVisible: boolean;
  setSuccessModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirmWarning: () => void;
  onGoBackWarning: () => void;
  onConfirmSuccess: () => void;
  onGoBackHome: () => void;
}

export function useModals(): ReturnType {
  const [warningModalVisible, setWarningModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const navigation = useNavigation();

  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onConfirmWarning = useCallback(() => {
    setWarningModalVisible(false);
    setSuccessModalVisible(true);
  }, []);

  const onGoBackWarning = useCallback(() => {
    setWarningModalVisible(false);
  }, []);

  const onConfirmSuccess = useCallback(() => {
    setSuccessModalVisible(false);
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
    onConfirmWarning,
    onGoBackWarning,
    onConfirmSuccess,
    onGoBackHome,
  };
}
