import React, { Component } from 'react'
import { Route,Redirect, NavLink } from 'react-router-dom'


export default class Emojis extends Component {
   constructor(props){
    super(props)
    this.state = {
      emojis:{},
      keys: ["100", "1234", "+1", "-1", "1st_place_medal", "2nd_place_medal", "3rd_place_medal", "8ball", "a", "ab", "abc", "abcd", "accept", "aerial_tramway", "afghanistan", "airplane", "aland_islands", "alarm_clock", "albania", "alembic", "algeria", "alien", "ambulance", "american_samoa", "amphora", "anchor", "andorra", "angel", "anger", "angola", "angry", "anguilla", "anguished", "ant", "antarctica", "antigua_barbuda", "apple", "aquarius", "argentina", "aries", "armenia", "arrow_backward", "arrow_double_down", "arrow_double_up", "arrow_down", "arrow_down_small", "arrow_forward", "arrow_heading_down", "arrow_heading_up", "arrow_left", "arrow_lower_left", "arrow_lower_right", "arrow_right", "arrow_right_hook", "arrow_up", "arrow_up_down", "arrow_up_small", "arrow_upper_left", "arrow_upper_right", "arrows_clockwise", "arrows_counterclockwise", "art", "articulated_lorry", "artificial_satellite", "aruba", "asterisk", "astonished", "athletic_shoe", "atm", "atom", "atom_symbol", "australia", "austria", "avocado", "azerbaijan", "b", "baby", "baby_bottle", "baby_chick", "baby_symbol", "back", "bacon", "badminton", "baggage_claim", "baguette_bread", "bahamas", "bahrain", "balance_scale", "balloon"],
    }
    fetch('https://api.github.com/emojis').then((response) => response.json()).then((r) => {this.setState({emojis:r,keys:Object.keys(r) }) })
    }
    render() {
        return (
            <div>
              {this.props.match.isExact ? this.props.history.push(`/emojis/${this.state.keys[Math.floor(Math.random() * this.state.keys.length)]}`) :""}
              <Route path="/emojis/:random" render={(url) => (
                <div>
                <h1 style={{fontSize:"2.8rem"}}>{url.match.params.random.split('_').join(' ')}</h1>
                <img src={this.state.emojis[url.match.params.random]} />
              </div>
              )}/>
              <br />
              <NavLink to="/emojis">Get a Random Emoji</NavLink>
            </div>
        )
    }

}
