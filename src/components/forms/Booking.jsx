import React from 'react'

export default function Booking(props) {
    console.log("Booking component: All booking summary")
    console.log("BOOKING PROPS", props)

    return (
        <div>
            <h3>{props.passenger_name}</h3>
            <p>{props.pickup_location}</p>
            <p>{props.pickup_time}</p>
            <p>{props.date}</p>
        </div>
    )
}
