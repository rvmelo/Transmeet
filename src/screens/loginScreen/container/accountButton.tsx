import React from 'react';

import {AccountButtonText, StyledAccountButton} from './styles';

interface AccountButtonProps {
  title: string;
  onPress: () => void;
}

export const AccountButton: React.FC<AccountButtonProps> = ({
  title,
  onPress,
}) => {
  return (
    <StyledAccountButton onPress={onPress}>
      <AccountButtonText>{title}</AccountButtonText>
    </StyledAccountButton>
  );
};
