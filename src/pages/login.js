import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "src/redux/slices/user";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const handleLogin = () => {
    dispatch(login({ name: "John", age: 20, email: "" }));
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <br />
      <button onClick={handleLogout}>Logout</button>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </>
  );
}

export default Login;



