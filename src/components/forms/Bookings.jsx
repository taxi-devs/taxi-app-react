import React from "react";
import Booking from "./Booking";
import { Link } from "react-router-dom";

export default function Bookings({ bookings }) {
  console.log("Bookings Component: All bookings", bookings);
  
  const allBookingsRender = (bookings) => {
    return bookings.map((booking) => {
      return (
        <Link to={`/bookings/${booking._id}`} key={booking._id}>
          <Booking
            passenger_name={booking.passenger_name}
            pickup_location={booking.pickup_location}
            pickup_time={booking.pickup_time}
            date={booking.date}
          />
        </Link>
      );
    });
  };

  return (
    <div>
      <h3>All Bookings JS</h3>
      {allBookingsRender(bookings)}
    </div>
  );
}
