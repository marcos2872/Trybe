const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addObg = (obj, ch, value) => obj[ch] = value;
addObg(lesson2, 'turno', 'Noite');

const objKeys = (obj) => Object.keys(obj);
// console.log(objKeys(lesson1));

const tamObj = (obj) => Object.keys(obj).length;
// console.log(tamObj(lesson3));

const valueObj = (obj) => Object.values(obj);
// console.log(valueObj(lesson2));

const allLessons = {};
const alllessons = (all) => {
  allLessons.lesson1 = Object.assign(lesson1);
  allLessons.lesson2 = Object.assign(lesson2);
  allLessons.lesson3 = Object.assign(lesson3);
}
alllessons(allLessons);
// console.log(allLessons);

allStudants = (obj) => {
  let estu = 0
for(const i in obj){
estu += obj[i].numeroEstudantes;
}
return estu;
}
// console.log(allStudants(allLessons));

const getValueByNumber = (obj, num) => Object.entries(obj)[num][1];

// console.log(getValueByNumber(lesson1, 1));

const verfica = (obj, key, value) => {
  const x = Object.entries(obj);
  for(let i of x){
    if (i[0] === key && i[1] === value) {
     return console.log(true); 
    }
  }
  return console.log(false); 
}
verfica(lesson3, 'turno', 'noite');
