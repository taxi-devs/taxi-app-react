const Car = ({ carItems }) => {
  return (
    <>
      {carItems.map((car) => {
        return (
          <article key={car.id}>
            <img
              style={{ width: 300, height: 300, borderRadius: 2 }}
              src={car.url}
              alt={car.alt}
            />
            <span style={{ backgroundColor: "grey" }}>{car.type}</span>
            <span>{car.tagLine}</span>
          </article>
        );
      })}
    </>
  );
};

export default Car;
