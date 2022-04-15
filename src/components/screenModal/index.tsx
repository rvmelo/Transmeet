import React from 'react';
import {Modal} from 'react-native';
import {WarningIcon} from '../../../assets/svg/warningIcon';
import {CheckIcon} from '../../../assets/svg/checkIcon';
import {CloseIcon} from '../../../assets/svg/closeIcon';

import {ModalBackground, ModalTop, ModalWrapper} from './styles';
import {InfoIcon} from '../../../assets/svg/infoIcon';

interface ScreenModalProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  type: 'error' | 'warning' | 'success' | 'info';
}

const iconType = {
  error: <CloseIcon height={90} width={90} />,
  warning: <WarningIcon height={90} width={90} />,
  success: <CheckIcon height={90} width={90} />,
  info: <InfoIcon height={90} width={90} />,
};

export const ScreenModal: React.FC<ScreenModalProps> = ({
  modalVisible,
  setModalVisible,
  type,
  children,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <ModalBackground>
        <ModalWrapper>
          <ModalTop type={type}>{iconType[type]}</ModalTop>
          {children}
        </ModalWrapper>
      </ModalBackground>
    </Modal>
  );
};
