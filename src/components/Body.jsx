import React, { useState, useEffect, createContext } from "react";
import Cookies from "js-cookie";
import AuthApi from "./AuthApi";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import {
  AdminAccess,
  AdminRoutes,
  ProtectedLogin,
  ProtectedBookingRoute,
} from "./RouteFunctions";

import { UserContext } from "./UserContext";

import Gallery from "./Gallery";
import Home from "./Home";

// ============ User Panel ===============
import UserBooking from "./forms/client/UserBookingForm";
import UserSignUp from "./forms/client/UserSignUpForm";
import UserLogin from "./forms/client/UserLoginForm";
import Test from "./Test";
import BookingAdd from './forms/BookingAdd';
import DriverAdd from './forms/admin/DriverAdd';
import CarAdd from './forms/admin/CarAdd'
import Bookings from "./forms/Bookings";

// =========== Admin Panel ===================
import AdminLogin from "./AdminLoginMenu";
import AdminPanel from "./AdminConsole";

const Body = ({ carItems, registeredUsers }) => {
  // const Auth = useContext(AuthApi);
  const [userAuth, setUserAuth] = useState(false);
  const [adminAuth, setAdminAuth] = useState(false);

  const readCookie = () => {
    const user = Cookies.get("user");
    const admin = Cookies.get("admin");

    if (user) {
      setUserAuth(true);
    }

    if (admin) {
      setAdminAuth(true);
    }
  };

  useEffect(() => {
    readCookie();
  }, []);

  // const AuthBtn = withRouter(({ history }) =>
  //   readCookie === true ? (
  //     <p>
  //       Welcome, you are logged in{" "}
  //       <button
  //         onClick={() => {
  //           history.push("/");
  //           setAuth(false);
  //           Cookies.remove("user");
  //         }}
  //       >
  //         Log Out
  //       </button>
  //     </p>
  //   ) : (
  //     <p>Log In</p>
  //   )
  // );

  return (
    <AuthApi.Provider
      value={{ userAuth, setUserAuth, adminAuth, setAdminAuth }}
    >
      <Router>
        <header>
          <div id="app-name">
            <h2>Taxi App</h2>
          </div>

          <nav>
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/gallery">
              <li>Our Cars</li>
            </Link>

            <Link to="/book">
              <li>Make Booking</li>
            </Link>

            <Link to="/register">
              <li>Sign Up</li>
            </Link>

            <Link to="/login">
              <li>Login</li>
            </Link>

            <Link to="/admin">
              <li>Admin</li>
            </Link>
          </nav>
        </header>

        <Switch>
          <UserContext.Provider value="Hello test from useContext hook">
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} carItems={carItems} />}
            />

            <Route
              path="/gallery"
              render={(props) => <Gallery {...props} carItems={carItems} />}
            />

            <Route
              path="/register"
              render={(props) => <UserSignUp {...props} />}
            />

            <ProtectedLogin
              component={UserLogin}
              path="/login"
              auth={userAuth}
            />

            <ProtectedBookingRoute
              component={UserBooking}
              path="/book"
              auth={userAuth}
            />

            <AdminAccess
              path="/admin"
              component={AdminLogin}
              auth={adminAuth}
            />

            <AdminRoutes
              path="/dashboard"
              component={AdminPanel}
              auth={adminAuth}
              users={registeredUsers}
            />
          </UserContext.Provider>
        </Switch>
      </Router>
    </AuthApi.Provider>
  )
}