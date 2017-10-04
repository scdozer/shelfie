import  React, { Component } from 'react';
import './bin.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import logo from '../../assets/shelfie-logo.png';

export default class Bin extends Component {
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
        bin
      </div>
    )
  }
}
