
function cirablocos(num) {
const sectionTabela = document.querySelector('#pixel-board');
for (let i = 0; i < num; i += 1 ){
  const sec = document.createElement('section');
  for (let j = 0; j < num; j += 1){
    const div = document.createElement('div');
    div.className = 'pixel';
    sec.appendChild(div);
  };
  sectionTabela.appendChild(sec);
};
};
cirablocos(5);





function trocaSelected() {
  const palet = document.querySelectorAll('.color');
  for (const i of palet) {
    i.addEventListener('click', function(element) {
      document.querySelector('.selected').classList.remove('selected');
      element.target.classList.add('selected');
    });
  };
};
trocaSelected();


function trocaCor() {
  const quadro = document.querySelectorAll('.pixel');
  for (const i of quadro) {
    i.addEventListener('click', function(event) {
      const element = document.querySelector('.selected');
      const cssObj = window.getComputedStyle(element);
      let bgColor = cssObj.getPropertyValue('background-color');
      console.log(bgColor);
      event.target.style.backgroundColor = bgColor;
    });
  };
};

trocaCor();

const btn = document.createElement('button');
function voltaParabranco() {
const quadro = document.querySelectorAll('.pixel');
const main = document.querySelector('.btn');
btn.id = 'clear-board';
btn.innerText = 'Limpar';
main.appendChild(btn);

  btn.addEventListener('click', function() {
    for (const i of quadro) {
      i.style.backgroundColor = 'white';
    };
  });
};
voltaParabranco();


function usuario() {
  const input = document.createElement('input');
  input.innerText = 'quantos quadros';
  input.id = 'board-size';
  input.type = 'number';
  input.min = 1
  const buton = document.createElement('button');
  buton.innerText = 'VQV';
  buton.id = 'generate-board';
  document.querySelector('.botao').appendChild(input);
  document.querySelector('.botao').appendChild(buton);

  buton.addEventListener('click', function(){
  const sectionTabela = document.querySelector('#pixel-board');
  sectionTabela.textContent = '';
  let numero = input.value;
  if ( numero == ''){
    return  alert('Board inválido!');
  }
  if(numero < 5){
    numero = 5;
  }
  if(numero > 50){
    numero = 50
  }
  cirablocos(numero)
  trocaCor();
  voltaParabranco();
  });
  };
  usuario();

  function rgb (){
    const cor = document.querySelectorAll('.color');
    for (let i = 1; i < cor.length; i += 1){
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      let rgb = `rgb(${r}, ${g}, ${b})`;
      cor[i].style.backgroundColor = rgb;
    };
  };
rgb();
