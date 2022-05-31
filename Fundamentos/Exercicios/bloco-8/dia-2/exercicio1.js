const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  let nome;
  musicas.find(element => {
  if (element.id === id ) nome = element.title
  })
return nome;
}

console.log(findMusic('31031685'));



const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

function authorBornIn1947(array) {
  // return array.find((obj) => obj.author.birthYear === 1947).author.name


//   function verifica(obj) {
//   return obj.author.birthYear === 1947
// }
// return array.find(verifica).author.name


// let nome;
// array.forEach((element)=> {
//  if (element.author.birthYear === 1947) {
//    nome = element.author.name
//   };
// });
// return nome;
}
// console.log(authorBornIn1947(books));


function smallerName(array) {
  let nameBook = array[0].name;
array.forEach((element)=> {
if(element.name.length < nameBook.length){
  nameBook = element.name
}
  });

return nameBook;
}
// console.log(smallerName(books));


function getNamedBook(array) {
 return array.find(element => element.name.length === 26);

}
// console.log(getNamedBook(books));


function booksOrderedByReleaseYearDesc(array) {
  return array.sort((paramA, paramB) => paramA.author.birthYear - paramB.author.birthYear);

}
// console.log(booksOrderedByReleaseYearDesc(books));


function everyoneWasBornOnSecXX(array) {
  const verifica = (elemento) => {
    const ano = elemento.author.birthYear;
    ano < 2000 || ano > 1901
  }
  return array.every(verifica)
}
// console.log(everyoneWasBornOnSecXX(books));


function someBookWasReleaseOnThe80s(array) {
  const verifica = (elemento) => {
    const ano = elemento.releaseYear;
    ano < 1990 || ano >= 1980
  }
  return array.some(verifica)
}
// console.log(someBookWasReleaseOnThe80s(books));


function authorUnique(array) {
  return array.every(element =>  !array.some(el => el.author.birthYear === element.author.birthYear && el.author.name !== element.author.name)
  )
}
console.log(authorUnique(books));
