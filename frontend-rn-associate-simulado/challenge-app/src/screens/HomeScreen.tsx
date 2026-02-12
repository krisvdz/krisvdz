import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { UserList } from '../components/UserList';

const USERS = [
  { id: '1', name: 'Ana' },
  { id: '2', name: 'Bruno' },
  { id: '3', name: 'Carla' },
  { id: '4', name: 'Diego' }
];

export function HomeScreen() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState(USERS);

  // TODO Etapa 1: esse filtro está com bug de mutação e acumula resultados errados.
  const onSearch = (text: string) => {
    setQuery(text);
    const filtered = users.filter(u => u.name.toLowerCase().includes(text.toLowerCase()));
    // BUG proposital: atualiza sobre a lista já filtrada, e não sobre fonte original.
    setUsers(filtered as any);
  };

  return (
    <View>
      <TextInput
        placeholder="Buscar usuário"
        value={query}
        onChangeText={onSearch}
      />
      {/* TODO Etapa 1: garantir render estável sem usar index como key */}
      <UserList data={users} />
    </View>
  );
}
