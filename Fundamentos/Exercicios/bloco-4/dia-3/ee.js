let maiorPrimo = 0
for (let c = 1; c <= 50; c+= 1) {
if (c % 2 != 0 &&c % 3 != 0 && c % 5 != 0) {
  console.log(c);
   if( c > maiorPrimo){
     maiorPrimo = c
   }
}
}  console.log(maiorPrimo)