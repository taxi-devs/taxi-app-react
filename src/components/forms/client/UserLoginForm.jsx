import React, { useContext } from "react";

import axios from "axios";
import useForm from "./useForm";
import { Link } from "react-router-dom";

import AuthApi from "../../AuthApi";
import Cookies from "js-cookie";

const UserLogin = () => {
  const url = "http://192.168.100.64:2000";
  const [{ username, password }, handleChange] = useForm({
    username: "",
    password: "",
  });

  const Auth = useContext(AuthApi);

  const handleSubmit = (event) => {
    event.preventDefault();

    // ========================================
    Auth.setUserAuth(true);
    Cookies.set("user", "loginTrue");
    // ========================================

    console.log(event.target.name);

    const userCredentials = { username: username, password: password };

    alert("Login submitted: " + userCredentials.password);

    axios
      .post(`${url}/login`, userCredentials)
      .then((res) => {
        console.log(res.JSON);
      })
      .catch((err) => {
        console.log(err.JSON);
      });
  };

  return (
    <div className="body-page">
      <h3>Sign In To Make A Booking..</h3>
      <h3>
        Dont Have an Account??{" "}
        <button>
          <Link to="/register">Register Now</Link>
        </button>
        ..
      </h3>
      <form>
        <div>
          <label>
            <input
              placeholder="username"
              name="username"
              id="username"
              value={username}
              onChange={handleChange}
            />
          </label>
        </div>

        <div style={{ margin: 5 }}>
          <label>
            <input
              placeholder="password"
              onChange={handleChange}
              name="password"
              type="password"
              value={password}
            />
          </label>
        </div>
        <div>
          <button id="submit" onClick={handleSubmit} name="submit">
            submit
          </button>

          <Link to="/gallery">
            <button>cancel</button>
          </Link>
        </div>
      </form>
      {/* <button onClick={handleLogin}>Login</button> */}
    </div>
  );
};

export default UserLogin;
