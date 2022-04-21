import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {User} from '../../global/types/redux';

import {Container} from './styles';
import {CandidacyData} from './types';

interface ListProps {
  data: User[];
  renderItem: ListRenderItem<User>;
}

interface CandidacyListProps {
  data: CandidacyData[];
  renderItem: ListRenderItem<CandidacyData>;
}

export const List: React.FC<ListProps> = ({data, renderItem}) => {
  return (
    <Container>
      <FlatList
        keyExtractor={item => item.name}
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export const CandidacyList: React.FC<CandidacyListProps> = ({
  data,
  renderItem,
}) => {
  return (
    <Container>
      <FlatList
        keyExtractor={item => item?.accounts_accountsTomatch_idSponsor?.name}
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
