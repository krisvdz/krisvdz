import React, { memo, useCallback } from 'react';
import { FlatList, Text, View } from 'react-native';

type User = { id: string; name: string };

const ITEM_HEIGHT = 56;

const UserItem = memo(function UserItem({ name }: { name: string }) {
  return (
    <View style={{ height: ITEM_HEIGHT, justifyContent: 'center' }}>
      <Text>{name}</Text>
    </View>
  );
});

export function UserList({ data }: { data: User[] }) {
  const renderItem = useCallback(({ item }: { item: User }) => {
    return <UserItem name={item.name} />;
  }, []);

  const getItemLayout = useCallback((_: unknown, index: number) => {
    return { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index };
  }, []);

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      initialNumToRender={8}
      windowSize={7}
    />
  );
}
