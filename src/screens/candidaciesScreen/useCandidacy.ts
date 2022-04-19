import React, {useCallback, useEffect, useRef, useState} from 'react';

//  redux
import {User} from '../../global/types/redux';
import {useAppSelector} from '../../redux/hooks';
import {api} from '../../services/api';

interface ReturnType {
  candidacies: User[];
  setCandidacies: React.Dispatch<React.SetStateAction<User[]>>;
}

export function useCandidacy(): ReturnType {
  const [candidacies, setCandidacies] = useState<User[]>([]);

  const {user} = useAppSelector(store => store.userReducer);

  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onLoadCandidacies = useCallback(async () => {
    try {
      const response = await api.get(`/match/users/${user?.id}`);

      console.log('first response: ', response?.data);

      console.log('id: ', response?.data[0]?.id);

      const response2 = await api.get(`/match/${response?.data[0]?.id}`);

      console.log('second response: ', response2?.data);
    } catch {
      // return void
    }
  }, [user?.id]);

  useEffect(() => {
    onLoadCandidacies();
  }, [onLoadCandidacies]);

  return {candidacies, setCandidacies};
}
