import React from 'react'
import { Link } from "react-router-dom";
import BookingDetailed from './BookingDetailed'

export default function BookingPage(props) {
    console.log("BOOKING LIST")
    console.log(props)

    const multiBookingRender = bookings => {
        return bookings.map(booking => {
            return (
                <Link to={`bookings/${booking.id}`} key={booking.id} >
                    <BookingDetailed name={booking.passenger_name} date={booking.date} bookingId={booking._id} />
                </Link>
            )
        })
    }

    return (
        <div>
            <h3>Booking List</h3>
            {
                multiBookingRender(props.bookings)
            }
        </div>
    )
}