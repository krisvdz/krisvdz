# Challenge App (estilo HackerRank/HackerEarth)

Seu objetivo é corrigir e evoluir este mini projeto React Native (TypeScript).

## Regras

- Faça as etapas na ordem.
- Não abra `../solutions` antes de terminar.
- Cada etapa tem critérios de aceite.

## Etapas

### Etapa 1 — Corrigir bug de renderização da lista
**Arquivo:** `src/screens/HomeScreen.tsx`

**Problema atual:**
- Busca está mutando estado e pode duplicar/"sumir" itens.
- Lista usa índice como key.

**Você deve:**
1. Implementar filtro sem mutação.
2. Garantir `keyExtractor` estável por `id`.
3. Evitar re-render desnecessário no `renderItem`.

### Etapa 2 — Corrigir chamadas de API e tratamento de erro
**Arquivos:** `src/services/api.ts`, `src/screens/DetailsScreen.tsx`

**Problema atual:**
- URL incorreta.
- Falta tratamento de timeout/retry básico.

**Você deve:**
1. Corrigir URL/base.
2. Tratar loading, erro e sucesso.
3. Exibir mensagem amigável.

### Etapa 3 — Melhorar performance de lista
**Arquivo:** `src/components/UserList.tsx`

**Você deve:**
1. Usar `React.memo` no item.
2. Ajustar props de `FlatList` (`initialNumToRender`, `windowSize`).
3. Adicionar `getItemLayout` (altura fixa já definida).

### Etapa 4 — Testes
**Arquivo:** `__tests__/format.test.ts`

**Você deve:**
1. Corrigir os testes quebrados.
2. Cobrir edge cases de formatação.

## Critérios de avaliação

- Clareza de código
- Fundamentos de React/RN
- Qualidade de tratamento de erro
- Performance básica
- Testes confiáveis
