import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Profile extends Component {
  render() {
    return (
<React.Fragment>
      <div className="pantallaInicio">
      <Link to={`/home`}>Home</Link>
      <Link to={`/game`}>Game</Link>
        <button onClick={(e)=>{this.props.logout(e)}}>LOGOUT</button>
      </div>
      </React.Fragment>
    )
  }
}
