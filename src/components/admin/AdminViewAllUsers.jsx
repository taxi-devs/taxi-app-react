const ViewUsers = () => {
  return (
    <table>
      <tr>
        <th>id</th>
        <th>username</th>
        <th>fullname</th>
        <th>email</th>
      </tr>
      <tr>
        <td>_id.no</td>
        <td>user.name</td>
        <td>full.name</td>
        <td>email.address</td>

        <input type="submit" value="edit" />

        <input type="submit" value="delete" />
      </tr>
    </table>
  );
};

export default ViewUsers;
