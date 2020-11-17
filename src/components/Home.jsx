import React, { Component } from 'react'
import Slider from './Slider'
import { CarImages } from './SlideImages'

export default class Body extends Component {
    render() {
        console.log("Body renders")
        return (
            <div>
                <Slider slides={ CarImages } />
            </div>
        )
    }
}
