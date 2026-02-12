import React, { useMemo, useState } from 'react';
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

  const filteredUsers = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return USERS;
    return USERS.filter(u => u.name.toLowerCase().includes(normalized));
  }, [query]);

  return (
    <View>
      <TextInput
        placeholder="Buscar usuário"
        value={query}
        onChangeText={setQuery}
      />
      <UserList data={filteredUsers} />
    </View>
  );
}
