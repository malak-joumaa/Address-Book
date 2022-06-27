import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setName] = useState("");
  const [displayError, setDisplayError] = useState(false);
  console.log(email);
  console.log(password);
  console.log(fullname);

  const signUp = async () => {
    console.log(fullname, email, password);
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: fullname,
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <div className="container">
        <form className="user-form">
          <div className="box">
            <h2 className="title">Sign Up</h2>
            {displayError ? (
              <p className="red">Please fill all fields!</p>
            ) : (
              <></>
            )}
            <label className="lbl">Name</label>
            <br />
            <input
              type="text"
              id="name"
              className="txtbox"
              name="text"
              value={fullname}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
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
                if (fullname == "" || password == "" || email == "") {
                  setDisplayError(true);
                } else {
                  signUp();
                  navigate("/");
                }
              }}
            >
              Sign up
            </button>
            <br />
            <span className="account">Already have an account? </span>
            <span id="sign-link" className="account">
              <Link to="/">Sign In</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
