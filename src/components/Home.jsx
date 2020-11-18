import Slide from "./Slide";

const Home = ({ carItems }) => {
  return (
    <div className="body-page">
      <h1>Need a Ride from a Trusted Service Provider???</h1>
      <h2>
        <q style={{ paddingBottom: 10 }}>Check Us Out</q>
      </h2>
      <Slide carItems={carItems} />
      <button style={{ padding: 10, fontWeight: "bold", fontSize: 20 }}>
        BOOK NOW
      </button>
    </div>
  );
};

export default Home;
