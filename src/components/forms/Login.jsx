import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    alert("Login submitted: " + this.state);

    axios
      .get("http://localhost:2000/login", {
        method: "POST",
        body: JSON.stringify(this.state),
      })
      .then((req, res) => {
        console.log(res.JSON);
      })
      .catch((err) => {
        console.log(err.JSON);
      });
  };

  render() {
    return (
      <div className="body-page">
        <h3>Sign In To Make A Booking</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">
              <input
                type="text"
                placeholder="username"
                name="username"
                id="username"
                value={this.state.value}
                onChange={this.handleChange}
              />{" "}
            </label>
          </div>

          <div style={{ margin: 5 }}>
            <label htmlFor="password">
              <input
                placeholder="password"
                type="text"
                name="password"
                id="password"
              />
            </label>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
