# Respostas de referência (resumo)

## JavaScript
- `let/const` têm escopo de bloco; `var`, escopo de função.
- Preferir `===` por previsibilidade.
- Microtasks (Promise) executam antes de macrotasks (`setTimeout`).

## React
- Evitar mutação de estado para garantir re-render correto.
- `useMemo/useCallback` quando há ganho real de performance.
- `useEffect` com dependências corretas e cleanup.

## React Native
- `FlatList` com `keyExtractor` estável, memoização de item e tuning de janela.
- Evitar trabalho pesado na thread JS.
- Tratar diferenças iOS/Android (permissões, teclado, performance).

## Testes
- Mais unit/integration com Jest; Detox em fluxos críticos.
- Evitar flakiness com esperas explícitas e dados determinísticos.
