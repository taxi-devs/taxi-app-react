const UserLoginForm = () => {
  return (
    <div className="addForm">
      <h2>Login</h2>
      <form>
        <div>
          <label>Username</label>
          <input id="fullname" type="text" value="fullname" />
        </div>

        <div>
          <label>Password</label>
          <input id="password" type="text" value="password" hidden />
        </div>

        <div className="action-btn">
          <input id="submit" type="submit" value="Login" />
          <input id="cancel" type="reset" value="Cancel" />
        </div>
      </form>
    </div>
  );
};

export default UserLoginForm;
