import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'


export default class Emojis extends Component {
  constructor(props){
    super(props)
    this.state = {
      emojis:{},
      currenttext :"",
      currentImg: "",
    }

    fetch('https://api.github.com/emojis').then((response) => response.json()).then((r) => {
      const keys = Object.keys(r)
      const randomNum = Math.floor(Math.random() * keys.length)
      this.setState({emojis:r, currenttext: keys[randomNum],currentImg:r[keys[randomNum]]})
      })
  }
    render() {
        return (
            <div>
                {this.state.currenttext ? <h1 style={{fontSize:"2.8rem"}}>{this.state.currenttext.split('_').join(' ')}</h1> : <h1 style={{fontSize:"2.8rem"}}>Random</h1>}
                {this.state.currentImg ? <img src={this.state.currentImg} /> : ""}
                <br />
                <button>Push Me to Get a Random Emoji</button>
                {console.log(this.state)}
            </div>
        )
    }

}
