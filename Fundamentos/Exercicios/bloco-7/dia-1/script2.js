//1
fatorial = (num) => {
let numero = 1;
  for(index = num; index > 1; index -= 1){
  numero = numero * index;
  }
return numero;
}
// console.log(fatorial(0));

//2
maiorPalavra = (frase) => {
  const palavras = frase.split(' ');
  let big = '';
  for( let i of palavras) {
    if (i.length > big.length) {
      big = i;
    }
  }
  return big;
}
// console.log(maiorPalavra('ola teste oi como marcos vicomdesck'));

//3
contador = () => {
  const btn = document.querySelector('.btn');
  const p = document.querySelector('.p');
  let clickCount = 0
  btn.addEventListener('click', () => {
  clickCount += 1;
  p.innerHTML = clickCount;
  })

}
// contador();

//4 
const arr = ['Html', 'JavaScript', 'Css', 'Lint', 'GitHub'];
trocaX = (parm) => {
let str = 'Tryber x aqui!';
let newStr = str.replaceAll('x', parm);
return newStr;

}

funcao = (nome) => {
  const array = arr.sort();
  console.log(`${trocaX(nome)} \n\ Minhas cinco principais habilidades são:\n\ ${array}`);
}
funcao('marcos');