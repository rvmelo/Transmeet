import React from 'react';
import {FormInput} from '../../../components/formInput';
import {UserFormData} from '../useSignUp';

import {PasswordWrapper} from './styles';

interface PasswordSectionProps {
  password: string;
  passwordRepeat: string;
  setUser: React.Dispatch<React.SetStateAction<UserFormData>>;
}

export const PasswordSection: React.FC<PasswordSectionProps> = ({
  password,
  passwordRepeat,
  setUser,
}) => {
  return (
    <PasswordWrapper>
      <FormInput
        label="Senha"
        secureTextEntry
        value={password}
        onChangeText={value => setUser(prev => ({...prev, password: value}))}
        marginBottom={20}
      />
      <FormInput
        label="Repita a senha"
        secureTextEntry
        value={passwordRepeat}
        onChangeText={value =>
          setUser(prev => ({...prev, passwordRepeat: value}))
        }
        marginBottom={20}
      />
    </PasswordWrapper>
  );
};
