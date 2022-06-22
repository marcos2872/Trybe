import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, moreInfo } = this.props;
    return(
      <div className="pokemon">
        <p>{name}</p>
        <p>{type}</p>
        <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
        <img src = {image} alt="Foto do pokemon" />
        <a href={moreInfo} target="_blank" > More Info</a>
      </div>
    )
  }
}

Pokemon.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }).isRequired,
    image: PropTypes.string.isRequired,
};

export default Pokemon;