import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import axios from 'axios'

export default class BookingAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: true,
            url: 'http://localhost:2000/admin-add-booking',
            username: '',
            pickup_location: '',
            pickup_time: '',
            dropoff_location: '',
            dropoff_time: '',
            date: ''
        }
    }

    resetForm = () => {
        this.setState(
            {
                username: '',
                pickup_location: '',
                pickup_time: '',
                dropoff_location: '',
                dropoff_time: '',
                date: ''
            }
        )
    }

    handleSubmit = event => {
        alert('form submitted');
        event.preventDefault();
        axios.post(this.url, {
            username: this.state.username,
            pickup_location: this.state.pickup_location,
            pickup_time: this.state.pickup_time,
            dropoff_location: this.state.dropoff_location,
            dropoff_time: this.state.dropoff_time,
            date: this.state.date
        }).then((res) => {
            resetForm()
        })

    }

    handleCancel = event => {
        console.log(event);
        alert('form cancelled')
    }

    render() {
        return (
            <div className="addForm">
                <h2>Book Your Ride</h2>
                <form onSubmit={this.handleSubmit} method="POST" action="http://localhost:2000/admin-add-booking">
                    <div>
                        <label>Passenger Name</label>
                        {/* TODO: pull username from Database */}
                        <input id="username" type="text" placeholder="username" />
                    </div>
                    <div>
                        {" "}
                        <label htmlFor="pickup_location">Pick-up Location</label>
                        <select type="Text" id="pickup_location" name="pickup_location">
                            <option value="Vision City">Vision City</option>
                            <option value="Gerehu">Gerehu</option>
                            <option value="Boroko">Boroko</option>
                            <option value="Airport">Airport</option>
                            <option value="Gordons">Gordons</option>
                        </select>
                    </div>
                    <div>
                        <label>Pick Up Time</label>
                        <input id="pickup_time" name="pickup_time" type="time" />
                    </div>{" "}
                    <div>
                        <label htmlFor="dropoff_location">Drop-off Location</label>

                        <select type="Text" id="dropoff_location" name="dropoff_location">
                            <option value="Airport">Airport</option>
                            <option value="Vision City">Vision City</option>
                            <option value="Gerehu">Gerehu</option>
                            <option value="Boroko">Boroko</option>
                            <option value="Gordons">Gordons</option>
                        </select>
                    </div>
                    <div>
                        <label>Drop Off Time</label>
                        <input id="dropoff_time" name="dropoff_time" type="time" />
                    </div>
                    <div>
                        <label>Date</label>
                        <input id="date" name="date" type="date" />
                    </div>
                    <div>
                        <label>Vehicle Type</label>
                        { /* selection to DB to be placed here */}
                    </div>
                    <div>
                        <label>No. of Passenger(s)</label>
                        <input id="number_of_passengers" name="number_of_passengers" type="number" max="4" min="1" />
                    </div>
                    <div className="action-btn">
                        <input id="submit" type="submit" value="Submit" />
                        <input id="cancel" type="reset" value="Cancel" onClick={this.handleCancel} />
                    </div>
                </form>
            </div>
        );
    }
};
