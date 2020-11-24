import React, { Component } from "react";

// import axios from "axios";

import { Link, Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target.name);
    // if (name === "cancel") {

    //   // <Redirect to="/gallery" />;
    // }

    // alert("Login submitted: " + this.state);

    // axios
    //   .get("http://localhost:2000/login", {
    //     method: "POST",
    //     body: JSON.stringify(this.state),
    //   })
    //   .then((res) => {
    //     console.log(res.JSON);
    //   })
    //   .catch((err) => {
    //     console.log(err.JSON);
    //   });
  };

  cancelSignIn = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    return () => {
      return <Redirect to="/gallery" />;
    };
  };

  render() {
    return (
      <div className="body-page">
        <h3>Sign In To Make A Booking..</h3>
        <form>
          <div>
            <label htmlFor="username">
              <input
                type="text"
                placeholder="username"
                name="username"
                id="username"
                value={this.state.value}
                onChange={this.handleChange}
              />
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
            {/* <input type="submit" value="Submit" />
            <input type="submit" value="Cancel" name="cancel" /> */}
            <button id="submit" onClick={this.handleSubmit} name="submit">
              submit
            </button>
            {/* <button type="submit" name="cancel" onClick={this.cancelSignIn}>
              cancel
            </button> */}
            <Link to="/gallery">
              <button>cancel</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

// onClick={this.handleSubmit}
