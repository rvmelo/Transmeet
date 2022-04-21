import React from 'react';

import {SponsorButton, SponsorButtonText} from './styles';

interface SponsorButtonProps {
  title: string;
  isDecline?: boolean;
  onPress: () => void;
}

export const SponsorDeclineButton: React.FC<SponsorButtonProps> = ({
  title,
  isDecline = false,
  onPress,
}) => {
  return (
    <SponsorButton title={title} onPress={onPress} isDecline={isDecline}>
      <SponsorButtonText>{title}</SponsorButtonText>
    </SponsorButton>
  );
};
