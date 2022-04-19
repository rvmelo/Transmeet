import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {User} from '../../global/types/redux';

import {Container} from './styles';

interface ListProps {
  data: User[];
  renderItem: ListRenderItem<User>;
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
