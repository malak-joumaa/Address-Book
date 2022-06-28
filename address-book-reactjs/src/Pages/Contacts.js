import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import ContactForm from "../Components/ContactForm";
import SearchBox from "../Components/SearchBox";
import abook from "../assets/abook.png";

const Contacts = () => {
  const navigate = useNavigate();
  // Form inputs
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [status, setStatus] = useState("single");
  // Display Update form
  const [displayForm, setDisplayForm] = useState(false);
  // User Contacts
  const [contact, setContacts] = useState([]);
  // Id of contact to update
  const [selectedId, setSelectedId] = useState(1);
  // Search
  const [filteredData, setFilteredData] = useState(contact);
  // Maps
  const [locationName, setLocationName] = useState("");
  const [selectedPosition, setSelectedPosition] = useState([
    33.893791, 35.501778,
  ]);

  useEffect(() => {
    fetchContacts();
    getName();
  }, []);

  // Get Contacts
  const fetchContacts = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/contact?id=" +
          localStorage.getItem("user_id")
      );
      const data = await res.json();
      console.log(data);
      setContacts(data);
      setFilteredData(data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(contact);

  // Delete Contact
  const deleteContact = async (contact_id) => {
    console.log(contact_id);
    const res = await fetch(
      "http://localhost:5000/api/contact/?id=" + contact_id,
      {
        method: "DELETE",
        headers: {
          "x-access-token": localStorage.getItem("token"),
          "Content-type": "application/json",
        },
      }
    );
  };

  // Update Contact
  const updateContact = async (contact_id) => {
    const res = await fetch(
      "http://localhost:5000/api/contact/?id=" + contact_id,
      {
        method: "PUT",
        headers: {
          "x-access-token": localStorage.getItem("token"),
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
      }
    );
  };

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

  // Search
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    console.log(value);
    console.log(event);
    let result = [];
    result = filteredData.filter((contact) => {
      console.log(contact);
      console.log("heree");
      console.log(filteredData);

      console.log(contact.first_name.search(value));
      return (
        contact.first_name.search(value) != -1 ||
        contact.last_name.search(value) != -1 ||
        contact.phone_number.search(value) != -1 ||
        contact.email.search(value) != -1 ||
        contact.relationship_status.search(value) != -1 ||
        contact.location.search(value) != -1
      );
    });
    console.log(result);
    setContacts(result);
  };

  return (
    <div className="container">
      <div className="contact-form">
        <span className="title contact-span">
          {localStorage.getItem("username")}'s Contacts
        </span>
        {/* Logout */}
        <i
          className="fa-solid fa-arrow-right-from-bracket logout"
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            localStorage.removeItem("user_id");
            navigate("/");
          }}
        ></i>
        <div>
          <img src={abook} id="book-img" />
          <div id="all-contacts">
            <div className="search-add">
              <SearchBox handleSearch={handleSearch} />
              <Button btn_name="Add Contact" page="add-contact" />
            </div>
            <div id="tbl">
              <table>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone number</th>
                  <th>
                    Relationship
                    <br /> Status
                  </th>
                  <th>Location</th>
                  <th></th>
                  <th></th>
                </tr>

                {contact.map((singleContact, index) => (
                  <tr key={index}>
                    <td>{contact[index].first_name}</td>
                    <td>{contact[index].last_name}</td>
                    <td>{contact[index].email}</td>
                    <td>{contact[index].phone_number}</td>
                    <td>{contact[index].relationship_status}</td>
                    <td>{contact[index].location}</td>
                    <td>
                      {/* Delete Contact */}
                      <i
                        className="fa-solid fa-trash"
                        onClick={() => {
                          deleteContact(contact[index]._id);
                        }}
                      ></i>
                    </td>
                    <td>
                      {/* Update Contact */}
                      <i
                        className="fa-solid fa-pen-to-square"
                        onClick={() => {
                          setDisplayForm(true);
                          setFname(contact[index].first_name);
                          setLname(contact[index].last_name);
                          setEmail(contact[index].email);
                          setStatus(contact[index].relationship_status);
                          setNumber(contact[index].phone_number);
                          setLocationName(contact[index].location);
                          setSelectedId(contact[index]._id);
                        }}
                      ></i>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
          {/* Update Form */}
          {displayForm ? (
            <ContactForm
              title="Update Contact"
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
          ) : (
            <></>
          )}
          {/* Update button */}
          {displayForm ? (
            <button
              className="btn update-btn"
              onClick={() => {
                console.log(selectedId);
                updateContact(selectedId);
                setDisplayForm(false);
                window.location.reload();
              }}
            >
              Update
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
