import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import AuthApi from "./AuthApi";

import ViewUsers from "./forms/admin/AdminViewAllUsers";
import ViewBookings from "./forms/admin/AdminViewAllBookings";
import ViewCars from "./forms/admin/Cars";
import ViewDrivers from "./forms/admin/Drivers";

const AdminPanel = (props) => {
  console.log("names", props.registeredUsers);
  return (
    <AuthApi.Provider>
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
            <ViewUsers registeredUsers={props.registeredUsers} />
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
        <button>Logout</button>
      </Router>
    </AuthApi.Provider>
  );
};

export default AdminPanel;
