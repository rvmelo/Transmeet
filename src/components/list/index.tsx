import React, {useCallback} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {ListItem} from './listItem';

import {Container} from './styles';

interface ListProps {
  data: {name: string}[];
}

export const List: React.FC<ListProps> = ({data}) => {
  const renderItem: ListRenderItem<{name: string}> = useCallback(({item}) => {
    return <ListItem itemName={item?.name} />;
  }, []);

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
