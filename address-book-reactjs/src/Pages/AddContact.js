import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const AddContact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [value, setValue] = useState();
  console.log(fname);
  console.log(lname);
  console.log(email);
  console.log(value);

  return (
    <div>
      <h1>Add Contact</h1>
      <form>
        <label>First Name</label>
        <br />
        <input
          type="text"
          id="lname"
          className="txtbox"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <br />
        <label>Last Name</label>
        <br />
        <input
          type="text"
          id="fname"
          className="txtbox"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          id="email"
          className="txtbox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Relationship Status</label>
        <br />
        <input type="radio" name="status" />
        Single
        <input type="radio" name="status" />
        Married
        <br />
        <label>Phone number</label>
        <br />
        <PhoneInput
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
        />
        <br />
        <label>Location</label>
      </form>
    </div>
  );
};

export default AddContact;
