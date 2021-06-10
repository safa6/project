import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions";
import { Redirect } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const { loading, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const[cours,setCours]= useState();
  const addUser = (e) => {
    e.preventDefault();
    dispatch(
      register({
        name,
        email,
        phoneNumber,
        password,
        cours,
      })
    );
  };
  return (
    <div className="SignUp-box">
      {loading ? (
        <h2> Please wait... </h2>
      ) : user ? (
        <Redirect to="/login" />
      ) : (
        <div >
          <h1>Sign Up</h1>
          <form >
            <div className="form-grp">
              <label className="name">Name</label>
              <input
                type="text"
                placeholder="Enter name" required
                onChange={(e) => setName(e.target.value)}
              />
              </div>
              <div className="form-grp">
              <label>Email address</label>
              <input
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              </div>
              <p>
                We'll never share your email with anyone else.
              </p>
            <div className="form-grp">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Enter phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            </div>
            <div className="form-grp">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              </div>
              <div className="form-grp">
            <label>Cours</label>
            <input
              type="text"
              placeholder="Enter Cours"
              onChange={(e) => setCours(e.target.value)}
            />
            </div>

          
            <button variant="primary" type="submit" onClick={addUser}>
              Submit
            </button>
            
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;