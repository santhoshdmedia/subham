const { Schema, model, default: mongoose, Collection } = require("mongoose");

module.exports = model(
  "booking",
  Schema(
    {
      tour_id: {
        type: Schema.Types.ObjectId,
        ref: "tour",
        required: true,
      },
      package_id: {
        type: Schema.Types.ObjectId,
        ref: "package",
        required: true,
      },
      package_price: {
        type: Number,
        required: true,
      },
      total_price: {
        type: Number,
        required: true,
      },
      total_count: {
        type: Number,
        required: true,
      },
      adults_count: {
        type: Number,
        required: true,
      },
      children_count: {
        type: Number,
        required: true,
      },
      booking_by: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
    },
    {
      collection: "booking",
      timestamps: true,
    }
  )
);
