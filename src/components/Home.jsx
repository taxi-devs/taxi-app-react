import Slide from "./Slide";

const Home = ({ carItems }) => {
  return (
    <div style={{ paddingTop: 8, paddingBottom: 8 }} className="body-page">
      <h2 style={{ paddingTop: 10, margin: 0 }}>
        Need a Ride from a Trusted Service Provider???
      </h2>
      <h4>
        <q style={{ paddingBottom: 10 }}>Check Us Out</q>
      </h4>
      <Slide carItems={carItems} />
      <button style={{ padding: 10, fontWeight: "bold", fontSize: 20 }}>
        BOOK NOW
      </button>
    </div>
  );
};

export default Home;
