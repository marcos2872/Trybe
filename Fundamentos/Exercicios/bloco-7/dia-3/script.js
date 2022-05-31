function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(texto) {
  let a = texto;
  a = a.replace(/a/g, '1');
  a = a.replace(/e/g, '2');
  a = a.replace(/i/g, '3');
  a = a.replace(/o/g, '4');
  a = a.replace(/u/g, '5');
  return a;
}

function decode(texto) {
  let b = texto;
  b = b.replace(/1/g, 'a');
  b = b.replace(/2/g, 'e');
  b = b.replace(/3/g, 'i');
  b = b.replace(/4/g, 'o');
  b = b.replace(/5/g, 'u');
  return b;
}

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

const searchEmployee = (id) => {
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];
  for(const el of professionalBoard) {
    if (el.id == id) {
      const {id, ...rest} = el 
      return rest
    }
  }
  // console.log('ID não identificada'); 
};
console.log(searchEmployee('5569-4'));

module.exports = {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee};
