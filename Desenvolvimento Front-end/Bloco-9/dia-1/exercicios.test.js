const { uppercase, getPokemonDetails } = require('./exercicios')

// describe('teste uppercase', () => {

//   it('teste', (done) => {
//     uppercase('teste', (call) => {
//       try {
//         expect(call).toBe('TESTE');
//         done()
//       }
//       catch(error) {
//         done(error)
//       }
//     })
//   })
// })

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (xablau) => {
    getPokemonDetails((pokemon) => pokemon.name === 'xablau', (erro, mess) => {
        expect(erro).toEqual(new Error('Não temos esse pokémon para você :('));
        xablau()
    })
  });

  it("retorna um pokemon que existe no banco de dados", (xablau) => {
     getPokemonDetails((pokemon) => pokemon.name === 'Charmander', (erro, mess) => {
        expect(mess).toEqual('Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember');
        xablau()
  });
});
});

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});