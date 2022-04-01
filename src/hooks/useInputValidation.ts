import React from 'react';

interface RegexType {
  regex: RegExp;
  message: string;
}

interface InputTypes {
  email: RegexType;
  password: RegexType;
  phone: RegexType;
  cpf: RegexType;
}

interface InputData {
  inputType: string | boolean;
}

const inputTypes: InputTypes = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Ops... Insira um e-mail válido',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      'A senha precisa ter 1 caractere maiúsculo, 1 minúsculo e 1 dígito. Com no mínimo 8 caracteres.',
  },
  phone: {
    regex: /^\(\d{2}\) \d{4,5}-\d{4}$/gi,
    message: 'Ops... Insira um telefone válido.',
  },
  cpf: {
    regex: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    message: 'Ops... Insira um CPF válido.',
  },
};

export const useFormValidation = ({inputType}: InputData) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<string | null>('');

  const validate = (value: string) => {
    if (inputType === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } 
    if (
      inputTypes[inputType as keyof InputTypes] &&
      !inputTypes[inputType as keyof InputTypes].regex.test(value)
    ) {
      setError(inputTypes[inputType as keyof InputTypes].message);
      return false;
    } 
    
      setError(null);
      return true;
    
  };

  const onChange = (text: string) => {
    if (error) {
      setValue(text)
    }
    validate(e.target.value);
  };

  return {
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};
