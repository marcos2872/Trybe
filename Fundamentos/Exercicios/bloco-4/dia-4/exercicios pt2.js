//1

// function palindromo(palavra) {
//   let pali = palavra.split('').reverse().join('');
//   if ( palavra === pali){
//     console.log(true);
//   }else{
//     console.log(false);
//   }
// }
// //  palindromo('oba')

//2//3
// function indiceMaior(array) {

//   for (let index = 1; index < array.length; index += 1){
//       for (let index2 = 0; index2 < index; index2 +=1){
//         if (array[index] > array[index2]){
//           let aux = array[index];
//           array[index] = array[index2];
//           array[index2] = aux;
//         }
//       }
//       }
//       let maior = array[0]
//      let menorIndex = array.length -1 
//      let menor = array[menorIndex]
//      console.log(maior, menor);
// }
// indiceMaior([10, 2, 5, 36, 21, 5, 9, 4, 0, 6, 200 ])

//4
//  function maiorPalavra(array) {
  
//   let maiorP = ''
//   for (let index = 0; index < array.length; index += 1) {
//     if ( maiorP.length <= array[index].length ) {
//       maiorP = array[index]
//     }
//   }
//    console.log(maiorP);
//  }
//  maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

//5
// function numeroR(array){
//   let comparador = [0];
//   let contador = 0;
//   let repetiu = 0;
//   for (let index = 0; index < array.length; index += 1){ 
//     for (let i =0; i < array.length; i += 1){
//       if( array[index] === array[i]){
//         contador ++;
//       } 

//     }
//     if (repetiu < contador){
//       repetiu = contador;
//       comparador = array[index];
//     }
//     contador = 0;
//   }
//   return comparador;
// }
// console.log(numeroR([2, 3, 2, 5, 8, 2, 3]));

//6 
// function somaNumero(N) {
//   let num = 0
//   for(let index = 1; index <= N; index += 1 ){
//    num += index;
//   }
//   console.log(num);
// }
// somaNumero(100);

//7
// function string(word, ending){
//   let str1 = ending.length;
//   let str2 = word.substr(-str1);
//   console.log(str1, str2);
//   if (ending === word.substr(-str1)){
//     return true;
//   }else {
//     return false;
//   }
  
// } console.log (string('joaofernando', 'fernan'));
