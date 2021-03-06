import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    url: "http://localhost:2000",
    registeredUsers: [
      {
        _id: "rw34wr4r",
        fullName: "Valen",
        email: "test@null.com",
        username: "vcherake",
      },
      {
        _id: "rer34348899r",
        fullName: "Nanoline",
        email: "test@null.com",
        username: "vcherake",
      },

      {
        _id: "r34gr4r",
        fullName: "Nanoline",
        email: "test@null.com",
        username: "vcherake",
      },
      {
        _id: "rer34gr09804r",
        fullName: "Nanoline",
        email: "test@null.com",
        username: "vcherake",
      },
    ],
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
    bookings: [],
  };

  getRegisteredUsers = () => {
    console.log("getRegisterUsers()");
    axios
      .get(`${this.state.url}/view-user`)
      .then((resp) => {
        console.log("resp");
        console.log(resp.data);
        this.setState(() => {
          return { registeredUsers: resp.data };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getBookings = () => {
    console.log("this.state.url", this.state.url);
    axios
      .get(`${this.state.url}/view-all-booking`)
      .then((res) => {
        // res = res.json();
        console.log("RES", res.data);
        return res.data;
      })
      .then((data) => {
        this.setState({ bookings: data });
        console.log("BOOKING RESPONSE DATA", this.state.bookings);
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    console.log("mounting compoents...");
    this.getRegisteredUsers();
    this.getBookings();
    console.log("components mounted");
  }

  render() {
    console.log("App.js rendering...");
    return (
      <div className="wrapper">
        <Body
          carItems={this.state.items}
          registeredUsers={this.state.registeredUsers}
          bookings={this.state.bookings}
          getAllUsers={this.getRegisteredUsers}
        />
        <Footer />
      </div>
    );
  }
} // class component end block

export default App;
