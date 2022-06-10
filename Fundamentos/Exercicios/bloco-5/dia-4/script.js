
  window.onload = function() {
  let corDeFundo = prompt('Qual a cor de fundo');
  sessionStorage.setItem('corFundo', corDeFundo);

  let corDetexto = prompt('Qual a cor do Texto');
  sessionStorage.setItem('corTexto', corDetexto);

  let tamanhoFonte = prompt('Qual o tamanho da fonte em px');
  sessionStorage.setItem('tamanhoFonte', tamanhoFonte);

  let fonte = prompt('Qual a fonte da letra');
  sessionStorage.setItem('fonte', fonte);

  let espaco = prompt('Qual o espaçamento entre as linhas');
  sessionStorage.setItem('espaco', espaco);

  // console.log(sessionStorage.getItem('corFundo'));
  // console.log(sessionStorage.getItem('corTexto'));
  // console.log(sessionStorage.getItem('tamanhoFonte'));
  // console.log(sessionStorage.getItem('fonte'));
  console.log(sessionStorage.getItem('espaco'));

  



  document.body.style.backgroundColor = sessionStorage.getItem('corFundo');
  document.querySelectorAll('.text')[0].style.fontSize = sessionStorage.getItem('tamanhoFonte');
  document.querySelectorAll('.text')[1].style.color = sessionStorage.getItem('corTexto');
  document.querySelectorAll('.text')[0].style.color = sessionStorage.getItem('corTexto');
  document.querySelectorAll('.text')[1].style.fontFamily = sessionStorage.getItem('fonte');
  document.querySelectorAll('.text')[1].style.lineHeight = sessionStorage.getItem('espaco');
  };