import React from "react";
import Pokemon from "./Pokemon";
import data from './data'

class Pokedex extends React.Component {
  render() {
   return(
     <div className = "pokedex">
    {data.map((item) => <Pokemon key={item.id} data = {item} />)}
    </div>
   )
  }
}

export default Pokedex; 