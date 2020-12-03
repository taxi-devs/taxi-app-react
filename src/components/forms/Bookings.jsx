import React from "react";
import Booking from "./Booking";

export default function Bookings({ bookings }) {
  console.log("Bookings Component: All bookings", bookings);
  
  const allBookingsRender = (bookings) => {
    return bookings.map((booking) => {
      return (
          <Booking
            passenger_name={booking.passenger_name}
            pickup_location={booking.pickup_location}
            pickup_time={booking.pickup_time}
            date={booking.date}
          />
      );
    });
  };

  return (
    <div>
      <h3>All Bookings</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Pickup location</th>
            <th>Pickup time</th>
            <th>Date</th>
            <th>edit</th>
            <th>delete</th>
            <button>Refresh</button>
          </tr>
        </thead>

      {allBookingsRender(bookings)}
      </table>
    </div>
  );
}
