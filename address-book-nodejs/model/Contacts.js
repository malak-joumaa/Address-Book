const mongoose = require("mongoose");

const contactsSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  last_name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  relationship_status: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  phone_number: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  location: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },
});

module.exports = mongoose.model("Contacts", contactsSchema);
