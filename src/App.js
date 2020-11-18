import React, { Component } from "react";

import "./App.css";

import Body from "./components/Body";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    redirect: false,
    items: [
      {
        id: 1,
        url: "https://i.ibb.co/ZmV7srF/markii.jpg",
        alt: "mark ii",
        type: "Toyota Mark II",
        tagLine: "Light, & Fast. Perfect for 2-3 people",
      },
      {
        id: 2,
        url: "https://i.ibb.co/y64BsbD/premio.jpg",
        alt: "premio",
        type: "Sunny Premio",
        tagLine: "Light, & Fast. Perfect for 2-3 people",
      },
      {
        id: 3,
        url: "https://i.ibb.co/HrTn6z9/xtrail.jpg",
        alt: "xtrail",
        type: "Nissan Xtrail",
        tagLine: "Light, & Fast. Perfect for 2-3 people",
      },
    ],
  };

  render() {
    return (
      <div className="wrapper">
        <Body
          carItems={this.state.items}
          redirectStatus={this.state.redirect}
          handleRedirect={this.redirect}
        />
        <Footer />
      </div>
    );
  }

  redirect = () => {
    console.log("btn clicked");
  };
}

export default App;
