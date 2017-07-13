import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'


export default class Emojis extends Component {
    state ={
        emoji:{}
    }
    render = () => {
        return (
            <div>
                <h1>Random</h1>
                <button>Push Me to Get a Random Emoji</button>
            </div>
        )
    }

}

