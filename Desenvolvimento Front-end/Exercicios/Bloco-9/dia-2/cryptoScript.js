const cryptoM = `https://api.coincap.io/v2/assets`;
const convert = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'

// const fatchCrypto = async () => {
//   try{
//     const response = await fetch(cryptoM);
//     const { data } = await response.json()
//     const ul = document.querySelector('#ul');
//     data.forEach(({ name, symbol, priceUsd }) => {
//       const li = document.createElement('li');
//       li.innerHTML = `${name} (${symbol}): ${priceUsd}USD`
//       li.style.margin = '2%'
//       ul.appendChild(li)
//     })
//   }
//   catch(error) {
//     console.log(`Erro ${error.message}`);
//   }
// }

const fatchCrypto = async () => {
  try {
    const response2 = await fetch(convert);
    const { usd } = await response2.json();

    const response = await fetch(cryptoM);
    const { data } = await response.json();

    const ul = document.querySelector('#ul');

    data.forEach(({ name, symbol, priceUsd }) => {
      const li = document.createElement('li');
      li.innerHTML = `${name} (${symbol}): ${priceUsd + usd.brl}BRL`
      li.style.margin = '2%'
      ul.appendChild(li)
    })
  }
  catch (error) {
    console.log(`Erro ${error.message}`);
  }
}

fatchCrypto();
