import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Gallery from "./Gallery";
import Home from "./Home";
import BookingAdd from "./forms/BookingAdd";
// import AddDriver from "./admin/AdminAddDriver";

import ViewUsers from "./admin/AdminViewAllUsers";

const Body = ({ carItems }) => {
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
          <Link to="/booking-form">
            <li>Forms</li>
          </Link>

          <Link to="/registered-user">
            <li>ViewUsers</li>
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

        {/* <Route path="/booking-form">
          <BookingForm />
        </Route> */}

        <Route path="/booking-form">
          <BookingAdd />
        </Route>

        <Route>
          <ViewUsers path="/registered-user" />
        </Route>

        {/* <Route path="/booking-form">
          <Redirect to="/" />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default Body;
