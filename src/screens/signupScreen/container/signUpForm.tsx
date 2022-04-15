/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FormInput} from '../../../components/formInput';
import {MaskedFormInput} from '../../../components/maskedInput';
import {UserFormData} from '../useSignUp';

import {UserTypes} from '../useSignUp';

import {SignUpWrapper, InputWrapper, InfoText} from './styles';
import {StatePicker, GenderPicker} from './pickers';
import {DescriptionSection} from './descriptionSection';
import {AccountButton} from './accountButton';
import {RadioSection} from './radioSection';
import {contractTerms, companyInfoText, personInfoText} from './data';
import {PaperclipIcon} from '../../../../assets/svg/paperClipIcon';
import {PasswordSection} from './passwordSection';

interface SignUpFormProps {
  userType: UserTypes;
  onUserSignUp: () => Promise<void>;
  user: UserFormData;
  setUser: React.Dispatch<React.SetStateAction<UserFormData>>;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({
  userType,
  onUserSignUp,
  user,
  setUser,
}) => {
  return (
    <SignUpWrapper>
      <FormInput
        label="Nome Social Completo"
        autoCapitalize="words"
        placeholder="Nome Completo"
        value={user?.name}
        onChangeText={name => setUser(prev => ({...prev, name}))}
        marginBottom={20}
      />

      <FormInput
        label="Email"
        placeholder="email@email.com.br"
        autoCapitalize="none"
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
            mask: '99',
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
          }}
          value={user?.cellphone}
          onChangeText={cellphone => setUser(prev => ({...prev, cellphone}))}
          styles={{
            marginLeft: 20,
          }}
        />
      </InputWrapper>

      <InputWrapper>
        <FormInput
          label="Cidade"
          placeholder="Cidade"
          value={user?.city}
          onChangeText={city => setUser(prev => ({...prev, city}))}
          labelVerticalPosition={40}
        />
        <StatePicker selectedValue={user?.state} setUser={setUser} />
      </InputWrapper>
      {userType !== 'empresa' && (
        <MaskedFormInput
          type="datetime"
          label="Data de Nascimento"
          placeholder="DD/MM/AAAA"
          value={user?.birthDate}
          onChangeText={birthDate => setUser(prev => ({...prev, birthDate}))}
          styles={{marginBottom: 20}}
          isCentered
        />
      )}

      {userType === 'empresa' ? (
        <MaskedFormInput
          type="cnpj"
          label="CNPJ"
          placeholder="00.000.000/0001-00"
          value={user?.regNumber}
          onChangeText={regNumber => setUser(prev => ({...prev, regNumber}))}
          styles={{marginBottom: 20}}
        />
      ) : (
        <MaskedFormInput
          type="cpf"
          label="CPF"
          placeholder="123.456.789-00"
          value={user?.regNumber}
          onChangeText={regNumber => setUser(prev => ({...prev, regNumber}))}
          styles={{marginBottom: 20}}
        />
      )}

      {userType !== 'empresa' && (
        <InputWrapper>
          <GenderPicker selectedValue={user?.gender} setUser={setUser} />
          <FormInput
            label="Outro? Qual?"
            labelVerticalPosition={40}
            labelHorizontalPosition={5}
          />
        </InputWrapper>
      )}

      {userType === 'empresa' && (
        <FormInput
          label="Site (opcional)"
          autoCapitalize="none"
          value={user?.site}
          placeholder="www.empresa.com.br"
          onChangeText={site => setUser(prev => ({...prev, site}))}
          marginBottom={20}
        />
      )}

      {userType === 'empresa' && (
        <FormInput
          label="Logo para perfil"
          leftIcon={<PaperclipIcon width={24} height={24} />}
          placeholder="Anexar logo da empresa"
          marginBottom={20}
          editable={false}
          selectTextOnFocus={false}
        />
      )}

      {userType === 'trans' && (
        <DescriptionSection description={user?.description} setUser={setUser} />
      )}

      {userType !== 'empresa' && (
        <FormInput
          label="Foto para perfil (opcional)"
          leftIcon={<PaperclipIcon width={24} height={24} />}
          placeholder="Anexar foto para perfil"
          marginBottom={20}
          editable={false}
          selectTextOnFocus={false}
        />
      )}

      <InfoText>
        {userType === 'empresa' ? companyInfoText : personInfoText}
      </InfoText>
      <PasswordSection
        password={user?.password}
        passwordRepeat={user?.passwordRepeat}
        setUser={setUser}
      />

      <RadioSection contractText={contractTerms[userType]} />
      <AccountButton title="Criar Conta" onPress={onUserSignUp} />
    </SignUpWrapper>
  );
};
