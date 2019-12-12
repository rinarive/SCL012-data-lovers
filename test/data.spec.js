// importamos la función `example`
import LoL from './data/lol/lol.js';
import { filterDataByRol, sortBy, search, goToHome,} from './data.js';

describe('data', () => {

  it('Debería retornar los nombres de los campeones', () => {
    expect(typeof filterDataByRol).toBe('function');
  });

  describe('example', () => {
    // escribe aquí tu test
  });
});

