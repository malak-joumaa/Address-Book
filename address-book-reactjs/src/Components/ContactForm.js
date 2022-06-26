import React from "react";
import PhoneInput from "react-phone-number-input";
import Maps from "../Components/Maps";

const ContactFrom = ({
  title = "",
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
      <div className="fill-contact">
        <h2>{title}</h2>
        <label>First Name:</label>
        <br />
        <input
          type="text"
          id="lname"
          className="txtbox"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <br />
        <label>Last Name:</label>
        <br />
        <input
          type="text"
          id="fname"
          className="txtbox"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="email"
          id="email"
          className="txtbox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Relationship Status:</label>
        <br />
        <input
          type="radio"
          name="status"
          value="Single"
          onChange={(e) => setStatus(e.target.value)}
        />
        <span>Single</span>
        <input
          type="radio"
          name="status"
          value="Married"
          onChange={(e) => setStatus(e.target.value)}
        />
        <span>Married</span>
        <br />
        <label>Phone number:</label>
        <br />
        <PhoneInput
          className="last-labels"
          placeholder="Enter phone number"
          value={number}
          onChange={setNumber}
        />
        <br />
        <label>Location:</label>
        <br />
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
    </div>
  );
};

export default ContactFrom;
