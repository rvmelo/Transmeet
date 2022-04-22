import React, {useCallback, useEffect, useRef, useState} from 'react';

//  navigation
import {useNavigation} from '@react-navigation/native';
import {api} from '../../services/api';
import {TransUserData} from '../../components/list/types';

interface ConfirmationProps {
  itemData: TransUserData;
}

interface ReturnType {
  warningModalVisible: boolean;
  setWarningModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  successModalVisible: boolean;
  setSuccessModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirmWarning: (value: ConfirmationProps) => Promise<void>;
  onGoBackWarning: () => void;
  onConfirmSuccess: () => void;
  onGoBackHome: () => void;
  onDecline: (value: ConfirmationProps) => Promise<void>;
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

  const onConfirmWarning = useCallback(
    async ({itemData}: ConfirmationProps) => {
      try {
        await api.patch(`/match/${itemData.id}`, {response: true});
        setWarningModalVisible(false);
        setSuccessModalVisible(true);
      } catch (error) {
        console.log(error);
      }
    },
    [],
  );

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

  const onDecline = useCallback(
    async ({itemData}: ConfirmationProps) => {
      try {
        await api.patch(`/match/${itemData.id}`, {response: false});
        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    },
    [navigation],
  );

  return {
    warningModalVisible,
    setWarningModalVisible,
    successModalVisible,
    setSuccessModalVisible,
    onConfirmWarning,
    onGoBackWarning,
    onConfirmSuccess,
    onGoBackHome,
    onDecline,
  };
}
