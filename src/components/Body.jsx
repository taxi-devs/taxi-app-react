import React, { Component } from "react";
import Slider from "./slider";

export default class Body extends Component {
  render() {
    console.log("Body renders");
    return <div>{<Slider />}</div>;
  }
}
