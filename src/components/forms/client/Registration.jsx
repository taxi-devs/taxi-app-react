// // import { handleInputs } from "./processForm";

// // import axios from "axios";

// const UserSignUp = ({ registeredUsers }) => {
//   const [{ fullname, email, password, username }, handleChange] = handleInputs({
//     fullname: "",
//     email: "",
//     password: "",
//     username: "",
//   });

//   const registerNewUser = (evt) => {
//     evt.preventDefault();
//     console.log(evt.target);

//     const newUserDetails = {
//       fullName: fullname,
//       email: email,
//       password: password,
//       username: username,
//     };

//     {
//       registeredUsers.push(newUserDetails);
//     }

//     console.log(newUserDetails);

//     // axios
//     //   .post(`${this.state.url}/sign-up`, newUserDetails)
//     //   .then((resp) => {
//     //     console.log("user added");
//     //     console.log(resp.data);
//     //   })
//     //   .catch((err) => {
//     //     console.log(err);
//     //   });
//   };

//   return (
//     <div className="body-page">
//       <h2>Register With Us</h2>
//       <form className="signUp-form">
//         <div>
//           <label>Full Name</label>
//           <input
//             onChange={handleChange}
//             type="text"
//             name="fullname"
//             placeholder="enter fullname"
//             value={fullname}
//           />
//         </div>

//         <div>
//           <label>User Name</label>
//           <input
//             onChange={handleChange}
//             name="username"
//             type="text"
//             placeholder="enter username"
//             value={username}
//           />
//         </div>

//         <div>
//           <label>Email</label>
//           <input
//             type="text"
//             name="email"
//             placeholder="enter your email"
//             value={email}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label>Password</label>
//           <input
//             name="password"
//             onChange={handleChange}
//             id="password"
//             type="password"
//             placeholder="enter a password"
//             value={password}
//           />
//         </div>

//         <div className="action-btn">
//           <input
//             id="submit"
//             type="submit"
//             value="Sign Up"
//             onClick={registerNewUser}
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UserSignUp;
