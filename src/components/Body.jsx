import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Gallery from "./Gallery";
import Home from "./Home";

import UserSignUp from "./users/UserSignUpForm";
import Login from "./forms/Login";
import BookingForm from "./users/UserBookingForm";

import ViewUsers from "./admin/AdminViewAllUsers";

const Body = ({ carItems, registeredUsers }) => {
  return (
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
          <Link to="/register">
            <li>Sign Up</li>
          </Link>

          <Link to="/registered-user">
            <li>Users</li>
          </Link>

          <Link to="/login">
            <li>User Login</li>
          </Link>
        </nav>
      </header>

      <Switch>
        <Route exact path="/">
          {/* <Home handleRedirect={handleRedirect}/> */}
          <Home
            carItems={carItems}
            gohandleRedirect={() => {
              return <Redirect to="/gallery" />;
            }}
          />
        </Route>
        <Route path="/gallery">
          <Gallery carItems={carItems} />
        </Route>

        <Route path="/register">
          <UserSignUp />
        </Route>

        <Route path="/registered-user">
          <ViewUsers registeredUsers={registeredUsers} />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/book">
          <BookingForm />
        </Route>
      </Switch>
    </Router>
  );
};

export default Body;