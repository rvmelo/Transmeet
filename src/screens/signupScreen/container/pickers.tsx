/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {UserFormData} from '../useSignUp';
import {Label, PickerContainer} from './styles';
import {states, Genders, genders} from './data';
import {RFValue} from 'react-native-responsive-fontsize';

interface StatePickerProps {
  selectedValue: string;
  setUser: React.Dispatch<React.SetStateAction<UserFormData>>;
}
interface GenderPickerProps {
  selectedValue: Genders;
  setUser: React.Dispatch<React.SetStateAction<UserFormData>>;
}

export const StatePicker: React.FC<StatePickerProps> = ({
  selectedValue,
  setUser,
}) => {
  return (
    <PickerContainer marginLeft={RFValue(20)} marginRight={0}>
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
          <Picker.Item
            key={state.typeId}
            label={state.name}
            value={state.typeId}
          />
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
    <PickerContainer marginLeft={0} marginRight={RFValue(20)}>
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
