/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FormInput} from '../../../components/formInput';
import {MaskedFormInput} from '../../../components/maskedInput';
import {useSignUpForm} from '../useSignUpForm';

import {SignUpWrapper, PhoneWrapper, LocationWrapper} from './styles';
import {PickerInput} from './pickerInput';
import {states} from './data';

export const SignUpForm: React.FC = () => {
  const {user, setUser} = useSignUpForm();

  return (
    <SignUpWrapper>
      <FormInput label="Nome Social Completo" marginBottom={20} />
      <FormInput label="Email" marginBottom={20} />
      <PhoneWrapper>
        <MaskedFormInput
          label="DDD"
          type="custom"
          options={{
            mask: '(99)',
          }}
          value={user?.ddd}
          styles={{width: 86}}
          onChangeText={ddd => setUser(prev => ({...prev, ddd}))}
          keyboardType="numeric"
        />
        <MaskedFormInput
          type="cel-phone"
          label="Telefone"
          options={{
            maskType: 'BRL',
            withDDD: false,
            dddMask: '(99) ',
          }}
          value={user?.cellphone}
          onChangeText={cellphone => setUser(prev => ({...prev, cellphone}))}
          styles={{
            marginLeft: 20,
          }}
        />
      </PhoneWrapper>

      <LocationWrapper>
        <FormInput label="Cidade" marginBottom={20} />
        <PickerInput
          label="Estado"
          selectedValue={user?.state}
          options={states}
          setUser={setUser}
        />
      </LocationWrapper>
    </SignUpWrapper>
  );
};
