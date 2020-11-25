import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Booking(props) {
    console.log("Booking component: All booking details")
    console.log(props)

    const { id } = useParams()
    console.log('PARAMS')
    console.log(id)

    const aBooking = props.findBooking(parseInt(id))
    console.log(aBooking)
    return (
        <div>
            <Link to=''><button>Close</button></Link>
            <h2>{aBooking.passenger_name}</h2>
            <h3>{aBooking.pickup_location}</h3>
        </div>
    )
}
