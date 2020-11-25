import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function UserBooking(props) {
  const initialInputState = {
    username: "",
    pickup_location: "Vision City",
    pickup_time: "",
    dropoff_location: "Airport",
    dropoff_time: "",
    date: new Date().toJSON(),
    car: "Toyota Mark II",
    number_of_passengers: "",
  };
  const [eachEntry, setEachEntry] = useState(initialInputState);
  const {
    username,
    pickup_location,
    pickup_time,
    dropoff_location,
    dropoff_time,
    date,
    car,
    number_of_passengers,
  } = eachEntry;
  const history = useHistory();

  const handleInputChange = (event) => {
    setEachEntry({ ...eachEntry, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  const redirectHome = () => {
    history.push("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("FORM SUBMITTED");
    console.log(eachEntry);
    axios
      .post("http://localhost:2000/add-booking", {
        passenger_name: username,
        pickup_location: pickup_location,
        pickup_time: pickup_time,
        dropoff_location: dropoff_location,
        dropoff_time: dropoff_time,
        date: date,
        car: car,
        number_of_passengers: number_of_passengers,
      })
      .then((res) => {
        console.log(res);
        console.log("axios posted");
      })
      .then(() => {
        alert("Form submitted");
        event.target.reset();
        redirectHome();
      })
      .catch((error) => {
        console.log(error);
        console.log("username", username);
      });
  };

  return (
    <div className="addForm">
      <h2>Book Your Ride</h2>
      <form onSubmit={handleSubmit} onChange={handleInputChange}>
        <div>
          <label>Passenger Name</label>
          {/* TODO: pull username from Database */}
          <input
            id="username"
            name="username"
            type="Text"
            placeholder="username"
          />
        </div>
        <div>
          <label htmlFor="pickup_location">Pick-up Location</label>
          <select
            type="Text"
            id="pickup_location"
            name="pickup_location"
            onChange={handleInputChange}
            defaultValue=""
          >
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
        </div>
        <div>
          <label htmlFor="dropoff_location">Drop-off Location</label>
          <select
            type="Text"
            id="dropoff_location"
            name="dropoff_location"
            onChange={handleInputChange}
            defaultValue="Airport"
          >
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
          {/* TODO: selection to DB to be placed here */}
          <select
            type="Text"
            id="car"
            name="car"
            onChange={handleInputChange}
            defaultValue="Toyota Mark II"
          >
            <option value="Toyota Mark II">Toyota Mark II</option>
            <option value="Toyota Premio">Toyota Premio</option>
            <option value="Nissan X-Trail">Nissan X-Trail</option>
          </select>
        </div>
        <div>
          <label>No. of Passenger(s)</label>
          <input
            id="number_of_passengers"
            name="number_of_passengers"
            type="number"
            max="4"
            min="1"
          />
        </div>
        <div className="action-btn">
          <input id="submit" type="submit" value="Submit" />
          <input
            id="cancel"
            type="reset"
            value="Cancel"
            onClick={redirectHome}
          />
        </div>
      </form>
    </div>
  );
}
