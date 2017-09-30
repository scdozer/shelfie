import  React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './home.css';
import logo from '../../assets/shelfie-logo.png';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      shelfie: []
    }

  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/shelfie')
    .then(response => {
      this.setState({shelfie: response.data})
    })
  }

  render(){
  return(
    <div className="Home">
      <header className="home-header">
        <div className="home-nav">
          <img src={logo} className="logo" alt="Shelfie"/> <h1 className="title">SHELFIE</h1>
        </div>
      </header>

      {this.state.shelfie.map((shelfie =>{
          return (
            <Link to={`/shelf/${shelfie.shelfid}`}
            className="no-decoration">
              <div className="home-shelf">{shelfie.shelfnm}</div>
            </Link>
          )
        }))}

    </div>
  )
}
}
