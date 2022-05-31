function local() {
  const localViagem = document.querySelectorAll(".local");
  for (let index = 0; index < localViagem.length; index++) {
    localViagem[index].addEventListener("click", (event) => {
      localV = event.target.value;
      // console.log(localV);
    });
  }
}
local();
let localV = "";

let ofe = "";
let con = "";
function checkbox() {
  const ofertas = document.querySelector("#ofertas");
  const condi = document.querySelector("#condicao");
  if (ofertas.checked) {
    ofe = "sim";
  } else {
    ofe = "não";
  }
  if (condi.checked) {
    con = "sim";
  } else {
    con = "não";
  }
}

function salvar() {
  const nome = document.querySelector("#nomeC");
  const email = document.querySelector("#e-mail");
  const data = document.querySelector("#data");
  const texto = document.querySelector("#texto");
  const condi = document.querySelector("#condicao");
  const btnenviar = document.querySelector("#enviar");

  btnenviar.addEventListener("click", (event) => {
    if (nome.value.length < 10 || nome.value.length > 40) {
      return alert("Dados Inválidos");
    }
    if (email.value.length < 10 || email.value.length > 50) {
      return alert("Dados Inválidos");
    }
    if (!condi.checked) {
      return alert("Dados Inválidos");
    }

    checkbox();
    let arr = [];
    arr.push({
      nome: nome.value,
      email: email.value,
      data: data.value,
      texto: texto.value,
      ofertas: ofe,
      utilizarFotos: con,
      local: localV,
    });
    localStorage.setItem("seção", JSON.stringify(arr));
    console.log(arr);

    alert(
      "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
    );

    event.preventDefault();
  });
}
salvar();


