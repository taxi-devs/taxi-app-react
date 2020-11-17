import React, { Component } from 'react'
import Slider from './Slider'
import { CarImages } from './SlideImages'

export default class Home extends Component {
    render() {
        console.log("Home renders")
        return (
            <div>
                <Slider slides={ CarImages } />
            </div>
        )
    }
}
