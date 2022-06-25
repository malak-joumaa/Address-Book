import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setName] = useState("");
  console.log(email);
  console.log(pass);
  console.log(fullname);

  return (
    <div>
      <div className="container">
        <form className="user-form">
          <div className="box">
            <h2 className="title">Sign In</h2>
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
            <button className="btn">Sign up</button>
            <br />
            <span>
              Already have an account? <Link to="/">Sign In</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
