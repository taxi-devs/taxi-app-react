import React from 'react'
import { useParams, Link } from "react-router-dom";

export default function BookingDetailed(props) {
    console.log("DETAILED BOOKING")
    console.log(props)

    const { id } = useParams();
    console.log("PARAMS", id);

    const aBooking = props.findBooking(props.bookings, parseInt(id))
    console.log("aBooking", aBooking)

    return (
        <div>
            <Link to='/bookings'>
                <button>Close</button>
            </Link>
            <h3>{aBooking.passenger_name}</h3>
            <p>Date: {aBooking.date}</p>
            <p>Pickup Location: {aBooking.pickup_location}</p>
            <p>Pickup Time: {aBooking.pickup_time}</p>
            <p>Dropoff Location: {aBooking.dropoff_location}</p>
            <p>Dropoff Time: {aBooking.dropoff_time}</p>
            <p>Vehicle: {aBooking.car}</p>
            {/* {props.findBooking(id)} */}
        </div>
    )
}
