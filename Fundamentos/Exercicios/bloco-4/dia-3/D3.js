// let fruits = [3, 4, 10, 1, 12];
// let soma = 0

// for (let index of fruits){
//  soma = soma + index
// }   

// if(soma > 15){
//   console.log('seu valor e:', soma);
// } else{
//   console.log('valor manor que 16');
// }

//1 
// let mult = 1;
// for (let index = 10; index >= 1; index -=1){
//   mult = mult * index;
//   console.log(index);
// } 
// console.log(mult);

//2
//  let nome = 'trybe';
 
// //  let nomeI = nome.split('').reverse().join('');
// //  console.log(nomeI);


// let nom = ''
// for(let index = nome.length - 1; index >= 0; index -= 1){
// nom += nome[index] 
// }
// console.log(nom);


//3
// let array = ['javascript', 'olhapessoaltudo', 'java', 'python', 'html', 'testetestetesetets', 'css'];

// for (let index = 1; index < array.length; index += 1){
//   for (let index2 = 0; index2 < index; index2 +=1){
//     if (array[index] > array[index2]){
//       let aux = array[index];
//       array[index] = array[index2];
//       array[index2] = aux;
//     }
//   }
//   }
//   console.log(array);
// console.log(array[0], array[6]);



//   //4 
let num2 = []
for (let index = 1; index <= 50; index +=1){
  for( let index2 = index; index2 >= 1; index2 -=1 ){
    if (index / ((index - 1) * index2 + 1)){
      num2.push()
    }
  }
}
console.log(num2);
  
   

// Bonus 

//1 
//  let n = 5

// for (let i = 0; i < n; i += 1){
//  let linha = '';
//   for (let j = 0; j < n; j += 1){
//  linha += '*'
//   }
//   console.log(linha);
// } 

//2
//  let n = 5;
//  let linhaDeAsteriscos = '';
//  for (let linha = 0; linha < n; linha +=1){

//   for(let asteriscos = 0; asteriscos < linha; asteriscos += 1){
//   }
//   console.log(linhaDeAsteriscos += '*');
//  }

//3
// let n = 5;
// let linhaA = '';
// for()