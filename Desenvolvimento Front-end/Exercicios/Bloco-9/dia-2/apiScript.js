const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  try {
    const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    };
    const resposta = await fetch(API_URL, myObject);
    const data = await resposta.json();
    document.querySelector('#jokeContainer').innerText = data.joke
  }
  catch (erro) {
    document.querySelector('#jokeContainer').innerText =`Algo deu errrado ${erro.message}`;
  }
};

window.onload = () => fetchJoke();
