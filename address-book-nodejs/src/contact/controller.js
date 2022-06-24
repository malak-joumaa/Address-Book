const { addContact, getContacts } = require("./contact");
const User = require("../../model/Users");
const Contact = require("../../model/Contacts");

async function add(req, res) {
  try {
    console.log(req.body);

    // validate the form
    // 400
    // res.status(400).send(error);

    const newContact = await addContact(req.body);
    console.log("newContact =>", newContact);
    // 400

    // use updateMany()
    // to find all categories in this product and update them to include this product
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

    return res.status(200).send(newContact); // 200
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

async function get(req, res) {
  try {
    console.log(req.query);

    const result = await getContacts();
    console.log("result =>", result);

    return res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function deleteContact(req, res) {
  try {
    const contact = await Contact.findOne({ _id: req.query.id });
    // if !product return -> 404

    const deleteContact = await contact.remove();
    // deleteResult -> 400

    await User.updateOne(
      { _id: contact.user },
      { $pull: { contacts: contact._id } }
    );

    return res.send("contact removed");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  add,
  get,
  deleteContact,
};
