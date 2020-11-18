// import React, { Component } from "react";
import Carousel from "react-elastic-carousel";

const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 2000, itemsToShow: 2 },
  { width: 4000, itemsToShow: 3 },
];

// closed this off to have only one source of truth
// export default class Slide extends Component {
//     state = {
//         items: [
//             { id: 1, url: 'https://i.ibb.co/ZmV7srF/markii.jpg', alt: 'mark ii' },
//             { id: 2, url: 'https://i.ibb.co/y64BsbD/premio.jpg', alt: 'premio' },
//             { id: 3, url: 'https://i.ibb.co/HrTn6z9/xtrail.jpg', alt: 'xtrail' }
//         ]
//     }
//     render() {
//         const { items } = this.state;
//         return (
//             <>
//                 <Carousel enableAutoPlay autoPlaySpeed={6000} breakPoints={ breakpoints } >
//                     {items.map(item => <div key={ item.id }> <img src={ item.url } alt={ item.alt } /></div>)}
//                 </Carousel>
//             </>
//         )
//     }
// }

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
