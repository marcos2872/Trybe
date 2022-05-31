// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// }; 
//1
// console.log('Bem-vinda, ' + info.personagem);

//2
// info['recorrente'] = 'sim';
// console.table(info);

//3
// for (let key in info) {
//   console.log(key);
// };

//4 
// for (let key in info){
//   console.log(info[key]);
// };

//5
// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
//   recorrente: 'sim',
// }
// console.log(info.personagem, 'e', info2.personagem);
// console.log(info.origem, 'e', info2.origem);
// console.log(info.nota, 'e', info2.nota);
// if ( info.recorrente === info2.recorrente){
//   console.log('Ambos recorrentes');
// }

//6
// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// console.log('O livro favorito de', leitor.nome, leitor.sobrenome, 'se chama', leitor.livrosFavoritos[0].titulo);

//7
// leitor.livrosFavoritos.push({ titulo: 'Harry Potter e o Prisioneiro de Azkaban',
// autor: 'JK Rowling',
// editora: 'Rocco',})
// console.table(leitor.livrosFavoritos);

//8
// console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos');
 
// let nam = 'marcos souza brito';
// nam = nam.replaceAll('o', '4');
// console.log(nam);
let string = ":insertx: :insertx: :inserty: :inserty: :insertx: :insertz:";
let newstring = string.replace(/:insertx:/g, 'hello!');
console.log(newstring);