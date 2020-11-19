const BookingForm = () => {
  return (
    <div className="addForm">
      <h2>Book Your Ride</h2>
      <form>
        <div>
          <label>Passenger Name</label>
          <input id="username" type="text" value="username" />
        </div>
        <div>
          {" "}
          <label for="pickup_location">Pick-up Location</label>
          <select Type="Text" id="pickup_location" name="pickup_location">
            <option value="Vision City">Vision City</option>

            <option value="Gerehu">Gerehu</option>

            <option value="Boroko">Boroko</option>

            <option value="Airport">Airport</option>

            <option value="Gordons">Gordons</option>
          </select>
        </div>
        <div>
          <label>Pick Up Time</label>
          <input id="password" type="time" value="password" />
        </div>{" "}
        <div>
          <label for="dropoff_location">Drop-off Location</label>

          <select Type="Text" id="dropoff_location" name="dropoff_location">
            <option value="Airport">Airport</option>

            <option value="Vision City">Vision City</option>

            <option value="Gerehu">Gerehu</option>

            <option value="Boroko">Boroko</option>

            <option value="Gordons">Gordons</option>
          </select>
        </div>
        <div>
          <label>Drop Off Time</label>
          <input id="time" type="time" value="time" placeholder="time" />
        </div>
        <div>
          <label>Date</label>
          <input id="password" type="date" value="password" />
        </div>
        <div>
          <label>Vehicle Type</label>
          // selection to DB to be placed here
        </div>
        <div>
          <label>No. of Passenger(s)</label>
          <input id="passengerNo" type="number" value="passengerNo" />
        </div>
        <div className="action-btn">
          <input id="submit" type="submit" value="Submit" />
          <input id="cancel" type="reset" value="Cancel" onClick={""} />
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
