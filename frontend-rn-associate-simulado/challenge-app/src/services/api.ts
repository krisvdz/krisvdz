export type UserDetails = {
  id: string;
  name: string;
  email: string;
};

// TODO Etapa 2: URL propositalmente incorreta
const BASE_URL = 'https://jsonplaceholder.typicode.comx';

export async function fetchUserDetails(id: string): Promise<UserDetails> {
  const response = await fetch(`${BASE_URL}/users/${id}`);

  if (!response.ok) {
    throw new Error('Falha ao buscar usuário');
  }

  return response.json();
}
