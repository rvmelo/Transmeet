/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {User} from '../useSignUp';
import {Label, PickerContainer} from './styles';
import {states, Genders, genders, States} from './data';

interface StatePickerProps {
  selectedValue: States;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}
interface GenderPickerProps {
  selectedValue: Genders;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const StatePicker: React.FC<StatePickerProps> = ({
  selectedValue,
  setUser,
}) => {
  return (
    <PickerContainer marginLeft={21} marginRight={0}>
      <Label>Estado</Label>
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
        {states.map(state => (
          <Picker.Item key={state} label={state} value={state} />
        ))}
      </Picker>
    </PickerContainer>
  );
};

export const GenderPicker: React.FC<GenderPickerProps> = ({
  selectedValue,
  setUser,
}) => {
  return (
    <PickerContainer marginLeft={0} marginRight={22}>
      <Label>Gênero</Label>
      <Picker
        selectedValue={selectedValue}
        dropdownIconColor="#68717A"
        style={{
          width: 110,
          color: '#68717A',
        }}
        onValueChange={itemValue => {
          setUser(prev => ({...prev, gender: itemValue}));
        }}>
        {genders.map(gender => (
          <Picker.Item key={gender} label={gender} value={gender} />
        ))}
      </Picker>
    </PickerContainer>
  );
};
