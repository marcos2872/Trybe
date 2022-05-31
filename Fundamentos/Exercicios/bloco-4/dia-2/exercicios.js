// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);


///////////////////////////////////////////////////////////

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio =  menu[2];

// console.log(indexOfPortfolio);

///////////////////////////////////////////////////////////////

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

//  menu.push ('Contato') 

// console.log(menu); 

/////////////////////////////////////////////////////////////

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for( let index =0; index < groceryList.length; index += 1){
//  console.log( groceryList[index])
// }

///////////////////////////////////////////////////////////////


// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let nam of names){

//   console.log(nam)

// }

////////////////////////////////////////////////////////////////

// let numbers = [5, 9, 1, 3, 19, 70, 8, 2, 35, 27, 100, 200 ];

//1
// for (let num of numbers){
//   console.log(num)
// }


//2
// let soma  = 0
// for (let index of numbers) {
// soma = soma + index
// }
// console.log(soma)

//3
// let soma  = 0
// let total = numbers.length
// for (let index of numbers) {
// soma = soma + index
//  }
//  let media = soma / total 
//  console.log(media);


//4
//  let soma  = 0
// let total = numbers.length
// for (let index of numbers) {
// soma = soma + index
//  }
//  let media = soma / total  
//  if (media >20){
//  console.log('valor maior que 20')
//  }
//  else{
//    console.log("valor menor ou igual a 20")
//  }
 
//5
// let maiorValor =0
// for(let index = 0; index < numbers.length; index += 1){
// let num = numbers[index]
// if ( num > maiorValor){
//   maiorValor = num
// }
// } 
// console.log(maiorValor);


//6
// let numeroPar = 0
// let numeroImpar = 0
// for(let index of numbers){
//  if (index % 2 == 0 ){
//    numeroPar = numeroPar + index
//  } 
//  else{ 
//  numeroImpar = numeroImpar + index 
//  }
// } 
// console.log(numeroImpar);


//7
// let maiorValor = 9000
// for(let index = 0; index < numbers.length; index += 1){
// if ( numbers[index] < maiorValor){
//   maiorValor = numbers[index]
// }
// }
// console.log(maiorValor);

//8 
// let num = []
// for(let index = 1; index <= 25; index += 1){
// num.push(index)
// }
// console.log(num);


//9
// let num = []
// for(let index = 1; index <= 25; index += 1){
// num.push(index / 2)
// }
// console.log(num);



//Bonus
//1

// for (let index = 1; index < num.length; index += 1){
  //   for (let index2 = 0; index2 < index; index2 +=1){
    //     if (num[index] < num[index2]){
      //       let aux = num[index];
      //       num[index] = num[index2];
      //       num[index2] = aux;
      //     }
//   }
// }
// console.log(num);
let num = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 2 
for (let index = 1; index < num.length; index += 1){
  for (let index2 = 0; index2 < index; index2 +=1){
    if (num[index] > num[index2]){
      let aux = num[index];
      num[index] = num[index2];
      num[index2] = aux;
    }
  }
}
console.log(num);

//3

// let numFibo = []
 
// for (let index = 0; index < num.length; index +=1){
//   if ( index + 1 < num.length){
//     numFibo.push(num[index] * num[index + 1]);
//   } else {
//     numFibo.push(num[index] * 2);
//   }

// }
// console.log(numFibo);