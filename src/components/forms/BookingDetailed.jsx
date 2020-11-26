import React from 'react'
import { useParams, Link } from "react-router-dom";

export default function BookingDetailed(props) {
    console.log("DETAILED BOOKING")
    console.log(props)

    const { id } = useParams();
    console.log("PARAMS", id);

    const aBooking = props.findRecord(parseInt(id))
    console.log("aBooking", aBooking)

    return (
        <div>
            <Link to='/bookings'>
                <button>Close</button>
            </Link>
            <h2>{aBooking.passenger_name}</h2>
            <h3>Date: {aBooking.date}</h3>
            <h3>Pickup Location: {aBooking.pickup_location}</h3>
            <h3>Pickup Time: {aBooking.pickup_time}</h3>
            <h3>Dropoff Location: {aBooking.dropoff_location}</h3>
            <h3>Dropoff Time: {aBooking.dropoff_time}</h3>
            <h3>Vehicle: {aBooking.car}</h3>
        </div>
    )
}
