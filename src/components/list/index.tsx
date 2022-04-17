import React, {useCallback} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {User} from '../../global/types/redux';
import {ListItem} from './listItem';

import {Container} from './styles';

//  navigation
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TransStackParamList} from '../../routes/types';

type NavigationProps = NativeStackNavigationProp<TransStackParamList>;

interface ListProps {
  data: User[];
}

export const List: React.FC<ListProps> = ({data}) => {
  const navigation = useNavigation<NavigationProps>();

  const renderItem: ListRenderItem<User> = useCallback(
    ({item}) => {
      return (
        <ListItem
          itemName={item?.name}
          onPress={() =>
            navigation.navigate('SponsorProfileScreen', {user: item})
          }
        />
      );
    },
    [navigation],
  );

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
