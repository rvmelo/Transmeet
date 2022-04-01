import React from 'react';

import {AccountButtonText, StyledAccountButton} from './styles';

interface AccountButtonProps {
  title: string;
  isTransparent?: boolean;
  onPress: () => void;
}

export const AccountButton: React.FC<AccountButtonProps> = ({
  title,
  isTransparent = false,
  onPress,
}) => {
  return (
    <StyledAccountButton onPress={onPress} isTransparent={isTransparent}>
      <AccountButtonText>{title}</AccountButtonText>
    </StyledAccountButton>
  );
};
