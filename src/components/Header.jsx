import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Gallery from "./Gallery";
import Home from "./Home";

const Header = () => {
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
        </nav>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
      </Switch>
    </Router>
  );
};

export default Header;
