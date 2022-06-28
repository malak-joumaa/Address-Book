import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  console.log(password);
  const [displayError, setDisplayError] = useState(false);

  const signIn = async () => {
    console.log(email, password);
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    console.log(data);
    var token = data.token;
    // Saving token in local storage
    window.localStorage.setItem("token", token);
    // Decode JWT
    var decoded = jwt_decode(token);
    console.log(decoded);
    window.localStorage.setItem("username", decoded.name);
    window.localStorage.setItem("user_id", decoded._id);
    navigate("/contacts");
  };

  return (
    <div>
      <div className="container">
        <form className="user-form">
          <div className="box">
            <h2 className="title">Sign In</h2>
            {displayError ? (
              <p className="red">Please fill all fields!</p>
            ) : (
              <></>
            )}
            <label className="lbl">Email</label>
            <br />
            <input
              type="email"
              id="email"
              className="txtbox"
              name="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label className="lbl">Password</label>
            <br />
            <input
              type="password"
              id="password"
              className="txtbox"
              name="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                if (email == "" || password == "") {
                  setDisplayError(true);
                } else {
                  setDisplayError(false);
                  signIn();
                }
              }}
            >
              Sign in
            </button>
            <br />
            <span className="account">Don't have an account? </span>
            <span className="sign-link">
              <Link to="/sign-up">Sign Up</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
