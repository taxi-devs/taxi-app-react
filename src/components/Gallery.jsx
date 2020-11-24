import { Link } from "react-router-dom";

import Cars from "./Cars";

const Gallery = ({ carItems }) => {
  return (
    <div className="body-page">
      <h2 style={{ margin: 0 }}>
        Check out Our Fleet. Perfect for your personal use.
      </h2>
      <section className="fleet-gallery">
        <Cars carItems={carItems} />
        <Link to="/register">
          {/* <button>Sign Up</button> */}
          Sign Up
        </Link>
      </section>
    </div>
  );
};

export default Gallery;
