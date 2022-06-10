function exer1(tt) {
  let a = document.querySelector("body");
  let element = document.createElement("h1");
  element.innerText = tt;
  a.appendChild(element);
  return element;
}
 exer1("Exercício 5.2 - JavaScript DOM");



function exer2() {
  let bod = document.querySelector("body");
  let tagm = document.createElement("main");
  tagm.className = "main-content";
  bod.appendChild(tagm);
  return tagm;
}
exer2();

function exer3() {
  let c = document.querySelector(".main-content");
  let sec = document.createElement("section");
  sec.className = "center-content";
  c.appendChild(sec);
  return sec;
}
exer3();

function exer4() {
  let d = document.getElementsByClassName("center-content")[0];
  let par = document.createElement("p");
  par.innerText = "oioioioioioioioiioioioii";
  d.appendChild(par);
  return par;
}
exer4();

function exer5() {
  let e = document.querySelector(".main-content");
  let sect = document.createElement("section");
  sect.className = "left-content";
  e.appendChild(sect);
  return sect;
}
exer5();

function exer6() {
  let f = document.querySelector(".main-content");
  let sect2 = document.createElement("section");
  f.appendChild(sect2).className = "right-content";
}
exer6();

function exer7() {
  let g = document.querySelector(".left-content");
  let img = document.createElement("img");
  img.src = "https://picsum.photos/200";
  g.appendChild(img).className = "small-image";
}
exer7();

function exer8() {
  let num = [
    "um",
    "dois",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez",
  ];
  let h = document.querySelector(".right-content");
  let list = document.createElement("ul");
  for (let i of num) {
    let list1 = document.createElement("li");
    list1.innerText = i;
    list.appendChild(list1);
  }
  h.appendChild(list);
  return list;
}
exer8();

function exer9() {
  let z = document.querySelector(".main-content");
  let add = 0;
  for (let index = 0; index < 3; index += 1) {
    let h = document.createElement("h3");
    add = z.appendChild(h);
  }
  return add;
}
exer9();

function exer10(){
let addcoass = document.querySelector('h1');
addcoass.className = 'title';
return addcoass;

}exer10();

function exer11(){
let addclass = document.querySelector('h3');
addclass.className = 'description';

}exer11();
 
function exer12(){
  let rm = document.querySelector('.main-content');
  let tg = document.querySelector('.left-content');
rm.removeChild(tg);
return rm;

}exer12();

function exer13(){
let sty = document.querySelector('.right-content');
sty.style.margin = 'auto';
return sty;

}exer13();

function exer14(){
let cor = document.querySelector('.center-content');
cor.style.backgroundColor = 'green';
  return cor;

}exer14();

function exer15(){
let clas = document.querySelector('ul');
clas.removeChild(clas.lastElementChild);
return clas;

}exer15();
exer15();