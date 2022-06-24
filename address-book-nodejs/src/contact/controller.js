const { addContact, getById } = require("./contact");
const User = require("../../model/Users");
const Contact = require("../../model/Contacts");

async function add(req, res) {
  try {
    console.log(req.body);
    if (!req.body) return res.status(400).send("invalid credentials");

    const newContact = await addContact(req.body);
    console.log("newContact =>", newContact);
    if (!newContact) return res.status(400).send("invalid credentials");

    // Updating user containing this contact
    const updateUser = await User.updateOne(
      {
        _id: newContact.user,
      },
      {
        $push: {
          contacts: newContact._id,
        },
      }
    );
    console.log("updateUser =>", updateUser);

    return res.status(200).send(newContact);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

//Get contacts by user id
async function get(req, res) {
  try {
    console.log(req.query);

    if (req.query.id) {
      const id = req.query.id;
      const result = await getById(id);
      console.log("result of specific user =>", result);
      return res.send(result);
    }
  } catch (error) {
    console.log(error);
  }
}

// Delete contact by contact id
async function deleteContact(req, res) {
  try {
    const contact = await Contact.findOne({ _id: req.query.id });
    if (!contact) return res.status(400).send("invalid credentials");

    const deleteContact = await contact.remove();

    await User.updateOne(
      { _id: contact.user },
      { $pull: { contacts: contact._id } }
    );

    return res.send("contact removed");
  } catch (error) {
    console.log(error);
  }
}

// Update contact by contact id
async function updateContact(req, res) {
  try {
    console.log("update");
    const contact = await Contact.findByIdAndUpdate(
      { _id: req.query.id },
      {
        $set: {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          relationship_status: req.body.relationship_status,
          phone_number: req.body.phone_number,
          location: req.body.location,
          user: req.body.user,
        },
      }
    );
    return res.send();
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  add,
  get,
  deleteContact,
  updateContact,
};
