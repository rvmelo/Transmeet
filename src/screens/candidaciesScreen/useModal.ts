import React, {useState} from 'react';

interface ReturnType {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  signOutModalVisible: boolean;
  setSignOutModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  modalType: 'success' | 'warning' | 'error';
  setModalType: React.Dispatch<
    React.SetStateAction<'success' | 'warning' | 'error'>
  >;
}

export function useModal(): ReturnType {
  const [modalVisible, setModalVisible] = useState(false);
  const [signOutModalVisible, setSignOutModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'success' | 'warning' | 'error'>(
    'warning',
  );

  return {
    modalVisible,
    setModalVisible,
    signOutModalVisible,
    setSignOutModalVisible,
    modalType,
    setModalType,
  };
}
