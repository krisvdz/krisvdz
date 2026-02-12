import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { fetchUserDetails, UserDetails } from '../services/api';

export function DetailsScreen({ userId }: { userId: string }) {
  const [user, setUser] = useState<UserDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function run() {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchUserDetails(userId);
        if (active) setUser(data);
      } catch {
        if (active) setError('Não foi possível carregar os dados. Tente novamente.');
      } finally {
        if (active) setIsLoading(false);
      }
    }

    run();
    return () => {
      active = false;
    };
  }, [userId]);

  if (isLoading) return <Text>Carregando...</Text>;
  if (error) return <Text>{error}</Text>;
  if (!user) return <Text>Nenhum usuário encontrado.</Text>;

  return (
    <View>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
    </View>
  );
}
