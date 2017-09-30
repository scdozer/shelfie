import  React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './shelf.css';
import logo from '../../assets/shelfie-logo.png';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={

      shelfId:"",
      shelfNm:"",
      bins:[
        {
          binnm: "+ Add inventory to bin",
          positionNBR: 1,
          active: false
        },
        {
          binnm: "+ Add inventory to bin",
          positionNBR: 2,
          active: false
        },
        {
          binnm: "+ Add inventory to bin",
          positionNBR: 3,
          active: false
        },
        {
          binnm: "+ Add inventory to bin",
          positionNBR: 4,
          active: false
        },
        {
          binnm: "+ Add inventory to bin",
          positionNBR: 5,
          active: false
        }
      ]
    }

  }

  componentDidMount(){
    const shelfId = this.props.match.params.id;
    axios.get(`http://localhost:3001/api/shelf/${shelfId}`)
    .then(response => {
      const data = response.data[0];
      this.setState({
        shelfId: data.shelfid,
        shelfNm: data.shelfnm
      })
    })

    axios.get(`http://localhost:3001/api/bins/${shelfId}`)
    .then(response => {
      const data = response.data;
      const binsCopy = Object.assign([], this.state.bins)
      console.log('binsCopy', binsCopy);
      data.forEach( (bin)=> {
        binsCopy.splice(bin.positionnbr-1, 1, bin);
      })
      this.setState({
       bins: binsCopy
      })
      console.log('state', this.state);
    })


  }

  render(){
  return(
    <div className="Shelf">
      <header className="shelf-header">
        <div className="shelf-nav">
          <img src={logo} className="logo" alt="Shelfie"/> <h1 className="title">SHELFIE</h1>
        </div>
      </header>

      {this.state.bins.map((bins =>{
          return (
            // <Link to={`/shelf/${bins.shelfid}`} className="no-decoration">
              <div className="shelf-bin">{bins.binnm}</div>
            // </Link>
          )
        }))}

    </div>
  )
}
}
