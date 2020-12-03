import Slide from "./Slide";
import { Link } from "react-router-dom";
import React from "react";

const Home = ({ carItems }) => {
  console.log("Home.jsx rendering...");
  return (
    <div className="body-page">
      <h2 style={{ margin: 5 }}>
        Need a Ride from a Trusted Service Provider???
      </h2>
      <h4 style={{ margin: 5 }}>
        <q>Check Us Out</q>
      </h4>
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
