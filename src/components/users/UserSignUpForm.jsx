import React, { Component } from "react";

import axios from "axios";

class UserSignUp extends Component {
  state = {
    email: "",
    fullname: "",
    formError: null,
    password: "",
    username: "",
    url: "http://192.168.100.61:2000",
  };

  render() {
    return (
      <div className="body-page">
        <h2>Register With Us</h2>
        <form className="signUp-form">
          <div>
            <label>Full Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="fullname"
              placeholder="enter fullname"
              value={this.state.fullname}
            />
          </div>
          <div>
            <label>User Name</label>
            <input
              onChange={this.handleChange}
              name="username"
              type="text"
              placeholder="enter username"
              value={this.state.username}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="enter your email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              name="password"
              onChange={this.handleChange}
              id="password"
              type="password"
              placeholder="enter a password"
              value={this.state.password}
            />
          </div>

          <input
            onChange={this.handleChange}
            id="submit"
            type="submit"
            value="Sign Up"
            onClick={this.registerNewUser}
          />
        </form>
      </div>
    );
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value }, () => {
      console.log(this.state[evt.target.name]);
    });
  };

  registerNewUser = (evt) => {
    evt.preventDefault();
    console.log(evt.target);

    const newUserDetails = {
      fullName: this.state.fullname,
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
    };

    console.log(newUserDetails);

    // axios
    //   .post(`${this.state.url}/sign-up`, newUserDetails)
    //   .then((resp) => {
    //     console.log("user added");
    //     console.log(resp.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
}

export default UserSignUp;
