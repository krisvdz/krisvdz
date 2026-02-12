import { formatDisplayName } from '../src/utils/format';

describe('formatDisplayName', () => {
  it('deve capitalizar nome simples', () => {
    expect(formatDisplayName('aNA')).toBe('Ana');
  });

  it('deve retornar vazio para entrada vazia', () => {
    expect(formatDisplayName('')).toBe('N/A'); // TODO Etapa 4: teste propositalmente errado
  });

  it('deve remover espaços extras', () => {
    expect(formatDisplayName('  BRUno ')).toBe('Bruno');
  });
});
