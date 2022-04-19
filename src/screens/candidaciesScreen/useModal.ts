import React, {useState} from 'react';

interface ReturnType {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useModal(): ReturnType {
  const [modalVisible, setModalVisible] = useState(true);

  return {
    modalVisible,
    setModalVisible,
  };
}
