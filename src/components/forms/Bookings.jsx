import React from "react";
import Booking from "./Booking";
import { Link } from "react-router-dom";
import BookingDetailed from './BookingDetailed'

export default function Bookings(props) {
  console.log("Bookings Component: All bookings");
  console.log(props);
  const allBookingsRender = (bookings) => {
    return bookings.map((booking) => {
      return (
        <Link to={`/view-all-booking/:id`} key={booking.id}>
          <Booking
            passenger_name={booking.passenger_name}
            pickup_location={booking.pickup_location}
            dropoff_location={booking.dropoff_location}
            pickup_time={booking.pickup_time}
            dropoff_time={booking.dropoff_time}
            date={booking.date}
            car={booking.car}
            number_of_passengers={booking.number_of_passengers}
          />
        </Link>
      );
    });
  };

  return (
    <div>
      <h3>All Bookings</h3>
      {allBookingsRender(props.bookings)}
    </div>
  );
}
