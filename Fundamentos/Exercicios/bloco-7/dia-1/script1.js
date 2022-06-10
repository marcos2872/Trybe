testingScope = (escopo) => {
  let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
  escopo === true ? console.log(`${ifScope}  ótimo, fui utilizada no escopo !`) 
  : console.log(elseScope);
}
  testingScope(true);

  //////////////////////////////////////////////////////////////////////////////////////////

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const ordena = (a ,b) => a - b;

  console.log(`Os números ${oddsAndEvens.sort(ordena)} se encontram ordenados de forma crescente!`);
