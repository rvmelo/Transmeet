import {AxiosResponse} from 'axios';
import React, {useState, useCallback, useRef, useEffect} from 'react';
import {TransUserData} from '../../components/list/types';
import {ListRenderItem} from 'react-native';
import {ListItem} from '../../components/list/listItem';
import {useNavigation} from '@react-navigation/native';
//  redux
import {useAppSelector} from '../../redux/hooks';
import {api} from '../../services/api';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SponsorStackParamList} from '../../routes/types';

type CandidacyStatus = 'success' | 'warning' | 'error';

type NavigationProps = NativeStackNavigationProp<SponsorStackParamList>;

interface ReturnType {
  transUsers: TransUserData[];
  setTransUsers: React.Dispatch<React.SetStateAction<TransUserData[]>>;
  renderTransUsers: ListRenderItem<TransUserData>;
  isRefreshing: boolean;
  onLoadTransUserData: () => Promise<void>;
}

export function useHome(): ReturnType {
  const [transUsers, setTransUsers] = useState<TransUserData[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const isMounted = useRef<boolean | null>(null);
  const {user} = useAppSelector(store => store.userReducer);
  const statusValue = useRef<CandidacyStatus>('warning');

  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onLoadTransUserData = useCallback(async () => {
    try {
      setIsRefreshing(true);

      const response: AxiosResponse<TransUserData[]> = await api.get(
        `/match/sponsors/${user?.id}`,
      );

      isMounted.current && setTransUsers(response?.data);
      isMounted.current && setIsRefreshing(false);
    } catch (err) {
      // return void
      isMounted.current && setIsRefreshing(false);
    }
  }, [user?.id, setIsRefreshing]);

  const renderTransUsers: ListRenderItem<TransUserData> = useCallback(
    ({item}) => {
      const {accounts_accountsTomatch_idUser, accept} = item || {};

      const {name} = accounts_accountsTomatch_idUser || {};

      statusValue.current = accept === false ? 'error' : 'success';

      if (accept === null) {
        statusValue.current = 'warning';
      }

      return (
        <ListItem
          status={statusValue.current}
          itemName={name}
          onPress={() =>
            navigation.navigate('TransProfileScreen', {
              transUser: item.accounts_accountsTomatch_idUser,
              itemData: item,
            })
          }
        />
      );
    },
    [navigation],
  );

  useEffect(() => {
    onLoadTransUserData();
  }, [onLoadTransUserData]);

  return {
    transUsers,
    onLoadTransUserData,
    renderTransUsers,
    isRefreshing,
    setTransUsers,
  };
}
