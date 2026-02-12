export type UserDetails = {
  id: string;
  name: string;
  email: string;
};

const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function fetchWithTimeout(url: string, timeoutMs = 5000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

export async function fetchUserDetails(id: string): Promise<UserDetails> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      const response = await fetchWithTimeout(`${BASE_URL}/users/${id}`);

      if (!response.ok) {
        throw new Error('Falha ao buscar usuário');
      }

      return response.json();
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError instanceof Error ? lastError : new Error('Erro inesperado');
}
