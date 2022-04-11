import React from 'react';

import {ScreenModal} from '../../../components/screenModal';
import {InfoContent, SignUpContent} from './modalContent';

interface SignUpModalProps {
  signUpModalVisible: boolean;
  setSignUpModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isError?: boolean;
}

interface InfoModalProps {
  infoModalVisible: boolean;
  setInfoModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
interface SignUpModalProps {
  signUpModalVisible: boolean;
  setSignUpModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SignUpModal: React.FC<SignUpModalProps> = ({
  signUpModalVisible,
  setSignUpModalVisible,
  isError,
}) => {
  return (
    <ScreenModal
      type={isError ? 'error' : 'success'}
      modalVisible={signUpModalVisible}
      setModalVisible={setSignUpModalVisible}>
      <SignUpContent
        type={isError ? 'error' : 'success'}
        setModalVisible={setSignUpModalVisible}
      />
    </ScreenModal>
  );
};

export const InfoModal: React.FC<InfoModalProps> = ({
  infoModalVisible,
  setInfoModalVisible,
}) => {
  return (
    <ScreenModal
      type="info"
      modalVisible={infoModalVisible}
      setModalVisible={setInfoModalVisible}>
      <InfoContent setModalVisible={setInfoModalVisible} />
    </ScreenModal>
  );
};
