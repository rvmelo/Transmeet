/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {User} from '../useSignUpForm';
import {Label, PickerContainer} from './styles';

interface PickerInputProps {
  options: string[];
  selectedValue: 'SP' | 'MG' | 'SE' | 'SC' | 'RJ';
  setUser: React.Dispatch<React.SetStateAction<User>>;
  label: string;
}

export const PickerInput: React.FC<PickerInputProps> = ({
  options,
  selectedValue,
  setUser,
  label,
}) => {
  return (
    <PickerContainer>
      <Label>{label}</Label>
      <Picker
        selectedValue={selectedValue}
        dropdownIconColor="#68717A"
        style={{
          width: 110,
          color: '#68717A',
        }}
        onValueChange={itemValue => {
          setUser(prev => ({...prev, state: itemValue}));
        }}>
        {options.map(option => (
          <Picker.Item key={option} label={option} value={option} />
        ))}
      </Picker>
    </PickerContainer>
  );
};
