import {AxiosResponse} from 'axios';
import React, {useEffect, useRef} from 'react';
import {useCallback, useState} from 'react';
import {User} from '../../global/types/redux';
import {api} from '../../services/api';

interface ReturnType {
  sponsorList: User[];
  setSponsorList: React.Dispatch<React.SetStateAction<User[]>>;
  onCompanySearch: () => Promise<void>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export function useHome(): ReturnType {
  const [sponsorList, setSponsorList] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

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
  };
}
