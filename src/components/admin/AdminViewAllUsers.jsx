const ViewUsers = ({ registeredUsers }) => {
  console.log("herere....", registeredUsers);
  return (
    <>
      {registeredUsers.length === 0 ? (
        <>
          <h2>No Users To Show</h2>
        </>
      ) : (
        <>
          {registeredUsers.map((user) => {
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
    </>
  );
};
export default ViewUsers;
