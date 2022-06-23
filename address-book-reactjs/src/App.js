import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  console.log(email);
  console.log(pass);
  // Send data to database
  const signIn = async () => {
    console.log(email, pass);
    const res = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
    });
    const data = await res.json();
    window.localStorage.setItem("token", data.access_token);
    console.log(data);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Survey</h1>
              <div id="sign-in">
                <form>
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
                      value={pass}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button
                      onClick={() => {
                        signIn();
                      }}
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </>
          }
        ></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
