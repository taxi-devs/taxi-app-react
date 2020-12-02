import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import AuthApi from "./AuthApi";
import Cookies from "js-cookie";

import ViewUsers from "./forms/admin/AdminViewAllUsers";
import ViewBookings from "./forms/admin/AdminViewAllBookings";
import ViewCars from "./forms/admin/Cars";
import ViewDrivers from "./forms/admin/AdminViewAllDrivers";

const AdminPanel = (props) => {
  console.log("names", props);
  const Auth = useContext(AuthApi);

  const handleLogOut = () => {
    Auth.setAdminAuth(false);
    Cookies.remove("admin");
  };

  return (
    <AuthApi.Provider value=''>
      <Router>
        <h4>Admin Menu</h4>
        <header>
          <nav id="admin-panel">
            <Link to="/bookings">
              <span>Bookings</span>
            </Link>
            <Link to="/users">
              <span>Users</span>
            </Link>
            <Link to="/cars">
              <span>Cars</span>
            </Link>
            <Link to="/drivers">
              <span>Drivers</span>
            </Link>
          </nav>
        </header>
        <Switch>
          <Route path="/users">
            <ViewUsers users={props.users} getUsers={props.getUsers} />
          </Route>
          <Route path="/bookings">
            <ViewBookings />
          </Route>
          <Route path="/cars">
            <ViewCars />
          </Route>
          <Route path="/drivers">
            <ViewDrivers />
          </Route>
        </Switch>
        <button onClick={handleLogOut}>Logout</button>
      </Router>
    </AuthApi.Provider>
  );
};

export default AdminPanel;
