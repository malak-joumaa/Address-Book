import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/Signup";
import Contacts from "./Pages/Contacts";
import AddContact from "./Pages/AddContact";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/add-contact" element={<AddContact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
