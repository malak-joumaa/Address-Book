import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
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
                      />
                      <br />
                      <label className="lbl">Password</label>
                      <br />
                      <input
                        type="password"
                        id="password"
                        className="txtbox"
                        name="text"
                      />
                      <br />
                      <button className="btn">Sign in</button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          }
        ></Route>
        <Route path="/sign-up"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
