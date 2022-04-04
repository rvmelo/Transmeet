import {useCallback} from 'react';

//  navigation
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RegisterStackParamList} from '../../routes/types';

type NavigationProps = NativeStackNavigationProp<RegisterStackParamList>;

interface ReturnType {
  onSignUpNavigation: () => void;
}

export function useLoginScreen(): ReturnType {
  const navigation = useNavigation<NavigationProps>();

  const onSignUpNavigation = useCallback(() => {
    navigation.navigate('SignUpScreen');
  }, [navigation]);

  return {
    onSignUpNavigation,
  };
}
