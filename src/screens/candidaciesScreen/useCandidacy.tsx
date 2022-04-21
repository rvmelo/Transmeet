import {AxiosResponse} from 'axios';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ListRenderItem} from 'react-native';
import {ListItem} from '../../components/list/listItem';
import {CandidacyData} from '../../components/list/types';

//  redux
import {useAppSelector} from '../../redux/hooks';
import {api} from '../../services/api';

type CandidacyStatus = 'success' | 'warning' | 'error';

interface CandidacyProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setModalType: React.Dispatch<React.SetStateAction<CandidacyStatus>>;
}

interface ReturnType {
  candidacies: CandidacyData[];
  setCandidacies: React.Dispatch<React.SetStateAction<CandidacyData[]>>;
  renderCandidacy: ListRenderItem<CandidacyData>;
}

export function useCandidacy({
  setModalVisible,
  setModalType,
}: CandidacyProps): ReturnType {
  const [candidacies, setCandidacies] = useState<CandidacyData[]>([]);

  const {user} = useAppSelector(store => store.userReducer);

  const isMounted = useRef<boolean | null>(null);

  const statusValue = useRef<CandidacyStatus>('warning');

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onLoadCandidacies = useCallback(async () => {
    try {
      const response: AxiosResponse<CandidacyData[]> = await api.get(
        `/match/users/${user?.id}`,
      );

      isMounted.current && setCandidacies(response?.data);
    } catch (err) {
      // return void
    }
  }, [user?.id]);

  const renderCandidacy: ListRenderItem<CandidacyData> = useCallback(
    ({item}) => {
      const {accounts_accountsTomatch_idSponsor, accept} = item || {};

      const {name} = accounts_accountsTomatch_idSponsor || {};

      statusValue.current = accept === false ? 'error' : 'success';

      if (accept === null) {
        statusValue.current = 'warning';
      }

      return (
        <ListItem
          status={statusValue.current}
          itemName={name}
          onPress={() => {
            setModalVisible(true);
            setModalType(statusValue?.current);
          }}
        />
      );
    },
    [setModalVisible, setModalType],
  );

  useEffect(() => {
    onLoadCandidacies();
  }, [onLoadCandidacies]);

  return {
    candidacies,
    setCandidacies,
    renderCandidacy,
  };
}
