const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  country_code: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
});

const userSchema = new mongoose.Schema({
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
    unique: true,
  },
  relationship_status: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  phone_number: phoneSchema,
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinated: {
      type: [Number],
      required: true,
    },
  },
});

module.exports = mongoose.model("Users", userSchema);
