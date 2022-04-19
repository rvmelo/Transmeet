import {AxiosResponse} from 'axios';
import React, {useEffect, useRef} from 'react';
import {useCallback, useState} from 'react';
import {User} from '../../global/types/redux';
import {api} from '../../services/api';

import {ListItem} from '../../components/list/listItem';

//  navigation
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TransStackParamList} from '../../routes/types';
import {ListRenderItem} from 'react-native';

type NavigationProps = NativeStackNavigationProp<TransStackParamList>;

interface ReturnType {
  sponsorList: User[];
  setSponsorList: React.Dispatch<React.SetStateAction<User[]>>;
  onCompanySearch: () => Promise<void>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  renderSponsor: ListRenderItem<User>;
}

export function useHome(): ReturnType {
  const [sponsorList, setSponsorList] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const navigation = useNavigation<NavigationProps>();

  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const renderSponsor: ListRenderItem<User> = useCallback(
    ({item}) => {
      return (
        <ListItem
          itemName={item?.name}
          onPress={() =>
            navigation.navigate('SponsorProfileScreen', {sponsor: item})
          }
        />
      );
    },
    [navigation],
  );

  const onCompanySearch = useCallback(async () => {
    try {
      const response: AxiosResponse<User[]> = await api.get(
        `/sponsors/${searchValue}`,
      );

      isMounted.current && setSponsorList(response?.data);
    } catch (err) {
      // return void
    }
  }, [searchValue]);

  useEffect(() => {
    onCompanySearch();
  }, [onCompanySearch]);

  return {
    sponsorList,
    setSponsorList,
    onCompanySearch,
    searchValue,
    setSearchValue,
    renderSponsor,
  };
}
