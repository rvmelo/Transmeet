/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FormInput} from '../../../components/formInput';
import {MaskedFormInput} from '../../../components/maskedInput';
import {useSignUpForm} from '../useSignUpForm';

import {UserTypes} from '../useSignUpForm';

import {
  SignUpWrapper,
  InputWrapper,
  PasswordWrapper,
  RadioText,
  RadioWrapper,
} from './styles';
import {StatePicker, GenderPicker} from './pickers';
import {DescriptionSection} from './descriptionSection';
import {RadioButton} from 'react-native-paper';
import {AccountButton} from './accountButton';

interface SignUpFormProps {
  userType: UserTypes;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({userType}) => {
  const {user, setUser} = useSignUpForm();

  return (
    <SignUpWrapper>
      <FormInput
        label="Nome Social Completo"
        placeholder="Nome Completo"
        value={user?.name}
        onChangeText={name => setUser(prev => ({...prev, name}))}
        marginBottom={20}
      />
      <FormInput
        label="Email"
        placeholder="email@email.com.br"
        value={user?.email}
        onChangeText={email => setUser(prev => ({...prev, email}))}
        marginBottom={20}
      />
      <InputWrapper>
        <MaskedFormInput
          label="DDD"
          type="custom"
          placeholder="(00)"
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
          placeholder="00000-0000"
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
      </InputWrapper>

      <InputWrapper>
        <FormInput label="Cidade" placeholder="Cidade" />
        <StatePicker selectedValue={user?.state} setUser={setUser} />
      </InputWrapper>
      <MaskedFormInput
        type="datetime"
        label="Data de Nascimento"
        placeholder="DD/MM/AAAA"
        value={user?.birthDate}
        onChangeText={birthDate => setUser(prev => ({...prev, birthDate}))}
        styles={{marginBottom: 20}}
        isCentered
      />

      {userType === 'empresa' ? (
        <MaskedFormInput
          type="cnpj"
          label="CNPJ"
          placeholder="00.000.000/0001-00"
          value={user?.cnpj}
          onChangeText={cnpj => setUser(prev => ({...prev, cnpj}))}
          styles={{marginBottom: 20}}
        />
      ) : (
        <MaskedFormInput
          type="cpf"
          label="CPF"
          placeholder="123.456.789-00"
          value={user?.cpf}
          onChangeText={cpf => setUser(prev => ({...prev, cpf}))}
          styles={{marginBottom: 20}}
        />
      )}

      {userType === 'empresa' && (
        <FormInput
          label="Site (opcional)"
          value={user?.site}
          placeholder="www.empresa.com.br"
          onChangeText={site => setUser(prev => ({...prev, site}))}
          marginBottom={20}
        />
      )}

      <InputWrapper>
        <GenderPicker selectedValue={user?.gender} setUser={setUser} />
        <FormInput label="Outro? Qual?" />
      </InputWrapper>
      {userType === 'trans' && (
        <DescriptionSection description={user?.description} setUser={setUser} />
      )}
      <PasswordWrapper>
        <FormInput
          label="Senha"
          secureTextEntry
          value={user?.password}
          onChangeText={password => setUser(prev => ({...prev, password}))}
          marginBottom={20}
        />
        <FormInput
          label="Repita a senha"
          secureTextEntry
          value={user?.passwordRepeat}
          onChangeText={passwordRepeat =>
            setUser(prev => ({...prev, passwordRepeat}))
          }
          marginBottom={20}
        />
      </PasswordWrapper>
      <RadioWrapper>
        <RadioButton
          value="first"
          color="#68717A"
          status="checked"
          onPress={() => undefined}
        />
        <RadioText>
          Ao criar a conta, eu afirmo que me defino como pessoa Trans e que
          concordo com os termos.
        </RadioText>
      </RadioWrapper>
      <AccountButton title="Criar Conta" onPress={() => undefined} />
    </SignUpWrapper>
  );
};