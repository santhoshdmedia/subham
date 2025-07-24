const { Schema, model } = require("mongoose");

module.exports = model(
  "user",
  Schema(
    {
      role: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
      },
      address: {
        type: String,
      },
      emergency_contact: {
        type: Number,
      },
      alternate_number: {
        type: Number,
      },
      city: {
        type: String,
      },
      work_district: {
        type: String,
      },
      country: {
        type: String,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      mobile_number: {
        type: Number,
      },
      password: {
        type: String,
        required: true,
      },
      pincode: {
        type: Number,
      },
      state: {
        type: String,
      },
      selected_area_admin: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
      added_by: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
      user_img: {
        type: String,
      },
    },
    {
      collection: "user",
      timestamps: true,
    }
  )
);
