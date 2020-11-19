const UserSignUpForm = () => {
  return (
    <div className="addForm">
      <h2>Register With Us</h2>
      <form>
        <div>
          <label>Full Name</label>
          <input id="fullname" type="text" value="fullname" />
        </div>
        <div>
          <label>Email</label>
          <input id="password" type="text" value="password" />
        </div>
        <div>
          <label>User Name</label>
          <input id="username" type="text" value="username" />
        </div>

        <div>
          <label>Password</label>
          <input id="password" type="text" value="password" />
        </div>

        <div className="action-btn">
          <input id="submit" type="submit" value="Login" />
          <input id="cancel" type="reset" value="Cancel" onClick={""} />
        </div>
      </form>
    </div>
  );
};

export default UserSignUpForm;
