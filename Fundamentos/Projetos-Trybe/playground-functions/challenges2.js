// Desafio 11
function generatePhoneNumber(array) {
  let cont = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let rept = 0;
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    cont[array[index]]++;
    if (cont[array[index]] === 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let numero = '';
  numero += `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  numero += `-${array[7]}${array[8]}${array[9]}${array[10]}`;
  return numero;
}
generatePhoneNumber([5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0]);

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let test1 = lineA + lineB;
  let test2 = Math.abs(lineA - lineB);
  if (test1 > lineC && test2 < lineC) {
    return true;
  }
  return false;
}
console.log(triangleCheck(5, 5, 10));

// Desafio 13
function hydrate(string) {
  let num = string.match(/(\d+)/g);
  let n = [];
  for (let index = 0; index < num.length; index += 1) {
    n.push(parseInt(num[index]));
  }
  let agua = 0;
  for (let i of n) {
    agua = agua + i;
  }
  if (agua > 1) {
    return `${agua} copos de água`;
  }
  return `${agua} copo de água`;
  
}
hydrate('1 cachaça, 5 cervejas e 1 copo de vinho');

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
