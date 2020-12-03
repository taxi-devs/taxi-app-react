import React from 'react'

export default function Booking(props) {
    console.log("Booking component: All booking summary")
    console.log("BOOKING PROPS", props)

    return (
        <>
        <tbody>
        <tr>
            <td>{props.passenger_name}</td>
            <td>{props.pickup_location}</td>
            <td>{props.pickup_time}</td>
            <td>{props.date}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>
        </tbody>
        </>
    )
}
