import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { fetchUserDetails, UserDetails } from '../services/api';

export function DetailsScreen({ userId }: { userId: string }) {
  const [user, setUser] = useState<UserDetails | null>(null);

  useEffect(() => {
    // TODO Etapa 2: falta loading/erro/retry
    fetchUserDetails(userId).then(setUser);
  }, [userId]);

  if (!user) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
    </View>
  );
}
