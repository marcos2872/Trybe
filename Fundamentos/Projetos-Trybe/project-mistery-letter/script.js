function gerarCarta() {
const input = document.querySelector('#carta-texto');
const botao = document.querySelector('#criar-carta');
const contador = document.querySelector('#carta-contador');
botao.addEventListener('click', function() {
  document.querySelector('#carta-gerada').textContent = '';
  let texto = input.value.split(' ');
  contador.innerText = texto.length;
  for(let i = 0; i < texto.length; i += 1){
   if(verificarTexto() === true){
const span = document.createElement('span');
span.innerText = texto[i];
document.querySelector('#carta-gerada').appendChild(span);
};
  };
sortSyle();
clickPalavra()
});
};
gerarCarta();



function verificarTexto() {
  const input = document.querySelector('#carta-texto');
  let texto = input.value;
  if(texto === '' || texto.trim() === ''){
   document.querySelector('#carta-gerada').innerText = 'Por favor, digite o conteúdo da carta.'
  }
  return true;
};



function sortSyle() {
    const span = document.querySelectorAll('span');
    for( let i of span){
    const estilo = ['newspaper', 'magazine1', 'magazine2'];
    const tamanho = [ 'medium', 'big', 'reallybig'];
    const rotacao = ['rotateleft', 'rotateright'];
    const inclinacao = ['skewleft', 'skewright'];
    let numEs = Math.floor(Math.random() * 3);
    let numTa = Math.floor(Math.random() * 3);
    let numRo = Math.floor(Math.random() * 2);
    let numIn = Math.floor(Math.random() * 2);
    i.className = `${estilo[numEs]} ${tamanho[numTa]} ${rotacao[numRo]} ${inclinacao[numIn]}`;
  }
};

function clickPalavra() {
  const span = document.querySelectorAll('span');
  for(let j of span){
    j.addEventListener('click', function() {
      const estilo = ['newspaper', 'magazine1', 'magazine2'];
      const tamanho = [ 'medium', 'big', 'reallybig'];
      const rotacao = ['rotateleft', 'rotateright'];
      const inclinacao = ['skewleft', 'skewright'];
      let numEs = Math.floor(Math.random() * 3);
      let numTa = Math.floor(Math.random() * 3);
      let numRo = Math.floor(Math.random() * 2);
      let numIn = Math.floor(Math.random() * 2);
      j.className = `${estilo[numEs]} ${tamanho[numTa]} ${rotacao[numRo]} ${inclinacao[numIn]}`;


    });
  };
};

