import Slide from "./Slide";

const Home = ({ carItems }) => {
  return (
    <div className="body-page">
      <h2 style={{ margin: 5 }}>
        Need a Ride from a Trusted Service Provider???
      </h2>
      <h4 style={{ margin: 5 }}>
        <q>Check Us Out</q>
      </h4>
      <Slide carItems={carItems} />
      <button style={{ padding: 10, fontWeight: "bold", fontSize: 20 }}>
        BOOK NOW
      </button>
    </div>
  );
};

export default Home;
