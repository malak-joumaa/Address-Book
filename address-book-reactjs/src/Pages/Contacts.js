import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import SearchBox from "../Components/SearchBox";

const Contacts = () => {
  const [contact, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/contact?id=" + localStorage.getItem("id")
      );
      const data = await res.json();
      console.log(data);
      setContacts(data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(contact);

  return (
    <div>
      <h1>{localStorage.getItem("username")}'s Contacts</h1>
      <div>
        <div id="all-contacts">
          <SearchBox />
          <Button btn_name="Add Contact" page="add-contact" />
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
            </tr>

            {contact.map((singleContact, index) => (
              <tr key={index}>
                <td>{contact[index].first_name}</td>
                <td>{contact[index].last_name}</td>
                <td>{contact[index].email}</td>
                {/* <td>{contact[index].phone_number.number}</td> */}
                <td>{contact[index].relationship_status}</td>
                <td>{contact[index].location.coordinates}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
