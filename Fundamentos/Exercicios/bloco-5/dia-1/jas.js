function trocaTexto(str , texto){
  document.getElementsByTagName(str)[0].innerText = texto;

}
trocaTexto('p' , 'trtrtrtrtrt');

console.log('dddd');

function trocaCor(color){
  document.getElementsByClassName(color)[0].style.backgroundColor = 'rgb(76,164,109)';

}
trocaCor('main-content');

function corcentro (cor , rgb){
  document.getElementsByClassName(cor)[0].style.backgroundColor = rgb;

}
corcentro('center-content', 'white');

function corri(clas, string){
  document.getElementsByClassName(clas)[0].innerText = string;
}
corri('title', 'Exercício 5.1 - JavaEscripit');

function maiuscula(tag, troca){
  document.getElementsByTagName(tag)[0].style.textTransform = troca;
}
maiuscula('p', 'uppercase');

function imp(teg){
  let i = document.getElementsByTagName(teg);
  console.log(i);
}
imp('p');