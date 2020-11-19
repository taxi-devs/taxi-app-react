const AddCar = () => {
  return (
    <div className="addForm">
      <h2>Add/Edit Car</h2>
      <form>
        <div>
          <label>Vehicle Type</label>
          <input id="carType" type="text" placeholder='carType' name='carType' value="carType" />
        </div>
        <div>
          <label>Rego. No</label>
          <input id="regoNo" type="text" placeholder='regoNo' name='regoNo' value="regoNo" />
        </div>
        <div>
          <label>Tagline</label>
          <input id="tagLine" type="text" placeholder='tagLine' name='tagLine' value="tagLine" />
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

export default AddCar;
