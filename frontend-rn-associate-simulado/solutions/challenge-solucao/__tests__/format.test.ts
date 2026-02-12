import { formatDisplayName } from '../src/utils/format';

describe('formatDisplayName', () => {
  it('deve capitalizar nome simples', () => {
    expect(formatDisplayName('aNA')).toBe('Ana');
  });

  it('deve retornar vazio para entrada vazia', () => {
    expect(formatDisplayName('')).toBe('');
  });

  it('deve remover espaços extras', () => {
    expect(formatDisplayName('  BRUno ')).toBe('Bruno');
  });

  it('deve retornar vazio para apenas espaços', () => {
    expect(formatDisplayName('   ')).toBe('');
  });
});
