import React, { Component } from "react";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  // state
  render() {
    return (
      <div className="wrappper">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
