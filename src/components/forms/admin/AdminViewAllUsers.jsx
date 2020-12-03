import axios from "axios";

const ViewUsers = ({ users, getUsers }) => {
  const url = "http://localhost:2000";

  const getAllUsers = () => {
    return getUsers();
  };

  const editRow = () => {
    console.log("edit btn clicked");
  };

  // delete route
  const deleteRow = (user) => {
    const id = user.target.id;

    console.log("delete btn clicked on", id);

    axios
      .delete(`${url}/delete-user-record/${id}`)
      .then((resp) => {
        console.log("USER DELETED");
        console.log(resp);
        this.getAllUsers();
      })
      .catch(function (err) {
        console.log("USER NOT DELETED");
        console.log(err);
      });
  };

  return (
    <div className="body-page">
      {users.length === 0 ? (
        <>
          <h2>No Users To Show Though We Have Them In the DB</h2>
          <h3>Items To Be Retrieved from API</h3>
        </>
      ) : (
        <>
          <h3>Registered Users</h3>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>id</th>

                <th>name</th>

                <th>username</th>

                <th>email</th>
                <th>edit</th>
                <th>delete</th>
                <button onClick={getAllUsers}>Refresh</button>
              </tr>
            </thead>

            <tbody>
              {users.map(({ _id, fullName, username, email }) => (
                <tr>
                  <td>{_id}</td>

                  <td>{fullName}</td>

                  <td>{username}</td>
                  <td>{email}</td>

                  <td>
                    <button id={_id} onClick={editRow}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button id={_id} onClick={deleteRow}>
                      Del
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};
export default ViewUsers;
