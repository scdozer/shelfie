import  React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import logo from '../../assets/shelfie-logo.png';
import './create.css';

export default class Create extends Component {
  render(){
    return(
      <div className="Create">
      <header className="shelf-header">
          <div className="shelf-nav">
              <Link to={'/'} className="no-decoration">
                <img src={logo} className="logo" alt="Shelfie"/>
              </Link>
          </div>
      </header>
      Create</div>
    )
  }
}
