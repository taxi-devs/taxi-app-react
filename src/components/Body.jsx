import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Gallery from "./Gallery";
import Home from "./Home";
import BookingForm from "./BookingForm";

// const Header = ({handleRedirect}) => {
const Body = ({ carItems }) => {
  return (
    <Router>
      <div className="header">
        <div id="app-name">
          <h1>Taxi App</h1>
        </div>

        <nav id="nav">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/gallery">
            <li>Our Cars</li>
          </Link>
          <Link to="/booking-form">
            <li>BookingForm</li>
          </Link>
        </nav>
      </div>

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

        <Route path="/booking-form">
          <BookingForm />
        </Route>

        {/* <Route path="/booking-form">
          <Redirect to="/" />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default Body;
