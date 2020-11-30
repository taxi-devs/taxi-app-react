import React, { useContext } from "react";

import Cookies from "js-cookie";

import AuthApi from "./AuthApi";

const AdminLogin = () => {
  const Auth = useContext(AuthApi);

  const handleLogin = () => {
    Auth.setAdminAuth(true);
    Cookies.set("admin", "loginTrue");
  };

  return (
    <>
      <h2 style={{ color: "red" }}>Admin Dashboard</h2>
      <button onClick={handleLogin}>Login</button>
      <button>Logout</button>
    </>
  );
};

export default AdminLogin;
