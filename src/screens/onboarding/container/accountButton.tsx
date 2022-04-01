import React from 'react';

import {AccountButtonText, StyledAccountButton} from './styles';

interface AccountButtonProps {
  title: string;
  isTransparent?: boolean;
}

export const AccountButton: React.FC<AccountButtonProps> = ({
  title,
  isTransparent = false,
}) => {
  return (
    <StyledAccountButton
      onPress={() => undefined}
      isTransparent={isTransparent}>
      <AccountButtonText>{title}</AccountButtonText>
    </StyledAccountButton>
  );
};
