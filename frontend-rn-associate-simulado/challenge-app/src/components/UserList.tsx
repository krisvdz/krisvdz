import React from 'react';
import { FlatList, Text, View } from 'react-native';

type User = { id: string; name: string };

export function UserList({ data }: { data: User[] }) {
  return (
    <FlatList
      data={data}
      // TODO Etapa 1: keyExtractor está errado (index).
      keyExtractor={(_, index) => String(index)}
      // TODO Etapa 3: extrair item memoizado e evitar função recriada sem necessidade.
      renderItem={({ item }) => (
        <View style={{ height: 56, justifyContent: 'center' }}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}
