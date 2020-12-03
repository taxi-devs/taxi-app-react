import Cars from "./Cars";

const Gallery = ({ carItems }) => {
  console.log("Gallery.jsx rendering...")
  return (
    <div className="body-page">
      <h2 style={{ margin: 0 }}>
        Check out Our Fleet. Perfect for your personal use.
      </h2>
      <section className="fleet-gallery">
        <Cars carItems={carItems} />
      </section>
    </div>
  );
};

export default Gallery;
