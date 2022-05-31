const { typeOf } = require('mathjs');
const fun = require('./script');


describe('Verifica soma', () => {
   it('O retorno de sum(4, 5) é 9', () => {
     expect(9).toEqual(fun.sum(4, 5));
   });

   it('O retorno de sum(0, 0) é 0', () => {
     expect(0).toEqual(fun.sum(0, 0));
   });

   it('Teste sum(4, "5")', () => {
     expect(() => {fun.sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
   });
});

describe('myRemove', () => {
  const arr = [1, 2, 3, 4]
  it('[1, 2, 3, 4] retorna [1, 2, 4]', () => {
    expect([1, 2, 4]).toEqual(fun.myRemove(arr, 3));
  });

  it('[1, 2, 3, 4] não retorna [1, 2, 3, 4]', () => {
    expect(arr).not.toEqual(fun.myRemove(arr, 3));
  });

  it('myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(arr).toEqual(fun.myRemove(arr, 5));
  });
});

describe('myFizzBuzz', () => {
  it('número divisível por 3 e 5 e verifique se o retorno é fizzbuzz', () =>{
    expect('fizzbuzz').toBe(fun.myFizzBuzz(15));
  });

  it('número divisível por 3 e verifique se o retorno é fizz', () =>{
    expect('fizz').toBe(fun.myFizzBuzz(9));
  });

  it('número divisível por 5 e verifique se o retorno é buzz', () =>{
    expect('buzz').toBe(fun.myFizzBuzz(25));
  });

  it('número que não é divisível por 3 ou 5 e verifique se o retorno é o próprio número ', () =>{
    expect(7).toEqual(fun.myFizzBuzz(7));
  });

  it('retorna false caso num não seja um número', () =>{
    expect(false).toEqual(fun.myFizzBuzz('7'));
  });
});

describe('encode', () => {
it('encode e uma função', () => {
  expect(typeof fun.encode).toEqual('function');
});

it(' as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
  expect('1 2 3 4 5').toEqual(fun.encode('a e i o u'));
});

it(' as consoantes não são encriptadas', () => {
  expect('1 2 3 4 5').not.toEqual(fun.encode('d g h v y'));
});

it('verificar o tamanho da strings de entrada e saida', () => {
  const str = ('4l1 M5nd4').length;
  const strFun = fun.encode('Ola Mundo');
  expect(str).toEqual(strFun.length);
});
});

describe('decode', () => {
  it('encode e uma função', () => {
    expect(typeof fun.decode).toEqual('function');
  });

  it('números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
    expect('a e i o u').toEqual(fun.decode('1 2 3 4 5'));
  });
  
  it(' as consoantes não são convertidos', () => {
    expect('r t g x d').not.toEqual(fun.decode('1 2 3 4 5'));
  });
  
  it('verificar o tamanho da strings de entrada e saida', () => {
    const str = ('Ola Mundo').length;
    const strFun = fun.decode('4l1 M5nd4');
    expect(str).toEqual(strFun.length);
  });
  });

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(fun.techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof fun.techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(fun.techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(fun.techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(fun.hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof fun.hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(fun.hydrate('1 cerveja')).toBe('1 copo de água');
    expect(fun.hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(fun.hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(fun.hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(fun.hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

describe('searchEmployee', () => {
  it('teste para ver a função existe', () => {
    expect(fun.searchEmployee).toBeDefined();
  });
  
})