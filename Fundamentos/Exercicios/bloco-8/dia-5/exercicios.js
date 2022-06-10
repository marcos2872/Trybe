//1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  //  console.log(rectangleArea(...rectangle)) // altere a chamada da funcao rectangleArea
  // console.log(rectangle[0] * rectangle[1]);
});

//2
function somaParametros(...paran) {
  return paran.reduce((acc, curr) => acc + curr, 0)
}
 console.log(somaParametros(2,3,5,9,1,6,4,8,525,2,74,5));

//3
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const personLikes = (paran) => {
 const  {name, age, likes: likes} = paran 
 return `${name} is ${age} years old and likes ${likes.join(', ')}.`;
}

// console.log(personLikes(alex)); 
// console.log(personLikes(gunnar));

//4
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPeople = () => {
 return people.filter(({ nationality , bornIn }) => nationality === 'Australian' && bornIn >= 1901 && bornIn <= 2000 );
}
// console.log(filterPeople());


//5
const myList = [1, 2, 3];
const troca = ([a, b, c]) => [c, b, a]
// console.log(troca(myList));


//6
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const obj = (...arr) => {
  const obj = {};
arr.forEach(element => {
  const [modelo, marca , ano] = element;
 obj[marca] = {modelo: modelo, ano: ano,}
 
})
return obj
}
// console.log(obj(palio, shelbyCobra, chiron));

// const toObject = ([name, brand, year]) => ({ name, brand, year });
// console.log(toObject(palio));


//7
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

const shipLength = (arr) => {
  let s = '';
 arr.forEach(({name, length, measurementUnit}) => s += `${name} is ${length} ${measurementUnit} long.\n`)
 return s 
}

// console.log(shipLength(ships));


//8
const greet = (nome, comprimento = 'Hi') => {

 return `${comprimento} ${nome}!`;
 
}
// console.log(greet('marcos'));


//9
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const seasons = (element) => {
  const {spring, summer, autumn, winter} = element;
  return [...spring, ...summer, ...autumn, ...winter];
}
// console.log(seasons(yearSeasons));