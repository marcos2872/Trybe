//1
// function calculoArea (base, altura){
//   let area = {
//     area: base * altura,
//     perimetro: (base * 2) + (altura * 2),
//   }
//   return area;

// } 
// console.log(calculoArea(2 , 4));

//2
// function parImpar(array){
//   let numPar = [];
//   let numImpar = [];
//    for (let index of array){
//      if (index % 2 == 0) {
//        numPar.push(index);
//      }else {
//        numImpar.push(index);
//      }
//    }
//    let resposta = {
//      Pares: numPar.length -1,
//      Impares: numImpar.length -1
//    }
//    return resposta
//  }
//  console.log(parImpar([1, 5, 6, 14, 15, 20, 28, 30, 80, 90, 100]));
 
 //3
 
function string(word, ending){
  let str1 = ending.length;
  let str2 = word.substr(-str1);
  if (ending === word.substr(-str1)){
    return true;
  }else {
    return false;
  }
} console.log (string('trybe', 'be'));