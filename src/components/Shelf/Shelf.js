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
          shelfid : this.props.match.params.id,
          binnm: "+ Add inventory to bin",
          positionnbr: 1,
          active: false
        },
        {
          shelfid : this.props.match.params.id,
          binnm: "+ Add inventory to bin",
          positionnbr: 2,
          active: false
        },
        {
          shelfid : this.props.match.params.id,
          binnm: "+ Add inventory to bin",
          positionnbr: 3,
          active: false
        },
        {
          shelfid : this.props.match.params.id,
          binnm: "+ Add inventory to bin",
          positionnbr: 4,
          active: false
        },
        {
          shelfid : this.props.match.params.id,
          binnm: "+ Add inventory to bin",
          positionnbr: 5,
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
      data.forEach( bin => {
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
              <Link to={'/'} className="no-decoration">
                <img src={logo} className="logo" alt="Shelfie"/>
              </Link>
          </div>
      </header>

      {this.state.bins.map((bins =>{
          return (
            <Link to={`/shelf/${bins.shelfid}/${bins.binid ? bins.binid : `create/${bins.positionnbr}`}`} className="no-decoration" key={bins.positionnbr}>
              <div className={bins.binid ? 'shelf-bin shelf-active': 'shelf-bin'}>{bins.binnm}</div>
            </Link>
          )
        }))}
    </div>
  )
}
}
