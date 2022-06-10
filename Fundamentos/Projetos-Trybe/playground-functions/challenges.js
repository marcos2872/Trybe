// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}
compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
calcArea(10, 50);

// Desafio 3
function splitSentence(frase) {
  let fraseSep = frase.split(' ');
  let array = fraseSep;
  return array;
}
console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(array) {
  let ultimo = array.length - 1;
  let concat = `${array[ultimo]}, ${array[0]}`;

  return concat;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  for (let index = 0; index < wins; index += 1) {
    pontos += 3;
  }
  for (let index2 = 0; index2 < ties; index2 += 1) {
    pontos += 1;
  }
  return pontos;
}
footballPoints(14, 8);

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let repet = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (maior < array[index]) {
      maior = array[index];
    }
  }
  for (let i of array) {
    if (maior === i) {
      repet += 1;
    }
  }
  return repet;
}
highestCount([0, 4, 4, 4, 9, 2, 1]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Tamanho = Math.abs(mouse - cat1);
  let cat2Tamanho = Math.abs(mouse - cat2);
  if (cat1Tamanho < cat2Tamanho) {
    return 'cat1';
  } else if (cat1Tamanho > cat2Tamanho) {
    return 'cat2';
  } else if (cat1Tamanho === cat2Tamanho) {
    return 'os gatos trombam e o rato foge';
  }
}
catAndMouse(5, 8, 6);

// Desafio 8
function fizzBuzz(array) {
  let str = [];
  for (let i of array) {
    if (i % 3 === 0 && i % 5 === 0) {
      str.push('fizzBuzz');
    } else if (i % 3 === 0 && i % 5 !== 0) {
      str.push('fizz');
    } else if (i % 5 === 0 && i % 3 !== 0) {
      str.push('buzz');
    } else {
      str.push('bug!');
    }
  }
  return str;
}
fizzBuzz([2, 15, 7, 9, 45]);

// Desafio 9
function encode(texto) {
  // let a = texto;
  // a = a.replace(/a/g, '1');
  // a = a.replace(/e/g, '2');
  // a = a.replace(/i/g, '3');
  // a = a.replace(/o/g, '4');
  // a = a.replace(/u/g, '5');
  // return a;
  let enc = '';
  for (let index = 0; index < texto.length; index += 1) {
    if (texto[index] === 'a') {
      enc += '1';
    } else if (texto[index] === 'e') {
      enc += '2';
    } else if (texto[index] === 'i') {
      enc += '3';
    } else if (texto[index] === 'o') {
      enc += '4';
    } else if (texto[index] === 'u') {
      enc += '5';
    } else {
      enc += texto[index];
    }
  }
  console.log(enc);
  return enc;
}
encode('hi there!');

function decode(texto) {
  // let b = texto;
  // b = b.replace(/1/g, 'a');
  // b = b.replace(/2/g, 'e');
  // b = b.replace(/3/g, 'i');
  // b = b.replace(/4/g, 'o');
  // b = b.replace(/5/g, 'u');
  // return b;
  let denc = '';
  for (let index = 0; index < texto.length; index += 1) {
    if (texto[index] === '1') {
      denc += 'a';
    } else if (texto[index] === '2') {
      denc += 'e';
    } else if (texto[index] === '3') {
      denc += 'i';
    } else if (texto[index] === '4') {
      denc += 'o';
    } else if (texto[index] === '5') {
      denc += 'u';
    } else {
      denc += texto[index];
    }
  }
  console.log(denc);
  return denc;
}
decode('h3 th2r2!');

// Desafio 10
function techList(array, name) {
  let arrayA = array.sort();
  let aux = [];
  if (array.length === 0) {
    return 'Vazio!';
  } else {
    for (let index = 0; index < arrayA.length; index += 1) {
      aux.push({
        tech: arrayA[index],
        name: name,
      });
    }
    return aux;
  }
}
console.log(techList([], 'Lucas'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
