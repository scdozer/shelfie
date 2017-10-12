import  React, { Component } from 'react';
import './bin.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import logo from '../../assets/shelfie-logo.png';

export default class Bin extends Component {

  deleteBin = () => {
    const positionNBR = this.props.match.params.positionNBR;
    axios.delete(`http://localhost:3001/api/bins/delete/${positionNBR}`, {
        positionNBR
    })
  }


  render(){
    return(
      <div className="Bin">
        <header className="shelf-header">
            <div className="shelf-nav">
                <Link to={'/'} className="no-decoration">
                  <img src={logo} className="logo" alt="Shelfie"/>
                </Link>
            </div>
        </header>
        <h3>Id:{this.props.match.params.id}</h3>
        <h3>Position Number: {this.props.match.params.positionNBR}</h3>
        <button onClick= { this.deleteBin }>Delete</button>
      </div>
    )
  }
}
