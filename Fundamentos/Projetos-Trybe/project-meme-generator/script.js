function inputText() {
  const input = document.querySelector('#text-input');
  input.addEventListener('keyup', () => {
    const p = document.querySelector('#meme-text');
    p.innerText = input.value;
  });
}
inputText();

function addImage() {
  const inputImg = document.querySelector('#meme-insert');
  inputImg.addEventListener('change', (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      const output = document.querySelector('#meme-image');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  });
}
addImage();

function border() {
  const bord = document.querySelectorAll('button');
  for (let i = 0; i < bord.length; i += 1) {
    bord[i].addEventListener('click', () => {
      const section = document.querySelector('#meme-image-container');
      const element = bord[i];
      const cssObj = window.getComputedStyle(element);
      const cssColor = cssObj.getPropertyValue('border');
      section.style.border = cssColor;
    });
  }
}
border();

function meme() {
  const img = document.querySelectorAll('.img');
  for (let i = 0; i < img.length; i += 1) {
    img[i].addEventListener('click', () => {
      const imgSection = document.querySelector('#meme-image');
      const atri = img[i].getAttribute('src');
      imgSection.setAttribute('src', atri);
    });
  }
}
meme();
