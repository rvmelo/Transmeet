import React, {useState} from 'react';

interface ReturnType {
  signUpModalVisible: boolean;
  setSignUpModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  infoModalVisible: boolean;
  setInfoModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useModal(): ReturnType {
  const [signUpModalVisible, setSignUpModalVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);

  return {
    signUpModalVisible,
    setSignUpModalVisible,
    infoModalVisible,
    setInfoModalVisible,
  };
}
