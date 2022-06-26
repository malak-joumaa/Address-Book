import React from "react";
import PhoneInput from "react-phone-number-input";
import Maps from "../Components/Maps";

const ContactFrom = ({
  fname,
  setFname,
  lname,
  setLname,
  email,
  setEmail,
  setStatus,
  number,
  setNumber,
  selectedPosition,
  setSelectedPosition,
  getName,
  locationName,
  setLocationName,
}) => {
  return (
    <div>
      {" "}
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
      <input
        type="radio"
        name="status"
        value="Single"
        onChange={(e) => setStatus(e.target.value)}
      />
      Single
      <input
        type="radio"
        name="status"
        value="Married"
        onChange={(e) => setStatus(e.target.value)}
      />
      Married
      <br />
      <label>Phone number</label>
      <br />
      <PhoneInput
        placeholder="Enter phone number"
        value={number}
        onChange={setNumber}
      />
      <br />
      <label>Location</label>
      <br />
      <span>{locationName}</span>
      {/* Including Map */}
      <Maps
        selectedPosition={selectedPosition}
        setSelectedPosition={setSelectedPosition}
        getName={getName}
        setLocationName={setLocationName}
      />
    </div>
  );
};

export default ContactFrom;
