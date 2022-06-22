import React from "react";
import Pokemon from "./Pokemon";
import data from './data'
import Class from "../class";

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      indexArr: 0,
      value: 'All'
    }

    this.segue = this.segue.bind(this);
    this.volta = this.volta.bind(this);
  }
  segue = () => {
    this.setState((estadoAnterior, _props) =>
      estadoAnterior.indexArr === 8 ? { indexArr: 0 } : { indexArr: estadoAnterior.indexArr + 1 }
    )
  }
  volta = () => {
    this.setState((set, _props) =>
      set.indexArr === 0 ? { indexArr: 0 } : { indexArr: set.indexArr - 1 }
    )
  }
  change = (event) => {
    this.setState({value: event.target.value});
    const typeState = this.state.value;
    console.log(typeState);
  }

  render() {
    return (
      <>
        <div className="pokedex">
          <button className="volta" onClick={this.volta}></button>
          {data.map((item) =>
            <Pokemon key={item.id}
              name={item.name}
              type={item.type}
              averageWeight={item.averageWeight}
              image={item.image}
              moreInfo={item.moreInfo}
            />)[this.state.indexArr]}
          <button className="segue" onClick={this.segue}></button>
        </div>
        <div>
          <select onChange={this.change}>
            <option value="All">All</option>
            {data.map((type) =>
          <Class type={type.type} />)}
          </select>
        </div>
      </>

    )
  }
}

export default Pokedex;
