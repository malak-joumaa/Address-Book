import React, { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import ContactFrom from "../Components/ContactForm";

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
        user: localStorage.getItem("user_id"),
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div id="add-contact">
      <h1>Add Contact</h1>
      <form>
        <ContactFrom
          fname={fname}
          setFname={setFname}
          lname={lname}
          setLname={setLname}
          email={email}
          setEmail={setEmail}
          setStatus={setStatus}
          number={number}
          setNumber={setNumber}
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
          locationName={locationName}
          setLocationName={selectedPosition}
          getName={getName}
        />
        <button
          className="btn"
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
