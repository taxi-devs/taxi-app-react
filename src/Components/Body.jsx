import React, { Component } from 'react'
import Slider from './slider'

export default class Body extends Component {
    console.log("Body renders")
    render() {
        return (
            <div>
                <Slider />
            </div>
        )
    }
}
