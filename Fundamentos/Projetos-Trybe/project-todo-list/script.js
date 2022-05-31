const listaOrdenada = document.querySelector('#lista-tarefas');

function liBgColor() {
  listaOrdenada.addEventListener('click', (event) => {
    removeBgColor();
    event.target.classList.add('libgcolor');
  });
}

function removeBgColor() {
  const listaO = document.querySelectorAll('.libgcolor');
  for (let i = 0; i < listaO.length; i += 1) {
    listaO[i].classList.remove('libgcolor');
  }
}

function riscarLista() {
  listaOrdenada.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

function apagaLista() {
  const btApaga = document.querySelector('#apaga-tudo');
  btApaga.addEventListener('click', () => {
    listaOrdenada.textContent = null;
  });
}
apagaLista();

function apagaFinalizados() {
  const apFinalizado = document.querySelector('#remover-finalizados');
  apFinalizado.addEventListener('click', () => {
    const completas = document.querySelectorAll('.completed');
    for (let index = 0; index < completas.length; index += 1) {
      listaOrdenada.removeChild(completas[index]);
    }
  });
}
apagaFinalizados();

function salvarTarefas() {
  const btSalver = document.querySelector('#salvar-tarefas');
  btSalver.addEventListener('click', () => {
    const listaSalva = [];
    const lista = document.querySelector('#lista-tarefas').children;
    for (let index = 0; index < lista.length; index += 1) {
      listaSalva.push({
        nome: lista[index].innerText,
        class: lista[index].className,
      });
    }
    localStorage.setItem('seção', JSON.stringify(listaSalva));
  });
}

function adicionaTarefa() {
  const tarefa = document.querySelector('#texto-tarefa');
  const botaoAddTarefa = document.querySelector('#criar-tarefa');
  tarefa.innerText = 'Escreva uma tarefa';
  botaoAddTarefa.addEventListener('click', () => {
    const li = document.createElement('li');
    li.id = 'lista';
    listaOrdenada.appendChild(li).innerText = tarefa.value;
    tarefa.value = '';
  });
  liBgColor();
  riscarLista();
  salvarTarefas();
}
adicionaTarefa();

function restauraLista() {
  const secaoRestaurada = JSON.parse(localStorage.getItem('seção'));
  if (secaoRestaurada) {
    for (let index = 0; index < secaoRestaurada.length; index += 1) {
      const li = document.createElement('li');
      li.innerText = secaoRestaurada[index].nome;
      li.className = secaoRestaurada[index].class;
      listaOrdenada.appendChild(li);
    }
  }
}
window.onload = () => {
  restauraLista();
};

function moverLista() {
  const moveUp = document.querySelector('#mover-cima');
  const moveDown = document.querySelector('#mover-baixo');
  moveUp.addEventListener('click', () => {
    const liBgC = document.querySelector('.libgcolor ');
    if (liBgC && liBgC.previousElementSibling) {
      liBgC.previousElementSibling.insertAdjacentElement('beforebegin', liBgC);
    }
  });
  moveDown.addEventListener('click', () => {
    const liBgC = document.querySelector('.libgcolor ');
    if (liBgC && liBgC.nextElementSibling) {
      liBgC.nextElementSibling.insertAdjacentElement('afterend', liBgC);
    }
  });
}
moverLista();

function removeBgC() {
  const Apg = document.querySelector('#remover-selecionado');
  Apg.addEventListener('click', () => {
    const liBgC = document.querySelector('.libgcolor ');
    listaOrdenada.removeChild(liBgC);
  });
}
removeBgC();
