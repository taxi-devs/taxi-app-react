// import React, { Component } from "react";
import Carousel from "react-elastic-carousel";

const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 2000, itemsToShow: 2 },
  { width: 4000, itemsToShow: 3 },
];

const Slide = ({ carItems }) => {
  return (
    <>
      <Carousel enableAutoPlay autoPlaySpeed={6000} breakPoints={breakpoints}>
        {carItems.map((item) => (
          <div key={item.id}>
            <img src={item.url} alt={item.alt} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Slide;
