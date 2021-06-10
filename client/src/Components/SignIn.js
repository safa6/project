import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../redux/actions";
import "./SignIn.css";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { loading } = useSelector((state) => state);
  const loginUser = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  return localStorage.getItem("token") ? (
    <Redirect to="/profile" />
  ) : loading ? (
    <h1>Please wait...</h1>
  ) : (
    <div className="file">
      <p class="sign" align="center">Sign in</p>
      <form>
        <label>Email address</label>
        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        
        <button variant="primary" type="submit" onClick={loginUser}>
          Submit
        </button>
        {/* <p> Not a member </p> <a href="#" SignUp /> */}
      </form>

    </div>
  );
};

export default SignIn;