import React from "react";

// import axios from "axios";
import useForm from "./useForm";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [{ username, password }, handleChange] = useForm({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target.name);

    const userCredentials = { username: username, password: password };

    alert("Login submitted: " + userCredentials.password);

    // axios
    //   .get("http://localhost:2000/login", {
    //     method: "POST",
    //     body: JSON.stringify(userCredentials),
    //   })
    //   .then((res) => {
    //     console.log(res.JSON);
    //   })
    //   .catch((err) => {
    //     console.log(err.JSON);
    //   });
  };

  return (
    <div className="body-page">
      <h3>Sign In To Make A Booking..</h3>
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
    </div>
  );
};

export default UserLogin;
