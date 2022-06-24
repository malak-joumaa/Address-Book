const Contact = require("../../model/Contacts");

async function addContact(body) {
  const {
    first_name,
    last_name,
    email,
    relationship_status,
    phone_number,
    location,
    user,
  } = body;

  const contact = new Contact({
    first_name,
    last_name,
    email,
    relationship_status,
    phone_number,
    location,
    user,
  });

  return await contact.save();
}

async function getContacts() {
  return await Product.find().populate("user");
}

module.exports = {
  addContact,
  getContacts,
};
