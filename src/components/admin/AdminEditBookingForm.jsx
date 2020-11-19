const EditBookingForm = () => {
  return (
    <div className="addForm">
      <h2>EditBookingForm</h2>
      <form>
        <div>
          <label>Passenger Name</label>
          <input id="username" type="text" value="username" />
        </div>
        <div>
          <label>Pick Up Location</label>
          <input id="password" type="drop-list" value="password" />
        </div>
        <div>
          <label>Pick Up Time</label>
          <input id="password" type="time" value="password" />
        </div>{" "}
        <div>
          <label>Drop Off Time</label>
          <input id="password" type="time" value="password" />
        </div>
        <div>
          <label>Date</label>
          <input id="password" type="date" value="password" />
        </div>
        <div>
          <label>Vehicle Type</label>
          <input id="password" type="drop-down" value="password" />
        </div>
        <div>
          <label>No. of Passenger(s)</label>
          <input id="passengerNo" type="number" value="passengerNo" />
        </div>
        <div className="action-btn">
          <input
            id="submit"
            type="submit"
            value="Submit"
         
          />
          <input id="cancel" type="reset" value="Cancel" onClick={""} />
        </div>
      </form>
    </div>
  );
};

export default EditBookingForm;
