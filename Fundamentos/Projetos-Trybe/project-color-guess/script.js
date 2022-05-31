function numeroRGB(rgb) {
// const head = document.createElement('head');
// const tagP = document.createElement('p');
// tagP.innerText = `(${r}, ${g}, ${b})`;
// tagP.id = 'cor-em-rgb';
// tagP.style.backgroundColor = 'red'
// head.appendChild(tagP)
// document.body.appendChild(head);
const cor = document.querySelector('#rgb-color');
cor.innerHTML = rgb
};
// numeroRGB(23, 56, 89);

function ballColor() {
  for (let i = 0; i < 6; i += 1){
    const boll = document.createElement('div');
    boll.className = 'ball';
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    boll.style.backgroundColor = rgb;
    document.querySelector('#balls-color').appendChild(boll);
  };
};
ballColor()





const score = document.querySelector('#score');
let cont = 0;
score.innerText = `placar: ${cont}`;

function jogo(){
  let corDoJogo = '';
  const click = document.querySelectorAll('.ball');
  const p = document.querySelector('#answer');
  p.innerText = "Escolha uma cor";
  document.querySelector('#texto').appendChild(p);
  let numero = Math.floor(Math.random() * 6);
  let b = [];
  // let corGame = b[numero]['i']
  
  const bgcor = document.querySelectorAll('.ball');
  for(const j of bgcor){
    const cssObj = window.getComputedStyle(j);
    let bgColor = cssObj.getPropertyValue('background-color');
    // b.push({i:bgColor, });
    b.push(bgColor);
    corDoJogo = b[Number(numero)];
  };
  

for (const i of click) {
i.addEventListener('click', function(){
    const cssObj = window.getComputedStyle(i);
      let bgColor = cssObj.getPropertyValue('background-color');
      corGame = b[numero];
    if (b[numero] === bgColor){
      p.innerHTML =  "Acertou!";
      cont += 3;
      console.log(b[numero]);
    } else {
      p.innerHTML = "Errou! Tente novamente!";
    };
    // console.log(corGame);
    score.innerText = `placar: ${cont}`;
  });
};
numeroRGB(corDoJogo);
console.log(corDoJogo);
};
jogo();

function resetColor() {
const botaoReset = document.querySelector('#reset-game');
botaoReset.innerText = 'Resetar cor/jogo';
botaoReset.addEventListener('click', function() {
  document.querySelector('#balls-color').textContent = '';
  ballColor();
  jogo();
})

}
resetColor();