
const Employees = (nome) => {
  const email = nome.split(' ').join('_')
  return `Nome: ${nome}, Email: ${email}@trybe.com `

}

const newEmployees = (ids) => {
  const employees = {
    id1: ids('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: ids('Luiza Drumond') ,// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: ids('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
}

// console.log(newEmployees(Employees));


// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número 
// aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se 
// o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string 
// (Ex: "Tente novamente" ou "Parabéns você ganhou")
const numeroAP = (mynum, num) => mynum === num

const retornaNA = (nu, param) => {
  const num = parseInt((Math.random() * 5) + 1)
  // const numeroEs(param, num) = param;
   return param(nu, num) ? `Parabéns você ganhou` : `Tente novamente`;
}

// console.log(retornaNA(2, numeroAP));


// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de r
// espostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a 
// contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificacao = (c, a) => {
  let cont = 0;
 for(let i = 0; i < a.length; i += 1) {
   if(a[i] !== 'N.A') {
   if(a[i] === c[i]) cont += 1;
   if(a[i] !== c[i]) cont -= 0.5;
   }
 }
 return cont;
}

const hof = (param1, param2, param3) => {
  const resp = param3(param1, param2);
  
  return `A nota do aluno e ${resp}`;
}

// console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, verificacao));