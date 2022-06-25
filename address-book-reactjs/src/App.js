import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import SignUp from "./Pages/Signup";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  console.log(password);
  // Send data to database
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
    window.localStorage.setItem("token", data.token);
    window.localStorage.setItem("user_id", data.user_id);
    window.localStorage.setItem("token", data.user_name);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <div className="container">
                  <form className="user-form">
                    <div className="box">
                      <h2 className="title">Sign In</h2>
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
                      <Link to="/sign-up">
                        <button
                          className="btn"
                          onClick={() => {
                            signIn();
                          }}
                        >
                          Sign in
                        </button>
                      </Link>
                      <br />
                      <span>
                        Don't have an account?
                        <Link to="/sign-up">Sign Up</Link>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </>
          }
        ></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
