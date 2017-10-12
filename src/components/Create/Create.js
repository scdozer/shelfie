import  React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import logo from '../../assets/shelfie-logo.png';
import './create.css';

export default class Create extends Component {

  constructor(props){
    super(props);
    this.state={
      binnm: '',
      priceamt: ''
    }
  }


  updateBin = () => {
    const { binNM, priceAMT } = this.state;
    const shelfId = this.props.match.params.id;
    const positionNBR = this.props.match.params.positionNBR;
    axios.post(`http://localhost:3001/api/bins/`, {
        binNM : this.state.binnm,
        priceAMT : this.state.priceamt,
        shelfId,
        positionNBR
    })
  }

  deleteBin = () => {
    const positionNBR = this.props.match.params.positionNBR;
    axios.delete(`http://localhost:3001/api/bins/delete/${positionNBR}`, {
        positionNBR
    })
  }



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
      <input onChange = {(e) => this.setState({binnm: e.target.value})} placeholder="Name" />
      <input onChange = {(e) => this.setState({priceamt: e.target.value})} placeholder="Price" />
      <button onClick= { this.updateBin }>Update</button>

      </div>
    )
  }
}
