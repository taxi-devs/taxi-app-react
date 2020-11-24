const AddDriver = () => {
  return (
    <div className="addForm">
      <h2>Add/Edit a Driver</h2>
      <form>
        <div>
          <label>Name</label>
          <input id="name" type="text" placeholder='name' name='name' value="name" />
        </div>
        <div>
          <label>Age</label>
          <input id="age" type="text" placeholder='age' name='age' value="age" />
        </div>
        <div>
          <label>Years of Experience</label>
          <input id="driverYears" type="text" placeholder='driverYears' name='tagLine' value="driverYears" />
        </div>
        <div>
          <label>Image</label>
          <input id="image" type="text" placeholder='image' name='image' value="image" />
        </div>
        <div className="action-btn">
          <input
            id="submit"
            type="submit"
            value="Add"
          />
          <input id="cancel" type="reset" value="Cancel" />
        </div>
      </form>
    </div>
  );
};

export default AddDriver;
