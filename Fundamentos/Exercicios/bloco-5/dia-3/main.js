function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//1
function diasDoMes(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
     16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const ul = document.querySelector('#days');
for(let i of dezDaysList){
  let day = document.createElement('li');
  day.innerText = i;
  day.classList.add('day');
  ul.appendChild(day);
  if ( i == 24 || i == 25 || i == 31){
    day.classList.add('holiday')
  }
  if (i == 4 || i == 11 || i == 18 || i == 25){
    day.classList.add('friday')
  }
}
};
diasDoMes();

//2

function feriados (Feriados){
  const div = document.querySelector('.buttons-container');
let botao = document.createElement('button');
botao.innerText = Feriados
botao.id = 'btn-holiday';
div.appendChild(botao);

};
feriados( "Feriados");


//3

function holidai(){
const butonF = document.querySelector('#btn-holiday');
butonF.addEventListener('click', feri );
};
holidai();

function feri() {
  const feriado = document.querySelectorAll('.holiday');
  for (let i of feriado){
    if(i.style.backgroundColor === 'green'){
      i.style.background = "rgb(238,238,238)";
      i.style.borderRadius = '0%'
    } else{
      i.style.background = "green";
      i.style.borderRadius = '50%'
    }
  }
};

//4

function sex(Sextafeira){
const bot = document.createElement('button');
bot.innerText = Sextafeira;
bot.id = "btn-friday"
document.querySelector('.buttons-container').appendChild(bot)
};
sex("Sexta-feira");


//5

function finaldeSemana(){
const bot = document.querySelector('#btn-friday');
bot.addEventListener('click', trocaTexo );

};
finaldeSemana();

 function trocaTexo(){
  const feriado = document.querySelectorAll('.friday');
  const arr = feriado;
  for (let i = 0; i < feriado.length; i += 1){
    if( feriado[i].innerText == "Sexta-feira"){
      feriado[i].innerText = Number(feriado[i].previousElementSibling.innerText) + 1;
      
    } else{
      feriado[i].innerText = "Sexta-feira";
    }
  }
 console.log(arr);
 }


 //6 

 function mouse(){
 const li = document.querySelectorAll('.day');
 for (let j of li){
   j.addEventListener('mouseover', zoomin);
 }
 for (let r of li){
  r.addEventListener('mouseout', zoomof);
 }
 };
 mouse();
function zoomin(event){
   event.target.style.fontSize = '35px';
  // event.target.style.transform.scale(2, 2);
  };
  function zoomof(event){
    // event.target.style.fontSize = '20px';
    event.target.style.fontSize = '20px';
    };


    //7

    function insputTexto(string){
      const inputTexto = document.querySelector('.my-tasks');
      const str = document.createElement('span');
      str.innerText = string;
      inputTexto.appendChild(str);
      console.log(str);
     
    };
    insputTexto('cozinhar');

    //8 

    function legendacor(cor){
      const task = document.createElement('div');
      task.className = 'task';
      task.style.backgroundColor = cor;
      document.querySelector('.my-tasks').appendChild(task);
    };
    legendacor('green');
    

    //9

    taskQuery = document.querySelector('.task');
    taskQuery.addEventListener('click', function(event){
    if (taskQuery.className == 'task'){
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task'
    }
    })

//10
const selectedtask = document.getElementsByClassName('task')[0];
const days = document.querySelectorAll('.day');

for (let i of days){
i.addEventListener('click', color)
}
function color (event){
  if (selectedtask.classList.contains('selected')) {
if (event.target.style.color == 'green'){
  event.target.style.color = '#777'
} else {
  event.target.style.color = 'green'
}
  }
}


//Bonus
const buttonAdd = document.querySelector('#btn-add');
const inputText = document.querySelector('#task-input');
const ulCompromissos = document.querySelector('.task-list');
buttonAdd.addEventListener('click', function clicar(){
 let texto = inputText.value;
if (texto.length == 0){
  return alert('erro');
}
  const li = document.createElement('li');
  li.innerText = texto;
ulCompromissos.appendChild(li);

})
inputText.addEventListener('keypress', function(event){
  if (event.key === 'Enter'){
    let texto = inputText.value;
    if (texto.length == 0){
      return alert('erro');
    }
      const li = document.createElement('li');
      li.innerText = texto;
    ulCompromissos.appendChild(li);
   }
  
})




