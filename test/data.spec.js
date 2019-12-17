
import { filterChampions, searchChampions, sortChampions } from '../src/data.js';
import LoL from '../src/data/lol/lol.js';

const arrayChampions = [];

/* eslint-disable guard-for-in */
// eslint-disable-next-line no-restricted-syntax
for (const i in LoL.data) {
  arrayChampions.push(LoL.data[i]);
}

const event = { target: { value: 'Aatrox' } };

describe('data', () => {
  it('filterChampions debería ser una función', () => {
    expect(typeof filterChampions).toBe('function');
  });

  describe('filterChampions', () => {
    it('Debe retornar Aatrox en la posición 0 de la data', () => {
      const filtrados = filterChampions('Tank', arrayChampions);
      expect(filtrados[0].name).toBe('Aatrox');
    });
  });

  it('filterChampions para Mage debería ser una función', () => {
    expect(typeof filterChampions).toBe('function');
  });

  describe('filterChampions Mage', () => {
    it('Debe retornar Ahri en la posición 0 de la data', () => {
      const filtrados = filterChampions('Mage', arrayChampions);
      expect(filtrados[0].name).toBe('Ahri');
    });
  });

  it('sortChampions az debería ser una función', () => {
    expect(typeof sortChampions).toBe('function');
  });

  describe('sortChampions az', () => {
    it('Debe retornar Aatrox en la posición 0 de la data', () => {
      const filtrados = sortChampions(arrayChampions, 'az');
      expect(filtrados[0].name).toBe('Aatrox');
    });
  });

  it('sortChampions za debería ser una función', () => {
    expect(typeof sortChampions).toBe('function');
  });

  describe('sortChampions za', () => {
    it('Debe retornar Zyra en la posición 0 de la data', () => {
      const filtrados = sortChampions(arrayChampions, 'za');
      expect(filtrados[0].name).toBe('Zyra');
    });
  });

  it('searchChampions debería ser una función', () => {
    expect(typeof searchChampions).toBe('function');
  });

  describe('searchChampions', () => {
    it('Debe retornar Aatrox en la posición 0 de la data', () => {
      const filtrados = searchChampions(arrayChampions, event);
      expect(filtrados[0].name).toBe('Aatrox');
    });
  });
});
