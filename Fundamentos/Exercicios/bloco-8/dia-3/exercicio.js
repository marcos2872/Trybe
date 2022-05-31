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

function formatedBookNames(array) {
return array.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`)
}
// console.log(formatedBookNames(books));


function nameAndAge(array) {
  const order = array.sort((a, b) => a.releaseYear - b.releaseYear);
  return order.map(element => ({age: 2022 - element.releaseYear, author: element.author.name}))
}
// console.log(nameAndAge(books));


function fantasyOrScienceFiction(array) {
  function verifica(arr) {
   return arr.genre === 'Ficção Científica' || arr.genre === 'Fantasia'
  }
  return array.filter(verifica)
}
// console.log(fantasyOrScienceFiction(books));


function oldBooksOrdered(array) {
  const verifica = array.filter((element) => (2022 - element.releaseYear) > 60 );
  return verifica.sort((a, b) => a.releaseYear - b.releaseYear);
};
// console.log(oldBooksOrdered(books));


function fantasyOrScienceFictionAuthors(array) {
  const verifica = array.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia');
  return verifica.map(el => el.author.name).sort();
};
// console.log(fantasyOrScienceFictionAuthors(books));


function oldBooks(array) {
  const verifica = array.filter((element) => (2022 - element.releaseYear) > 60 );
  return verifica.map(element => element.name);
}
// console.log(oldBooks(books));


function authorWith3DotsOnName(array) {
  return array.find((element) => element.author.name.split('.').length === 4).name;
}
console.log(authorWith3DotsOnName(books));