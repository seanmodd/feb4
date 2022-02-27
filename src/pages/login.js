import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useUserContext } from "../context/userContext";

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const { user, logIn } = useUserContext();
  const onSubmit = (data) => {
    logIn(data.name);
    user.name = data.username;
    console.log("This is data: ", data);
    console.log("This is data.username: ", data.username);
    console.log("This is user: ", user);
  };
  return (
    <>
      <h1>again</h1>
      <h1>Login Page</h1>
      <div className="login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <div className="ui divider" />
          <div className="ui form">
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                ref={register({ required: "Username is required" })}
              />
            </div>
            <p>{errors.username?.message}</p>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                ref={register({
                  required: "Password is required",
                  minLength: {
                    value: 4,
                    message: "Password must be more than 4 characters",
                  },
                  maxLength: {
                    value: 10,
                    message: "Password cannot exceed more than 10 characters",
                  },
                })}
              />
            </div>
            <p>{errors.password?.message}</p>
            <button className="fluid ui button blue">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
