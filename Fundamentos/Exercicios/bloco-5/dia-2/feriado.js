/*
17 - Jogo do par ou ímpar
Lúcio e Ana estão brincando de PAR ou ÍMPAR. 
O algoritmo irá receber os seguinte parâmetros:
* lucioFingers = número de dedos que Lúcio mostrou;
* anaFingers = número de dedos que Ana mostrou;
* even = identificador de quem gritou PAR sendo: 1 para Lucio e 0 para Ana.
Tendo a informação de quem gritou par e o número de dedos estendidos de cada pessoa.
Exemplo:
lucioFingers = 3,
anaFingers = 2,
even = 1
Então:
3 + 2 = 5 (Ímpar)
No caso acima, Ana venceu.
Em caso de vitória de Ana retorne a mensagem no seguinte formato:
------------
"Ana venceu"
------------
Caso o contrário retorne:
--------------
"Lúcio venceu"
--------------
*/
function oddOreEven(lucioFingers, anaFingers, par){
  // Desenvolva seu código nessa função
  const escolha = {
  lucio: 1,
  ana: 0
  }
  let quemJogouPar;
  let quemJogouImpar;
  if (escolha.lucio === par) {
  quemJogouPar = 'Lucio';
  quemJogouImpar = 'Ana'
  } else {
  quemJogouPar = 'Ana';
  quemJogouImpar = 'Lucio'; 
  }

if ((lucioFingers + anaFingers) % 2 === 0) {
return quemJogouPar + ' venceu';
}

return quemJogouImpar + ' venceu'; 
}

// console.log(oddOreEven(3, 4, 1)); 

/*
09 - Incluído nos arrays
Escreva um algoritmo que irá receber dois array a e b, retorne um novo array com os 
elementos que se repetem em a e b, se não houver elemento repetidos, retorne um array vazio.
Por exemplo:
--------------------------------------------------------------------------------
Entradas:
a = [1, 2, 3 ], b = [4, 2, 4 ]
Saída:
[2]
--------------------------------------------------------------------------------
Obs: Não utilize o includes, você deve encontrar os valores utilizando 2 for's.
*/
function includesArrays(a, b){
  let arr =[];
  for (let index of a){
    for (let index2 of b){
      if(index === index2){
        arr.push(index);
      }
    }
  }
  return arr;
} 
// console.log(includesArrays([4, 4, 5 ],[6, 1, 2, 4, 8, 9, ]));



/*
04 - Quem é a pessoa mais velha?
Dado um array de pessoas, escreva um algoritmo que identifique 
qual tem a maior idade e retorne o nome da pessoa e sua idade.
O array terá o seguinte formato:
people = [
  { name: 'Ramon', age: 35 },
  { name: 'José', age: 28 },
  { name: 'Amanda', age: 19 }
];
O retorno deve ser no seguinte formato:
---------------------------------
"x tem a maior idade com y anos."
---------------------------------
*/
const people = [
  { name: 'Ramon',
   age: 60,
  },
  { name: 'José',
   age: 70,
  },
  { name: 'Amanda',
   age: 80,
  }
];
function getOldPerson(arrPeople) {
  
  if(arrPeople[0].age > arrPeople[1].age && arrPeople[0].age > arrPeople[2].age){
    return `${arrPeople[0].name} tem a maior idade com ${arrPeople[0].age} anos`;
  }
  if(arrPeople[1].age > arrPeople[0].age && arrPeople[1].age > arrPeople[2].age){
    return `${arrPeople[1].name} tem a maior idade com ${arrPeople[1].age} anos`;
  }
  if(arrPeople[2].age > arrPeople[1].age && arrPeople[2].age > arrPeople[0].age){
    return `${arrPeople[2].name} tem a maior idade com ${arrPeople[2].age} anos`;
  }
  if(arrPeople[0].age === arrPeople[1].age && arrPeople[1].age === arrPeople[2].age){
  return 'todos tem a mesma idade';
  }
  return 'Firula';
} 
// console.log(getOldPerson(people));


const arr = [5, 6, 2, 8, 5, 6, 5, 1, 9];
let rep = 0;
for (let index of arr){
for (let ind of arr){
  if (index === ind){
  rep += ind;
  }
}
}
console.log(rep);