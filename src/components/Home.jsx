// import { useContext } from "react";
import Slide from "./Slide";
import { Link } from "react-router-dom";
// import { UserContext } from "./UserContext";

const Home = ({ carItems }) => {
  // const msg = useContext(UserContext);

  return (
    <div className="body-page">
      {/* <div>{{ authStatus }}</div> */}
      <h2 style={{ margin: 5 }}>
        Need a Ride from a Trusted Service Provider???
      </h2>
      <h4 style={{ margin: 5 }}>
        <q>Check Us Out</q>
      </h4>
      {/* <span>{msg}</span> */}
      <Slide carItems={carItems} />

      <button
        style={{
          padding: 10,
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        <Link to="/book">BOOK NOW</Link>
      </button>
    </div>
  );
};

export default Home;
