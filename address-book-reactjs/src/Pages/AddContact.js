import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Maps from "../Components/Maps";

const AddContact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [status, setStatus] = useState("");
  const [selectedPosition, setSelectedPosition] = useState([
    33.893791, 35.501778,
  ]);
  const [locationName, setLocationName] = useState("");
  const initialPosition = [33.893791, 35.501778];
  console.log(fname);
  console.log(lname);
  console.log(email);
  console.log(status);
  console.log(number);

  useEffect(() => {
    getName();
  }, []);

  //Get the name of the selected location
  const getName = async (e) => {
    try {
      const res = await fetch(
        "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" +
          selectedPosition[0] +
          "&longitude=" +
          selectedPosition[1] +
          "&localityLanguage=en"
      );
      const data = await res.json();
      console.log(data);
      setLocationName("" + data.locality + ", " + data.countryName);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(locationName);

  const addContact = async () => {
    const res = await fetch("http://localhost:5000/api/contact/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        first_name: fname,
        last_name: lname,
        email: email,
        relationship_status: status,
        phone_number: number,
        location: locationName,
        user: localStorage.getItem("id"),
      }),
    });
    const data = await res.json();
    console.log(data);
  };

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
          initialPosition={initialPosition}
          getName={getName}
          setLocationName={setLocationName}
        />
        <button
          onClick={() => {
            addContact();
          }}
        >
          AddContact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
