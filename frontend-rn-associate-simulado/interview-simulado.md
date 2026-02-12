# Simulado Técnico — Frontend/React Native (Associate)

> Formato: entrevista realista com perguntas objetivas.
> Para cada pergunta: **Pergunta**, **Resposta modelo (comentário)**, **Por quê**, e **Exemplo** quando fizer sentido.

---

## 1) JavaScript Fundamentos

### 1.1 Escopo, hoisting e TDZ
**Pergunta:** Qual a diferença prática entre `var`, `let` e `const`?

```txt
// Resposta modelo (voz alta):
// "`var` tem escopo de função e sofre hoisting com inicialização em `undefined`.
// `let` e `const` têm escopo de bloco e ficam em TDZ até a declaração.
// `const` não permite reatribuição da referência.
// Em React Native prefiro `const` por padrão e `let` quando preciso reatribuir."
```

**Por quê:** Mostra domínio de bugs comuns (valores `undefined`, vazamento de escopo).

**Exemplo:**
```ts
if (true) {
  var a = 1;
  let b = 2;
}
console.log(a); // 1
// console.log(b); // erro
```

### 1.2 Igualdade e coerção
**Pergunta:** Quando usar `==` e `===`?

```txt
// Resposta modelo:
// "No dia a dia uso `===` para evitar coerções implícitas.
// `==` só em casos muito específicos e conscientes, porque pode gerar comparações confusas."
```

**Por quê:** Qualidade e previsibilidade em regras de negócio.

### 1.3 Event loop
**Pergunta:** Explique microtask e macrotask de forma prática.

```txt
// Resposta modelo:
// "Promises (`then`, `await`) entram na fila de microtask e rodam antes de macrotasks
// como `setTimeout`. Isso impacta ordem de execução e renderização."
```

**Por quê:** Ajuda a depurar comportamento assíncrono em UI.

---

## 2) DOM / Lógica

> Em React Native não existe DOM do browser, mas a lógica de estado, eventos e renderização declarativa é equivalente.

### 2.1 Imutabilidade
**Pergunta:** Por que evitar mutar objetos/arrays no estado?

```txt
// Resposta modelo:
// "Porque React depende de mudança de referência para detectar updates.
// Se eu mutar direto, posso não disparar re-render e introduzir bugs difíceis."
```

**Por quê:** Base para atualização de listas e memoização.

**Exemplo:**
```ts
// ruim
items.push(newItem);
setItems(items);

// bom
setItems(prev => [...prev, newItem]);
```

### 2.2 Complexidade
**Pergunta:** Como melhoraria busca em lista grande?

```txt
// Resposta modelo:
// "Depende do cenário: posso indexar por id com Map/objeto para acesso O(1),
// paginar dados, e evitar filtrar toda lista a cada tecla usando debounce."
```

**Por quê:** Mostra pensamento de performance sem overengineering.

---

## 3) React

### 3.1 Re-render e hooks
**Pergunta:** Quando usar `useMemo` e `useCallback`?

```txt
// Resposta modelo:
// "Eu uso quando há custo de cálculo ou quando a referência estável evita re-render
// em componentes memoizados. Evito usar por padrão para não aumentar complexidade sem ganho."
```

**Por quê:** Maturidade no uso de otimizações.

### 3.2 `useEffect`
**Pergunta:** Cite dois erros comuns com `useEffect`.

```txt
// Resposta modelo:
// "Esquecer dependências e causar stale closure.
// E não limpar side effects (listener/timer), gerando vazamento de memória."
```

**Exemplo:**
```ts
useEffect(() => {
  const id = setInterval(fetchData, 5000);
  return () => clearInterval(id);
}, [fetchData]);
```

---

## 4) React Native (performance, listas, bridge, mobile)

### 4.1 FlatList
**Pergunta:** Como otimizar uma `FlatList` com muitos itens?

```txt
// Resposta modelo:
// "Uso `keyExtractor` estável, `renderItem` memoizado, item component com `React.memo`,
// `getItemLayout` quando altura é fixa, e ajusto `initialNumToRender/windowSize` conforme cenário."
```

**Por quê:** É um ponto clássico em apps de produto.

### 4.2 Bridge / JS thread
**Pergunta:** O que significa "bridge" e impacto na performance?

```txt
// Resposta modelo:
// "Historicamente RN comunica JS e nativo pela bridge; muita troca de mensagens pode custar caro.
// Então evito updates excessivos por frame e prefiro animações com driver nativo/reanimated quando possível."
```

**Por quê:** Entendimento prático de gargalos mobile.

### 4.3 Mobile specifics
**Pergunta:** O que você considera em iOS vs Android?

```txt
// Resposta modelo:
// "Diferenças de permissões, comportamento de teclado, performance em devices fracos,
// e padrões de navegação/UI. Sempre testo em ambos e trato edge cases por plataforma quando necessário."
```

---

## 5) Testes (Jest/Detox)

### 5.1 Pirâmide de testes
**Pergunta:** Como dividir testes numa app RN?

```txt
// Resposta modelo:
// "Prioridade para unitários e integração com Jest/RTL por serem rápidos e baratos.
// E2E com Detox em fluxos críticos (login, checkout, onboarding) porque são mais lentos e custosos."
```

**Por quê:** Equilíbrio entre cobertura e custo.

### 5.2 Teste confiável
**Pergunta:** Como evitar testes flakey no Detox?

```txt
// Resposta modelo:
// "Evito `sleep`, uso esperas explícitas por elemento visível/habilitado,
// dados de teste previsíveis e ambiente estável."
```

---

## 6) Arquitetura e boas práticas

### 6.1 Organização
**Pergunta:** Como organizaria pastas em app Associate?

```txt
// Resposta modelo:
// "Separaria por feature/domínio (ex.: auth, profile), com `screens`, `components`, `services` e `hooks`.
// Também centralizo cliente HTTP e tipagem de API para consistência."
```

### 6.2 Tratamento de erro
**Pergunta:** Como trataria erro de API para UX boa?

```txt
// Resposta modelo:
// "Diferencio erro de rede, timeout e regra de negócio.
// Mostro feedback claro para usuário, estado de retry, e log estruturado para observabilidade."
```

---

## Mini desafio rápido (oral)

**Pergunta prática:** "Sua tela com `FlatList` trava ao digitar no filtro. O que faria primeiro?"

```txt
// Resposta modelo:
// "Primeiro meço (Flipper/Profiler), depois aplico debounce no filtro,
// memoizo itens derivados, extraio item para componente memoizado e reviso props mutáveis.
// Se necessário, reduzo trabalho por render e paginação."
```

**Por quê:** Demonstra método: medir → hipóteses → ajuste → validação.
