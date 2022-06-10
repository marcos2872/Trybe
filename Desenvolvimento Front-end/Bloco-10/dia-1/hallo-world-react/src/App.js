// import logo from './logo.svg';
// import './App.css';

import React from "react";


const ask = (value) => {
  return (
    <li>{value}</li>
    );
  }
  
const arr = ['cozinhar', 'lavar o carro', 'fazer compras', 'Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];
 
class Task extends React.Component {
  render() {
    return (
      <ul>{arr.map((element) => ask(element))}</ul>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default Task;
