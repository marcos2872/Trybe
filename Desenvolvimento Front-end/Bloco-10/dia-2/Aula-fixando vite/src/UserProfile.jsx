import React from "react";

class UserProfile extends React.Component {
  render() {
    const {name, email, avatar} = this.props.user;
    const {index} = this.props.index
    return (
      <li key={index}>Nome: {name}, Email: {email}
       <img src = {avatar}></img></li>
    )
  }
}

export default UserProfile;