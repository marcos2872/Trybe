import React from "react";

class Class extends React.Component {
  render() {
    const { type } = this.props;
    return(
      <option value={type}>{type}</option>
    );
  }
}

export default Class;