import React from 'react';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components';

import {SearchIcon} from '../../../../assets/svg/searchIcon';
import {SlidersIcon} from '../../../../assets/svg/slidersIcon';

import {SearchContainer, StyledTextInput} from './styles';

export const SearchInput: React.FC<TextInputProps> = ({...rest}) => {
  const theme = useTheme();

  return (
    <SearchContainer>
      <SearchIcon height={24} width={24} />
      <StyledTextInput
        placeholderTextColor={theme.colors.textGray}
        placeholder="Pesquise um termo ou empresa..."
        selectionColor={theme.colors.textGray}
        {...rest}
      />
      <SlidersIcon height={24} width={24} />
    </SearchContainer>
  );
};
