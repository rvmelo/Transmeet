import React, {useCallback, useEffect, useRef, useState} from 'react';

//  navigation
import {useNavigation} from '@react-navigation/native';
import {api} from '../../services/api';

interface ConfirmationProps {
  idSponsor: number | undefined;
  idUser: number | undefined;
}

interface ReturnType {
  warningModalVisible: boolean;
  setWarningModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  successModalVisible: boolean;
  setSuccessModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm: (value: ConfirmationProps) => Promise<void>;
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

  const onConfirm = useCallback(
    async ({idSponsor, idUser}: ConfirmationProps) => {
      try {
        await api.post('/match', {idSponsor, idUser});

        isMounted?.current && setWarningModalVisible(false);
        isMounted?.current && setSuccessModalVisible(true);
      } catch {
        isMounted?.current && setWarningModalVisible(false);
      }
    },
    [],
  );

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
