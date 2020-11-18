import Cars from "./Cars";

const Gallery = ({ carItems }) => {
  return (
    <div className="body-page">
      <h2>Check out Our Fleet. Perfect for your personal use.</h2>
      <section className="fleet-gallery">
        <Cars carItems={carItems} />
      </section>
    </div>
  );
};

export default Gallery;
