const ViewUsers = ({ users }) => {
  // console.log("herere....", users.users);
  return (
    <div className="body-page">
      {users === undefined ? (
        <>
          <h2>No Users To Show Though We Have Them In the DB</h2>
          <h3>Items To Be Retrieved from API</h3>
        </>
      ) : (
        <>
          {users.map((user) => {
            const { _id, fullName, username, email } = user;
            return (
              <ul className="list" key={_id}>
                <li>Name: {fullName}</li>
                <li>Username: {username}</li>
                <li>Email: {email}</li>
              </ul>
            );
          })}
        </>
      )}
    </div>
  );
};
export default ViewUsers;
